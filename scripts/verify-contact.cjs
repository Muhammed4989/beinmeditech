// The provider is stubbed. This test must never send an external email.
const fs = require('node:fs');
const path = require('node:path');
const Module = require('node:module');
const ts = require('typescript');
const assert = require('node:assert/strict');
const file = path.resolve(__dirname, '../app/api/contact/route.ts');
const mod = new Module(file, module);
mod.filename = file;
mod.paths = module.paths;
mod._compile(ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText, file);
const originalKey = process.env.RESEND_API_KEY;
const originalFetch = global.fetch;
const send = (data) => mod.exports.POST(new Request('http://localhost/api/contact', { method: 'POST', body: typeof data === 'string' ? data : JSON.stringify(data), headers: { 'Content-Type': 'application/json' } }));
async function main() {
  try {
    let providerCalls = 0;
    let providerBody;
    global.fetch = async (_url, options) => { providerCalls++; providerBody = JSON.parse(options.body); return new Response('{}', { status: 200 }); };
    delete process.env.RESEND_API_KEY;
    assert.equal((await send({ firstName: 'Test', email: 'test@example.com' })).status, 503);
    assert.equal((await send('{bad json')).status, 400);
    assert.equal((await send({ firstName: [], email: 'test@example.com' })).status, 400);
    assert.equal((await send({ firstName: 'Test', email: 'invalid' })).status, 400);
    assert.equal((await send({ firstName: 'Test', email: 'test@example.com', message: 'x'.repeat(10001) })).status, 400);
    assert.equal(providerCalls, 0);
    process.env.RESEND_API_KEY = 'test-placeholder-not-a-real-key';
    const result = await send({ firstName: '<script>name</script>', email: 'test@example.com', message: '<img src=x onerror=alert(1)>\nSecond line' });
    assert.equal(result.status, 200);
    assert.deepEqual(await result.json(), { success: true });
    assert.equal(providerCalls, 1);
    assert(!providerBody.html.includes('<script>'));
    assert(!providerBody.html.includes('<img src=x'));
    assert(providerBody.html.includes('&lt;img'));
    assert(providerBody.html.includes('<br>Second line'));
    assert.equal(providerBody.reply_to, 'test@example.com');
    global.fetch = async () => new Response('{}', { status: 500 });
    assert.equal((await send({ firstName: 'Test', email: 'test@example.com' })).status, 500);
    console.log('Contact validation, HTML escaping, no-provider fallback and response handling passed. No external email sent.');
  } finally {
    global.fetch = originalFetch;
    if (originalKey === undefined) delete process.env.RESEND_API_KEY; else process.env.RESEND_API_KEY = originalKey;
  }
}
main().catch((error) => { console.error(error); process.exitCode = 1; });
