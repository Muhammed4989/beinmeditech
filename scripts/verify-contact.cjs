// All SMTP activity is stubbed. This test must never send an external email.
const fs = require('node:fs');
const path = require('node:path');
const Module = require('node:module');
const ts = require('typescript');
const assert = require('node:assert/strict');
let smtpCalls = 0;
let closeCalls = 0;
let smtpOptions;
let sentMessage;
let outcome = 'accepted';
const file = path.resolve(__dirname, '../app/api/contact/route.ts');
const mod = new Module(file, module);
mod.filename = file;
mod.paths = module.paths;
const originalRequire = mod.require.bind(mod);
mod.require = (request) => request === 'nodemailer' ? {
  createTransport(options) {
    smtpOptions = options;
    return {
      async sendMail(message) {
        smtpCalls++;
        sentMessage = message;
        if (outcome === 'error') throw new Error('Simulated SMTP failure');
        return { accepted: outcome === 'accepted' ? ['info@beinmeditech.com'] : [], rejected: outcome === 'accepted' ? [] : ['info@beinmeditech.com'] };
      },
      close() { closeCalls++; },
    };
  },
} : originalRequire(request);
mod._compile(ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText, file);
const keys = ['RACKSPACE_SMTP_USER', 'RACKSPACE_SMTP_PASSWORD'];
const originalEnv = Object.fromEntries(keys.map((key) => [key, process.env[key]]));
const originalFetch = global.fetch;
const send = (data, headers = {}) => mod.exports.POST(new Request('http://localhost/api/contact', { method: 'POST', body: typeof data === 'string' ? data : JSON.stringify(data), headers: { 'Content-Type': 'application/json', Origin: 'http://localhost', ...headers } }));
const valid = { firstName: 'Test', email: 'test@example.com', message: 'Request a quotation.' };
async function main() {
  try {
    global.fetch = async () => { throw new Error('No real provider requests are allowed'); };
    keys.forEach((key) => delete process.env[key]);
    const missing = await send(valid);
    assert.equal(missing.status, 503);
    assert.deepEqual(await missing.json(), { error: 'delivery_not_configured' });
    assert.equal((await send('{bad json')).status, 400);
    assert.equal((await send(valid, { Origin: 'https://other.example' })).status, 403);
    assert.equal((await send(valid, { Origin: '' })).status, 403);
    assert.equal((await send(valid, { 'Content-Type': 'text/plain' })).status, 415);
    assert.equal((await send('x'.repeat(65537))).status, 413);
    assert.equal((await send({ ...valid, website: 'spam.example' })).status, 400);
    assert.equal((await send({ ...valid, firstName: [] })).status, 400);
    assert.equal((await send({ ...valid, email: 'invalid' })).status, 400);
    assert.equal((await send({ ...valid, message: ' '.repeat(3) })).status, 400);
    assert.equal((await send({ ...valid, message: 'x'.repeat(10001) })).status, 400);
    process.env.RACKSPACE_SMTP_USER = 'info@beinmeditech.com';
    assert.equal((await send(valid)).status, 503, 'Password is required');
    process.env.RACKSPACE_SMTP_PASSWORD = 'mock-password-not-a-real-secret';
    process.env.RACKSPACE_SMTP_USER = 'test@example.com';
    assert.equal((await send(valid)).status, 503, 'Sender must be a company mailbox');
    assert.equal(smtpCalls, 0);
    process.env.RACKSPACE_SMTP_USER = 'info@beinmeditech.com';
    const result = await send({ ...valid, firstName: '<script>name</script>', message: '<img src=x onerror=alert(1)>\nSecond line' });
    assert.equal(result.status, 200);
    assert.deepEqual(await result.json(), { success: true });
    assert.equal(smtpCalls, 1);
    assert.equal(smtpOptions.host, 'secure.emailsrvr.com');
    assert.equal(smtpOptions.port, 465);
    assert.equal(smtpOptions.secure, true);
    assert.equal(smtpOptions.tls.rejectUnauthorized, true);
    assert.equal(smtpOptions.disableFileAccess, true);
    assert.equal(smtpOptions.disableUrlAccess, true);
    assert.equal(smtpOptions.auth.user, 'info@beinmeditech.com');
    assert.deepEqual(sentMessage.from, { name: 'beIN Meditech', address: 'info@beinmeditech.com' });
    assert.deepEqual(sentMessage.to, ['info@beinmeditech.com']);
    assert.equal(sentMessage.replyTo, 'test@example.com');
    assert(!sentMessage.html.includes('<script>'));
    assert(!sentMessage.html.includes('<img src=x'));
    assert(sentMessage.html.includes('&lt;img') && sentMessage.html.includes('<br>Second line'));
    assert(sentMessage.text.includes('Second line'));
    outcome = 'rejected';
    assert.equal((await send(valid)).status, 502, 'Rejected recipient is not success');
    outcome = 'error';
    assert.equal((await send(valid)).status, 500, 'SMTP error is not success');
    assert.equal(closeCalls, 3, 'Transport closes after success, rejection and failure');
    outcome = 'accepted';
    for (let i = 0; i < 5; i++) assert.equal((await send(valid, { 'x-forwarded-for': '192.0.2.1' })).status, 200);
    const previousCalls = smtpCalls;
    const throttled = await send(valid, { 'x-forwarded-for': '192.0.2.1' });
    assert.equal(throttled.status, 429);
    assert.equal(throttled.headers.get('retry-after'), '900');
    assert.equal(smtpCalls, previousCalls, 'Abuse checks must reject before SMTP');
    console.log('Rackspace configuration, TLS, validation, escaping, accepted/rejected recipients and failure handling passed. SMTP mocked; no external email sent.');
  } finally {
    global.fetch = originalFetch;
    for (const key of keys) if (originalEnv[key] === undefined) delete process.env[key]; else process.env[key] = originalEnv[key];
  }
}
main().catch((error) => { console.error(error); process.exitCode = 1; });
