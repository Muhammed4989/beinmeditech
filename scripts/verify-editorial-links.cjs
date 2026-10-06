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
  mod.require = request => request.startsWith('.') ? load(path.relative(root, path.resolve(path.dirname(file), request) + '.ts')) : originalRequire(request);
  mod._compile(ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText, file);
  return mod.exports;
}
const blog = load('lib/blog.ts');
const catalog = load('lib/catalog.ts');
const linking = load('lib/blog-editorial-links.ts');
const ai = load('lib/ai-reference.ts');
const targets = new Set([...blog.blogArticles.map(blog.articlePath), ...blog.blogTopics.map(topic => blog.blogPath(topic.segments)), ...catalog.seoCollections.map(page => catalog.collectionPath(page.segments)), '/services/medical-integration-services']);
const fullReference = ai.aiReference(true);
let internalLinks = 0;
let externalLinks = 0;
let citedArticles = 0;
for (const article of blog.blogArticles) {
  const links = linking.articleLinks(article.slug);
  assert(links.filter(link => link.href.startsWith('/')).length >= 2, article.slug + ' needs contextual internal reading, not just footer links');
  const paragraphs = new Map([['intro', article.intro], ...article.sections.map(section => [section.title, section.body])]);
  for (const link of links) {
    const text = paragraphs.get(link.paragraph);
    assert(text, article.slug + ' missing named paragraph ' + link.paragraph);
    assert.equal(text.split(link.label).length - 1, 1, article.slug + ' anchor must occur exactly once: ' + link.label);
    assert(linking.safeEditorialHref(link.href), 'Safe editorial URL');
    assert(!link.href.includes('/demo-'), 'Never link fictional commercial examples');
    assert.notEqual(link.href, blog.articlePath(article), 'No self-link');
    if (link.href.startsWith('/')) { assert(targets.has(link.href), 'Known internal target ' + link.href); internalLinks++; }
    else { assert(['www.who.int', 'www.fda.gov', 'dicom.nema.org'].includes(new URL(link.href).hostname), 'Checked primary source only'); externalLinks++; }
    assert(fullReference.includes('[' + link.label + '](' + (link.href.startsWith('/') ? catalog.SITE_URL + link.href : link.href) + ')'), 'AI reference retains readable, absolute links');
  }
  for (const [name, text] of paragraphs) {
    const parts = linking.linkedTextParts(text, linking.articleLinks(article.slug, name));
    assert.equal(parts.map(part => part.text).join(''), text, 'Inline links must preserve the original paragraph text');
    assert.equal(parts.filter(part => part.href).length, linking.articleLinks(article.slug, name).length, 'No overlapping or silently dropped anchors');
  }
  const references = linking.articleReferences(article.slug);
  if (references.length) citedArticles++;
  for (const reference of references) {
    assert(links.some(link => link.href === reference.href), 'Source is linked at the relevant statement, not just an unrelated footer');
    assert(reference.publisher && reference.note && reference.checkedAt === '2026-10-06');
  }
  if (references.length) assert(blog.articleUpdatedDate(article) >= '2026-10-06', 'Retain the substantive source-context revision date, or a later real revision');
}
for (const unsafe of ['javascript:alert(1)', 'data:text/html,hello', '//evil.example', '/\\evil.example', 'https://user:password@example.com', 'https://example.com\n']) assert(!linking.safeEditorialHref(unsafe));
assert.equal(linking.linkedTextParts('<script>alert(1)</script>', [{ label: 'alert', href: 'javascript:alert(1)' }]).some(part => part.href), false, 'Unsafe input cannot become an anchor');
assert.equal(linking.linkedTextParts('Same phrase', [{ label: 'not present', href: '/blog' }]).map(part => part.text).join(''), 'Same phrase');
console.log(JSON.stringify({ articles: blog.blogArticles.length, internalLinks, externalLinks, citedArticles, status: 'passed' }, null, 2));

async function verifyHttp(base) {
  for (const article of blog.blogArticles) {
    const response = await fetch(base + blog.articlePath(article));
    assert.equal(response.status, 200);
    const html = await response.text();
    const paragraphs = new Map([...html.matchAll(/<p data-editorial-paragraph="([^"]+)"[^>]*>([\s\S]*?)<\/p>/g)].map(match => [match[1], match[2]]));
    for (const link of linking.articleLinks(article.slug)) {
      const paragraph = paragraphs.get(link.paragraph);
      assert(paragraph, 'Server renders named editorial paragraph');
      const anchors = [...paragraph.matchAll(/<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g)];
      const anchor = anchors.find(match => match[1] === link.href && match[2].replace(/<[^>]*>/g, '').startsWith(link.label));
      assert(anchor, article.slug + ' has a crawlable contextual anchor: ' + link.label);
      if (link.href.startsWith('/')) assert.equal((await fetch(base + link.href)).status, 200, 'Reachable reading target ' + link.href);
      else { assert(!anchor[0].includes('nofollow')); assert(anchor[0].includes('noopener noreferrer')); }
    }
    const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]));
    const posting = schemas.flatMap(schema => schema['@graph'] || [schema]).find(schema => schema['@type'] === 'BlogPosting');
    const references = linking.articleReferences(article.slug);
    assert.deepEqual(posting.citation || [], references.map(reference => reference.href), 'Schema agrees with visible references');
    assert.equal(html.includes('id="references"'), references.length > 0, 'No empty or forced reference sections');
    for (const reference of references) assert(html.includes(reference.publisher) && html.includes(reference.note), 'Explain reference scope to readers');
  }
  console.log('Server-rendered inline links and source/schema checks passed for all 15 articles.');
}
module.exports = { verifyHttp };
if (require.main === module && process.argv[2]) verifyHttp(process.argv[2]).catch(error => { console.error(error); process.exitCode = 1; });
