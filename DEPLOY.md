# Deployment Guide — beIN Meditech on Vercel

## 1. Existing project and public release

Repository: `Muhammed4989/beinmeditech`. Working branch: `codex/content-hierarchy`. Vercel project: `beinmeditech`, scope `muhammeds-projects-1419b173`. Stage only tested website files, never the whole workspace. Keep monitoring files, output files and secrets out of commits.

The owner authorised publishing after successful tests on 6 October 2026. Daily content automation remains Preview-only; this one-time release is not ongoing production authority.

`lib/release-mode.ts` uses public presentation in `VERCEL_ENV=production`, or in a Preview explicitly built with server-only `SITE_RELEASE_MODE=public`. Fictional inventory is unavailable: detail URLs return 404, collections show honest sourcing/enquiry alternatives, and no fictional prices or stock are rendered. Unverified homepage figures and the sample testimonial are replaced with requirements/enquiry text while preserving the restored section order and design. All demo pages stay out of the sitemap.

Real listings still require approved identity, condition, configuration, actual unit photographs, availability, commercial terms and supporting records. Never turn a demo into an offer simply by removing its disclosure.

## 2. Build, verify and deploy

```powershell
npm.cmd audit --omit=dev
node scripts/verify-contact.cjs
npm.cmd run test:content
$env:SITE_RELEASE_MODE='public'
npm.cmd run build
npm.cmd run start -- --port 3042
```

Against the ready local server, run `node scripts/verify-site.cjs http://127.0.0.1:3042 --public` and `npm.cmd run test:content -- http://127.0.0.1:3042 --public`. Check desktop/mobile menus, images, filters, breadcrumbs, Read more and contact states in the browser, with all contact submissions mocked.

Record the current Production deployment as a rollback target. Commit and push only completed files on the working branch. Create a Production-target candidate with `--skip-domain`, inspect READY/source and test it before assigning domains with `vercel promote`. Do not promote a legacy/demo Preview build as the public site. There is no need to overwrite `main` for this release.

Framework security update: Next.js 15.5.27, React 19, patched PostCSS override. See [the official security release](https://nextjs.org/blog/september-2026-security-release) and [upgrade guide](https://nextjs.org/docs/app/guides/upgrading/version-15). A zero runtime-package audit is not a complete security certification; track remaining trusted-input build-tool advisories separately.

Optional Google Tag Manager remains disabled in public mode until a suitable visitor-choice/consent implementation is reviewed. Its existing ID is preserved in the labelled legacy Preview. The privacy page describes the actual Vercel/Rackspace enquiry flow; this technical release is not a legal compliance certification.

## 3. Existing domain and email DNS

Both `beinmeditech.com` and `www.beinmeditech.com` are already attached to this Vercel project and resolve to Vercel as of 6 October 2026. Do not replace their working records with historic generic values. Check HTTPS and apex/www behaviour after promotion. Preserve the Rackspace MX records (`mx1.emailsrvr.com` and `mx2.emailsrvr.com`), nameservers, SPF, DKIM and DMARC. A website release does not require mailbox password or mail-routing changes.

## 4. Configure Contact Form

The owner selected the existing Rackspace mailbox on 5 October 2026. Both contact and quotation forms use the same server-only `/api/contact` route. Resend and Formspree are not used by this route.

In Vercel → beinmeditech → Settings → Environment Variables, configure separate **Production** variables for launch and retain **Preview** variables scoped to `codex/content-hierarchy`:

- `RACKSPACE_SMTP_USER`: the full existing company mailbox address, normally `info@beinmeditech.com`.
- `RACKSPACE_SMTP_PASSWORD`: its SMTP/mailbox password, entered directly in the secure Vercel settings. Never paste it into chat, source code or a tracked file.

The route uses `secure.emailsrvr.com`, port 465 with TLS and certificate verification. Sender is the authenticated mailbox; recipient stays fixed at `info@beinmeditech.com`; the visitor address is Reply-To, never From. These are the [documented Rackspace settings](https://docs.rackspace.com/docs/rackspace-email-settings).

Use Secret/sensitive types. A branch-restricted Preview variable cannot also target Production. Do not clear its branch restriction or export its secret value to work around this: create a separate Production variable and let the owner enter the password directly. Rebuild for the target environment after configuration changes. Missing credentials return an honest not-configured message with prepared email and WhatsApp alternatives; no success is claimed. The form preserves entries on failure. SMTP acceptance does not guarantee inbox delivery.

The route enforces same-origin JSON, a streamed 64 KiB payload cap, field limits, a honeypot and a bounded per-instance attempt limit. The in-memory backstop is not distributed and resets on new serverless instances. Scope the Vercel firewall rate-limit rule to POST `/api/contact`; do not block SEO/AI crawlers across the site. The owner explicitly authorised the metered rate-limit feature on 6 October 2026; no plan upgrade or other purchase was authorised.

Run `node scripts/verify-contact.cjs` for mocked configuration, validation, abuse checks, escaping, recipient rejection and failure handling. It never contacts SMTP or sends email. Preview Inbox delivery passed the owner's one authorised test on 6 October 2026. Any further real test email requires fresh permission. Do not send again merely because a deployment changes.

## 5. Performance Checklist

- ✅ Static editorial pages; filtered/catalogue and quotation requests render server-side where request parameters are required
- ✅ next/image for all images (auto-optimized)
- ✅ Security headers via vercel.json
- ✅ Immutable cache headers for static assets
- ✅ Schema.org JSON-LD on every page
- ✅ Open Graph + Twitter Card meta
- ✅ Sitemap at /sitemap.xml
- ✅ Robots.txt at /robots.txt
- ✅ llms.txt at /llms.txt (AI engine readability)
- ✅ GTM-WVK83TB5 preserved
- ✅ Old URL redirects (301) for SEO preservation
- ✅ Semantic HTML5 throughout
