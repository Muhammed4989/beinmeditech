const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const Module = require('node:module');
const ts = require('typescript');
const root = path.resolve(__dirname, '..');
const cache = new Map();
function load(name) {
  const file = path.resolve(root, name);
  if (cache.has(file)) return cache.get(file).exports;
  const mod = new Module(file, module);
  cache.set(file, mod);
  mod.filename = file;
  mod.paths = module.paths;
  const originalRequire = mod.require.bind(mod);
  mod.require = (request) => request.startsWith('.') ? load(path.relative(root, path.resolve(path.dirname(file), request) + '.ts')) : originalRequire(request);
  mod._compile(ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText, file);
  return mod.exports;
}
const blog = load('lib/blog.ts');
const catalog = load('lib/catalog.ts');
const products = load('lib/demo-products.ts');
const filters = load('lib/catalog-filters.ts');
const ai = load('lib/ai-reference.ts');
const guideContent = load('lib/catalog-guide.ts');
function guideFor(page, state = filters.readFilters(catalog.collectionPath(page.segments))) {
  const guide = guideContent.catalogGuide(page, state);
  const text = guideContent.catalogGuideText(guide);
  const words = text.trim().split(/\s+/).length;
  assert(words >= 800, 'Equipment guide must have at least 800 body words: ' + guide.title + ' (' + words + ')');
  assert.equal(new Set(guide.sections.map((section) => section.title)).size, guide.sections.length, 'No duplicate guide sections');
  for (const label of filters.filterLabels(state)) assert(guide.title.includes(label) || (label === 'Siemens Healthineers' && guide.title.includes('ACUSON NX3')), 'Guide describes selected filter: ' + label);
  return { guide, text, words };
}
const topicPaths = blog.blogTopics.map((topic) => blog.blogPath(topic.segments));
const articlePaths = blog.blogArticles.map(blog.articlePath);
const collectionPaths = catalog.seoCollections.map((page) => catalog.collectionPath(page.segments));
const productPaths = products.demoProducts.map(products.demoProductPath);
const imagePaths = [...new Set([...blog.blogArticles.map((article) => blog.blogCover(article).src), ...products.demoProducts.map((product) => product.image)])];
assert.equal(imagePaths.length, 8, 'Five editorial scenes and three additional equipment formats');
for (const image of imagePaths) {
  assert(image.endsWith('.webp'), 'Realistic website imagery uses optimized WebP: ' + image);
  const bytes = fs.readFileSync(path.join(root, 'public', image));
  assert(bytes.subarray(0, 4).toString() === 'RIFF' && bytes.subarray(8, 12).toString() === 'WEBP', 'Actual WebP image: ' + image);
  assert(bytes.length < 180000, 'Image remains within its performance budget: ' + image);
}
const allPaths = [...topicPaths, ...articlePaths, ...collectionPaths, ...productPaths];
assert.equal(new Set(allPaths).size, allPaths.length, 'Content paths must be unique');
for (const topic of blog.blogTopics) {
  assert(topic.sections.length >= 2 && topic.intro.length > 80, 'Every topic has its own content');
  assert(blog.topicArticles(topic.segments).length >= 2, 'Every subtopic has multiple articles');
  if (topic.segments.length) assert(blog.findBlogTopic(topic.segments.slice(0, -1)), 'A topic must have a valid parent');
}
for (const article of blog.blogArticles) {
  assert(blog.findBlogTopic(article.topic), 'Article topic must exist');
  const cover = blog.blogCover(article);
  assert(cover.src.startsWith('/images/blog/') && fs.existsSync(path.join(root, 'public', cover.src)), 'Every article has local editorial artwork');
  assert(cover.alt.length > 20, 'Editorial artwork has a descriptive alternative');
  assert(article.sections.length >= 3 && article.checklist.length >= 3, 'Articles must contain useful content');
  for (const crumb of blog.blogBreadcrumbs([...article.topic, article.slug], article)) assert(crumb.href === '/' || allPaths.includes(crumb.href), 'Breadcrumb target must exist: ' + crumb.href);
}
for (const product of products.demoProducts) {
  const parent = products.demoProductPath(product).split('/').slice(0, -1).join('/');
  assert(collectionPaths.includes(parent), 'Product parent must exist');
  assert(product.slug.startsWith('demo-'), 'Fictional inventory must be labelled');
  if (product.subcategory === 'portable') assert(product.image.includes('portable-ultrasound'), 'Portable systems use their own imagery');
  if (product.subcategory === 'components') assert(product.image.includes('endoscopy-components'), 'Components do not use a full tower image');
  if (product.subcategory === 'transport') assert(product.image.includes('transport-monitor'), 'Transport monitors use their own imagery');
}
for (const page of catalog.seoCollections) {
  guideFor(page);
  for (const crumb of catalog.collectionBreadcrumbs(page)) assert(crumb.href === '/' || collectionPaths.includes(crumb.href), 'Equipment breadcrumb must exist');
  for (const child of catalog.collectionChildren(page)) assert(catalog.collectionPath(child.segments).startsWith(catalog.collectionPath(page.segments) + '/'), 'Direct descendants only');
}

