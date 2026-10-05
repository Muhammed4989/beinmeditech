# Ongoing editorial and development work

## User-approved boundaries

- Daily writing/development follow-up is enabled in this chat (automation `bein-meditech`, 10:00 Europe/Istanbul, no end date). Work is performed in scheduled rounds, not a continuously running writer.
- Latest user clarification: keep adding NEW content. The daily automation now prioritizes one new original article, not just revisions; aim for 900–1400 useful words with a unique local cover. If the cover or verification is blocked, keep a non-public draft and report the blocker. Do not count an old-article expansion as the regular replacement for a new post. Do not batch-publish missed days.
- Use `codex/content-hierarchy` and Vercel Preview only. Never promote, change production/main, DNS, mail settings, or spend money without fresh authority.
- The user specifically rejected the redesigned homepage body. Its former section order and hero were restored from `fca293e`. Preserve `app/page.tsx`; do not redesign it during routine follow-up work.
- Keep the newer logo, Header/mobile navigation, footer, shared accessibility improvements, brand colours and all other page improvements.
- Preserve the user-confirmed real portrait of Bilal Alhasan on About Us, with the approved name and role. Do not substitute generated imagery for this person or remove his profile in routine refreshes.
- Legacy home statistics/achievements/testimonial remain unverified layout content, with a visible notice. Do not reuse them as company facts. Confirmation is required before production publication.
- Keep user/unrelated untracked files out of commits, especially monitoring and email configuration. Never reuse exposed credentials from chat history.

## 3 October 2026

- Restored the old homepage body and circle hero. Preserved shared logo/menu files unchanged; retained a local editorial About illustration to avoid restoring a broken external image dependency. Kept metadata title free of duplicate branding.
- Expanded `compare-equipment-quotations` with a complete comparison workflow: versioned requirements, configuration rows, unit evidence, cost scope, a clearly fictional comparison example, readiness milestones, support and clarification logs.
- Kept that article's original, unique editorial image. Added contextual links to the shipment and evidence guides.
- Added per-article publication/update dates to the reading view, archive cards, Open Graph, BlogPosting schema and sitemap. The updated guide retains its 2 October publication date and records its 3 October revision; unrelated articles retain their existing dates.
- Added regression tests for homepage restoration, independent article dates, unchanged topics, substantive expanded copy, schema/OG/sitemap agreement and contextual links.
- Verified: production build passed (80 static pages); 15-template/59-link/23-image smoke checks passed; 48-route content/metadata/sitemap checks and 16,384 filter round trips passed. Expanded guide body is 982 words. Contact tests remained mocked and passed. Desktop and mobile browser checks confirmed the restored homepage, unchanged new logo/menu, no overflow, functioning menu Escape behavior and both article dates; no browser errors were reported.

## Next useful work

1. New article opportunity: a buyer's post-delivery documentation index (organising received unit records, accessory lists, open-item owners and supplier follow-up), distinct from receiving-site access planning and configuration change tracking. Avoid clinical procedures or unverified legal requirements. Also improve earlier guides when useful, without counting that as the daily new article.
2. Expand category articles by answering distinct buyer questions, not by repeating general sourcing copy. Use current primary sources for technical/regulatory claims.
3. New articles require a new, unique, optimized local cover. Do not duplicate another article or listing photo. Existing articles can be deepened without generating a new cover.
4. Set explicit `publishedAt` for new articles; set `updatedAt` only when the article materially changes. `BLOG_UPDATED` is the legacy fallback, not a daily freshness switch. If a topic's own copy changes without an article change, introduce a topic-specific date rather than bumping unrelated dates.
5. Maintain this log, run `npm run build`, `node scripts/verify-site.cjs`, `node scripts/verify-contact.cjs` and `npm run test:content -- http://127.0.0.1:3030`; verify the affected UI on desktop/mobile before pushing. Mock email delivery only.

## New-content follow-up — 3 October 2026

