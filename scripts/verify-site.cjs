const assert = require('node:assert/strict');
const base = process.argv[2] || 'http://127.0.0.1:3030';
const routes = ['/', '/about', '/contact', '/request-quote', '/services', '/services/medical-devices-trading', '/services/software-and-hardware-consultation', '/services/training-and-support-services', '/services/custom-it-solutions-for-healthcare', '/services/medical-integration-services', '/privacy', '/terms', '/blog', '/medical-equipment', '/medical-equipment/used'];
async function main() {
  const links = new Set();
  const images = new Set();
  for (const route of routes) {
    const response = await fetch(base + route);
    assert.equal(response.status, 200, route);
    const html = await response.text();
    assert.equal((html.match(/<main(?:\s|>)/g) || []).length, 1, route + ' has one main landmark');
    assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, route + ' has one heading');
    assert(html.includes('Skip to content'), route + ' keyboard skip link');
    assert(html.includes('site-header') && html.includes('site-footer'), route + ' shared shell');
    assert(html.includes('bein-meditech.png'), route + ' uses the repaired brand asset');
    assert(html.includes('tel:+491776319537') && html.includes('+49 177 6319537'), route + ' uses the owner-confirmed telephone');
    assert(html.includes('https://wa.me/491776319537'), route + ' WhatsApp uses the confirmed telephone');
    assert(!html.includes('4917641963598') && !html.includes('176 419 63598'), route + ' has no superseded telephone');
    assert(!html.includes('/images/logo.svg') && !html.includes('/images/logo-white.svg'), route + ' has no tiny placeholder logo');
    assert(!html.includes('images.unsplash.com'), route + ' has no remote image dependency');
    if (route === '/') {
      assert(html.includes('Empowering Care,') && html.includes('Enhancing Life'), 'Restored homepage headline');
      assert(html.includes('hero.svg'), 'Preserve the user-requested legacy home hero');
      assert(!html.includes('The right technology.'), 'Do not reapply the rejected homepage redesign');
      assert(html.includes('unverified placeholders'), 'Legacy company claims remain visibly unverified');
    } else assert(!html.includes('hero.svg'), route + ' no legacy hero outside home');
    if (route === '/about') {
      const portrait = html.match(/<figure[^>]*aria-labelledby="bilal-alhasan-name"[^>]*>[\s\S]*?<\/figure>/)?.[0];
      assert(portrait, 'About retains the user-confirmed Bilal portrait');
      assert(portrait.includes('bilal-alhasan.png'), 'Portrait uses a local asset');
      assert(portrait.includes('Bilal Alhasan') && portrait.includes('Business Developer Manager') && portrait.includes('Co-Founder'), 'Portrait retains the approved name and role');
      assert(portrait.includes('width="353"') && portrait.includes('height="399"'), 'Portrait retains its original aspect ratio');
      assert(!html.includes('equipment-consultation.webp') && !portrait.includes('AI-generated'), 'Do not replace the real portrait with an illustration');
      const asset = await fetch(base + '/images/team/bilal-alhasan.png');
      assert.equal(asset.status, 200, 'Original portrait is available');
      assert(asset.headers.get('content-type')?.includes('image/png'), 'Portrait serves as a PNG');
      const hash = require('node:crypto').createHash('sha256').update(Buffer.from(await asset.arrayBuffer())).digest('hex');
      assert.equal(hash, require('../assets/site-refresh/bilal-alhasan-photo.json').sha256, 'Preserve the approved photograph without alteration');
    }
    assert(html.includes('rel="canonical"'), route + ' canonical');
    for (const match of html.matchAll(/<a[^>]+href="([^"]+)"/g)) {
      const href = match[1].replace(/&amp;/g, '&');
      if (href.startsWith('/') && !href.startsWith('//')) links.add(href.split('#')[0]);
    }
    for (const match of html.matchAll(/<img[^>]+src="([^"]+)"/g)) {
      const url = new URL(match[1].replace(/&amp;/g, '&'), base);
      const source = url.searchParams.get('url') || url.pathname;
      if (source.startsWith('/images/')) images.add(source);
    }
  }
  for (const set of [links, images]) {
    const items = [...set];
    for (let i = 0; i < items.length; i += 6) await Promise.all(items.slice(i, i + 6).map(async (route) => assert.equal((await fetch(base + route)).status, 200, 'Reachable ' + route)));
  }
  console.log(JSON.stringify({ templates: routes.length, internalLinks: links.size, images: images.size, status: 'passed' }, null, 2));
}
main().catch((error) => { console.error(error); process.exitCode = 1; });