function subsets(items) { return Array.from({ length: 2 ** items.length }, (_, mask) => items.filter((_, index) => mask & (1 << index))); }
let filterCases = 0;
let minimumGuideWords = Infinity;
let maximumGuideWords = 0;
for (const category of subsets(['ultrasound', 'endoscopy', 'patient-monitors'])) {
  for (const condition of subsets(['used', 'refurbished', 'new'])) {
    for (const brand of subsets(['siemens', 'philips', 'olympus', 'ge-healthcare', 'demo'])) {
      for (const subcategory of [[], ['general-imaging'], ['portable'], ['systems'], ['components'], ['bedside'], ['transport'], ['general-imaging', 'portable']]) {
        const requested = filters.readFilters('/medical-equipment', { category: category.join(','), condition: condition.join(','), brand: brand.join(','), subcategory: subcategory.join(',') });
        const url = new URL(filters.filterPath(requested), 'https://example.test');
        assert(collectionPaths.includes(url.pathname), 'Filter path must be a real landing page');
        assert.deepEqual(filters.readFilters(url.pathname, Object.fromEntries(url.searchParams)), requested, 'URL must preserve every filter: ' + url);
        const { words } = guideFor(catalog.findCollection(url.pathname.split('/').slice(2)), requested);
        minimumGuideWords = Math.min(minimumGuideWords, words);
        maximumGuideWords = Math.max(maximumGuideWords, words);
        filterCases++;
      }
    }
  }
}
const usedUltrasound = filters.readFilters('/medical-equipment/used/ultrasound');
const matches = products.demoProducts.filter((product) => filters.matchesFilters(product, usedUltrasound));
assert(matches.length > 0 && matches.every((product) => product.category === 'Ultrasound' && product.condition.toLowerCase().includes('used')), 'Used ultrasound must exclude other categories and conditions');
for (const url of [...topicPaths, ...articlePaths, ...collectionPaths]) assert(ai.aiReference().includes(url), 'AI directory must include real public content');
assert(!ai.aiReference().includes('/for-sale/'), 'Removed destination routes must not return');
const rootPage = catalog.findCollection([]);
const ultrasoundGuide = guideFor(rootPage, filters.readFilters('/medical-equipment/ultrasound')).text;
const endoscopyGuide = guideFor(rootPage, filters.readFilters('/medical-equipment/endoscopy')).text;
assert(ultrasoundGuide.includes('Treat the probes as individual assets') && !endoscopyGuide.includes('Treat the probes as individual assets'), 'Category changes body content, not just its title');
const refurbishedGuide = guideFor(rootPage, filters.readFilters('/medical-equipment', { condition: 'refurbished' })).text;
assert(refurbishedGuide.includes('dated record identifying the assessment'), 'Condition-specific guidance');
const componentGuide = guideFor(rootPage, filters.readFilters('/medical-equipment', { subcategory: 'components' })).text;
assert(componentGuide.includes('An endoscopy enquiry') && componentGuide.includes('nameplate photographs'), 'Subcategory-only query uses the parent category and component guidance');
const invalidGuide = guideFor(rootPage, filters.readFilters('/medical-equipment', { brand: '<script>alert(1)</script>' })).text;
assert(!invalidGuide.includes('<script>'), 'Unknown input is never interpolated into guide content');
assert(ai.aiReference(true).includes(ultrasoundGuide.split('\n\n')[1]), 'AI extended reference matches visible guide copy');
console.log(JSON.stringify({ topics: topicPaths.length, articles: articlePaths.length, collections: collectionPaths.length, demoProducts: productPaths.length, filterRoundTrips: filterCases, minimumGuideWords, maximumGuideWords, status: 'passed' }, null, 2));