- Added original article `medical-equipment-photo-checklist` under Procurement → Used Equipment, with 1,034 body words plus an enquiry checklist. It explains how buyers can request unit-specific views, identification, accessory evidence, disclosed wear, sensible file naming and clarification records; photographs are not represented as technical approval.
- Publication date: 2026-10-03. English title: Medical Equipment Photo Checklist for Buyers. The article is linked from the quotation comparison guide and links back to relevant purchasing resources.
- New unique editorial cover: `public/images/blog/articles/medical-equipment-photo-checklist.webp`, 1200 × 800, 58,580 bytes. Generated with built-in `image_gen`; prompt/source record in `assets/blog-article-photography/medical-equipment-photo-checklist.json`. Original remains in the Codex generated-image directory. The image is labelled illustrative on the page.
- Archive lists now sort by publication date without mutating `blogArticles`, so new articles appear in Latest articles while the restored homepage's explicit selections stay unchanged.
- No changes to homepage, logo, menu, production, DNS or email settings.
- Verified: production build passed with 81 static pages; 49-route content checks and 16,384 filter round trips passed; 15-template/60-link/24-image smoke checks and mocked contact tests passed. Desktop/mobile browser checks confirmed the article, dates, unique cover and no horizontal overflow; the archive puts it first and its lazy-loaded thumbnail decoded successfully after loading. No browser errors. Automated accessibility check reported zero violations (not a certification). Screenshots are retained locally in `output/site-review/`.

## Bilal portrait restoration — 3 October 2026

- User confirmed the portrait recovered from the company profile on IT-Service-Net and asked to restore it. About Us now shows Bilal Alhasan, Business Developer Manager / Co-Founder, in place of the generic editorial consultation image.
- Saved the original photograph locally as `public/images/team/bilal-alhasan.png` (353 × 399, 72,472 bytes), with no retouching or cropping. Source and approval recorded in `assets/site-refresh/bilal-alhasan-photo.json`. No facial image generation was used.
- Added regression checks for the approved image, original dimensions, name/role and SHA-256 integrity. No change to the homepage, brand assets, navigation, blog content or production settings.
- Verified: build passed (81 static pages); site checks passed for 15 templates, 60 links and 25 images; 49-route content checks and 16,384 filter round trips passed. Desktop/mobile browser checks confirmed the original 353 × 399 aspect ratio, name/role, successful image loading and no horizontal overflow or browser errors. Screenshots saved locally in `output/about-recovery/`.

## New article — 4 October 2026

- Added `receiving-site-readiness` under Procurement → Quotations & Delivery, titled Medical Equipment Delivery: Receiving-Site Checklist. It has 1,112 body words plus a nine-item checklist, with its own publication date of 2026-10-04. General coordination guidance covers the named handover point, task owners, package information, facilities route review, arrival access, unloading scope, storage, document handover and change handling; no medical procedures, price claims or regulatory requirements were introduced.
- Added a link from the shipment handover guide and contextual links to shipment, quotation comparison, used equipment and the enquiry form. A link-only update did not change the earlier article's date. Homepage array positions remain unchanged.
- Unique editorial cover: `public/images/blog/articles/receiving-site-readiness.webp` (1200 × 800, 64,946 bytes), generated with built-in image_gen and labelled illustrative in the shared article view. Generation and targeted logo-removal edit prompts are saved in `assets/blog-article-photography/receiving-site-readiness.json`.
- Removed a fixed procurement-topic date from an existing test so its expectation follows article-specific dates when new articles are published. Other date checks remain unchanged. Daily automation `bein-meditech` is still ACTIVE at 10:00 Europe/Istanbul without an end date.
- Homepage, brand/navigation, Bilal's portrait, production, DNS and mail configuration were not edited.
- Verified: build passed with 82 static pages; 15-template/61-link/26-image site checks passed; 50-route content, metadata, sitemap and redirect checks and 16,384 filter round trips passed; mocked contact tests passed with no email sent. Desktop/mobile browser checks confirmed archive-first placement, working archive navigation, 4 October publication date, loaded thumbnail/cover and no horizontal overflow or browser errors. Screenshots retained in `output/site-review/receiving-guide-desktop.png` and `receiving-guide-mobile.png`.

## New article — 5 October 2026

