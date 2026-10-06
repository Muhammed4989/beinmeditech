const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const Module = require('node:module');
const ts = require('typescript');
const root = path.resolve(__dirname, '..');
const keys = ['VERCEL_ENV', 'SITE_RELEASE_MODE'];
const previous = Object.fromEntries(keys.map(key => [key, process.env[key]]));
function load(name, cache = new Map()) {
  const file = path.resolve(root, name);
  if (cache.has(file)) return cache.get(file).exports;
  const mod = new Module(file, module);
  cache.set(file, mod);
  mod.filename = file;
  mod.paths = module.paths;
  const originalRequire = mod.require.bind(mod);
  mod.require = request => request.startsWith('.') ? load(path.relative(root, path.resolve(path.dirname(file), request) + '.ts'), cache) : originalRequire(request);
  mod._compile(ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText, file);
  return mod.exports;
}
try {
  for (const [environment, release, isPublic] of [['preview', '', false], ['preview', 'public', true], ['production', '', true], ['production', 'preview', true], ['', '', false]]) {
    process.env.VERCEL_ENV = environment;
    process.env.SITE_RELEASE_MODE = release;
    const cache = new Map();
    assert.equal(load('lib/release-mode.ts', cache).publicSite, isPublic);
    const products = load('lib/demo-products.ts', cache);
    assert.equal(products.visibleDemoProducts.length, isPublic ? 0 : products.demoProducts.length);
    assert.equal(Boolean(products.findDemoProduct(products.demoProducts[0].slug)), !isPublic);
  }
  console.log('Release-mode gates passed: Production cannot expose fictional inventory; preview fixtures remain available.');
} finally {
  for (const key of keys) if (previous[key] === undefined) delete process.env[key]; else process.env[key] = previous[key];
}