async function verifyHttp(base) {
  for (let i = 0; i < allPaths.length; i += 6) {
    await Promise.all(allPaths.slice(i, i + 6).map(async (route) => {
      const response = await fetch(base + route);
      assert.equal(response.status, 200, route + ' HTTP status');
      const html = await response.text();
      assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, route + ' has one H1');
      assert(html.includes('rel="canonical" href="' + catalog.SITE_URL + route + '"'), route + ' canonical');
      assert(html.includes('application/ld+json'), route + ' structured data');
      if (topicPaths.includes(route)) {
        assert(html.includes('journal-list-item'), route + ' uses the editorial archive layout');
        assert(html.includes('journal-introduction'), route + ' preserves expandable category content');
      }
      if (articlePaths.includes(route)) {
        assert(html.includes('journal-article-body') && html.includes('journal-cover'), route + ' has the reading layout and cover');
        assert(html.includes('id="checklist"'), route + ' keeps article anchors');
        assert(html.includes('AI-generated editorial image'), route + ' identifies generated imagery');
      }
      if (route.includes('/demo-')) {
        assert(/name="robots" content="[^"]*noindex/.test(html), route + ' demo noindex');
        assert(html.includes('Not a photograph of this model'), route + ' does not present generated imagery as a real unit');
      }
      if (collectionPaths.includes(route)) {
        const disclosure = html.match(/<details[^>]*id="equipment-buying-guide"[^>]*>([\s\S]*?)<\/details>/);
        assert(disclosure, route + ' has server-rendered guide');
        assert(!disclosure[0].split('>')[0].includes('open'), route + ' starts collapsed');
        assert(disclosure[1].replace(/<[^>]*>/g, ' ').trim().split(/\s+/).length >= 800, route + ' has full text before interaction');
        assert(disclosure[1].includes('Read more') && disclosure[1].includes('Read less'), route + ' native toggle labels');
        assert(!html.includes('Explore this equipment category') && !html.includes('Understand the equipment'), route + ' removes old card and duplicate content sections');
        const page = catalog.findCollection(route.split('/').slice(2));
        for (const child of catalog.collectionChildren(page)) assert(html.includes('href="' + catalog.collectionPath(child.segments) + '"'), route + ' keeps crawlable descendant links');
      }
    }));
  }
  const sitemap = await (await fetch(base + '/sitemap.xml')).text();
  for (const image of imagePaths) {
    const response = await fetch(base + image);
    assert.equal(response.status, 200, image + ' is served');
    assert(response.headers.get('content-type').includes('image/webp'), image + ' MIME type');
  }
  for (const route of [...topicPaths, ...articlePaths, ...collectionPaths]) assert(sitemap.includes(catalog.SITE_URL + route + '</loc>'), route + ' in sitemap');
  assert(!sitemap.includes('/demo-'), 'Demo products excluded from sitemap');
  const legacy = await fetch(base + '/products/demo-siemens-acuson-nx3-2019', { redirect: 'manual' });
  assert.equal(legacy.status, 308);
  assert.equal(legacy.headers.get('location'), products.demoProductPath(products.demoProducts[0]));
  const query = await (await fetch(base + '/medical-equipment/used/ultrasound?brand=siemens')).text();
  assert(/name="robots" content="[^"]*noindex/.test(query), 'Filtered results noindex');
  assert(query.includes('Siemens Healthineers Equipment'), 'Filtered H1 describes selection');
  assert(query.replace(/<!--.*?-->/g, '').includes('1 demonstration result'), 'Server returns filtered inventory');
  assert(query.includes('Reviewing Siemens Healthineers equipment') && query.includes('What to check when buying used equipment'), 'Server guide follows combined filters');
  const multi = await (await fetch(base + '/medical-equipment?category=ultrasound,endoscopy&condition=refurbished&brand=philips')).text();
  assert(multi.includes('Defining an endoscopy package') && multi.includes('Comparing ultrasound configurations') && multi.includes('Ask what refurbishment actually included') && multi.includes('Reviewing Philips equipment'), 'Multi-select server guide includes each selection');
  assert(!multi.includes('What to check when buying used equipment'), 'Previous condition does not leak into new selection');
  const invalid = await fetch(base + '/blog/equipment-guides/no-such-topic');
  assert.equal(invalid.status, 404, 'Unknown hierarchy returns a 404');
  console.log('HTTP checks passed for ' + allPaths.length + ' routes, metadata, sitemap, filters and redirects.');
}
if (process.argv[2]) verifyHttp(process.argv[2]).catch((error) => { console.error(error); process.exitCode = 1; });