- Added `equipment-configuration-revision-log` under Procurement → Quotations & Delivery, titled Tracking Medical Equipment Configuration Changes. Its 1,035 body words plus a nine-item checklist cover stable baseline item references, proposed changes, review owners, evidence, consequences, quotation reconciliation and final scope snapshots. Published on 2026-10-05; one new article today, no catch-up publishing.
- Content is original general purchasing coordination guidance, not medical, compatibility or regulatory advice. The accessory example is explicitly fictional; no specifications, inventory, prices or certification claims were introduced.
- Unique local cover: `public/images/blog/articles/equipment-configuration-revision-log.webp`, 1200 × 800, 69,422 bytes. Built-in image_gen prompt and source recorded in `assets/blog-article-photography/equipment-configuration-revision-log.json`; shared article template labels the scene illustrative.
- Linked from the quotation comparison guide without changing its publication/update dates. Appended the article so the restored homepage's fixed article selections remain unchanged. Homepage, logo/menu, Bilal portrait, production, DNS and mail configuration remain untouched.
- Verified: production build passed with 83 static pages; 15-template/62-link/27-image site checks passed; 51-route content, metadata, sitemap and redirect checks and 16,384 filter round trips passed; mocked contact tests passed with no email sent. An initial site smoke check ran before the local server was started and returned connection refused; its rerun against the ready server passed. Desktop (1440 × 1000) and mobile (390 × 844) checks confirmed archive-first placement, working archive navigation, 5 October publication date, loaded thumbnail/cover, the illustrative-image label, no horizontal overflow and no browser errors. Screenshots retained in `output/site-review/configuration-log-desktop.png` and `configuration-log-mobile.png`.

## Remaining launch prerequisites

## Owner-requested contact correction — 5 October 2026

- Owner confirmed the company number as +49 177 6319537. Centralised it in `lib/company-contact.ts` and updated Contact, shared footer/WhatsApp, home telephone link, privacy/terms, Organization schema and AI reference output. The homepage edit is limited to the specifically requested telephone correction and its import; no design/body restoration was changed.
- Owner selected the existing Rackspace mailbox rather than Resend. Replaced the route's hard-coded Resend testing sender with authenticated Rackspace SMTP (`secure.emailsrvr.com`, 465, TLS certificate verification), fixed company recipient, visitor Reply-To, escaped HTML/plain-text bodies and connection timeouts. Success requires SMTP acceptance of the recipient, not just a request returning successfully. No inbox delivery guarantee is made.
- Required a message on client and server. Missing configuration, network and provider errors preserve the form fields and provide explicit prepared-email/WhatsApp alternatives. Those alternatives require the visitor to review and send in the selected app; they are not automatic delivery. Unknown submission outcomes warn about duplicate resends.
- Updated obsolete contact activation instructions in DEPLOY.md. Added only `RACKSPACE_SMTP_USER=info@beinmeditech.com` in Preview scoped to `codex/content-hierarchy`, as authorised by the Rackspace choice. `RACKSPACE_SMTP_PASSWORD` is still missing and must be entered securely in Vercel settings, never chat. Existing global RESEND_API_KEY was found by the unfiltered Preview listing but is no longer used; it was not read, removed or changed. Initial branch-filtered listing had omitted that global variable. No production/DNS/mailbox settings changed.
- Local Vercel linking created ignored `.vercel/` and `.env.local` (OIDC); neither is staged. Connector access to the team returned 403, while existing local CLI authentication permitted the scoped configuration check. No historical conversation secrets were used.
- Verified: build passed (83 static pages), 15-template/62-link/27-image site checks passed with new telephone assertions, 51-route content/metadata/sitemap checks and 16,384 filter round trips passed. Mocked SMTP tests passed for configuration, validation, escaping, TLS settings, recipient acceptance/rejection, error handling and transport cleanup. Browser tests (1440 desktop/390 mobile) used entirely mocked fetch responses for missing configuration, network failure and success; confirmed retained entries, correct draft links, no overflow or uncaught browser errors. Screenshots retained locally in `output/site-review/contact-corrected-desktop.png` and `contact-corrected-mobile.png`.
- Initial sandbox build/localhost checks failed with EPERM/EACCES and passed when rerun with the required execution permission. Auto-review rejected a command that could submit real email; it was not run. All subsequent form submission checks replaced browser fetch with mock responses and made no contact POST/SMTP delivery. Real authentication and inbox delivery remain unverified pending credentials and separately authorised testing.
- Dependency audit flags existing Next.js/PostCSS/Tailwind-related vulnerabilities, including a critical Next.js entry. The newly added Nodemailer package is not in that report. Plan a separate tested security update before production; no broad/forced dependency update was applied in this contact fix.

## Remaining launch prerequisites

- Verified inventory, actual unit photographs, prices, evidence and approved company claims.
- Secure Rackspace SMTP credentials, production abuse protection and a separately authorized real delivery test.
- A tested security update for existing framework/tooling vulnerabilities before production.
- Legal review where appropriate. No regulatory certification is implied by the website or editorial material.
