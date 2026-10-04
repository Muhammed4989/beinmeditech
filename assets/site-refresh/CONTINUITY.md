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

1. New article opportunity: a buyer's equipment configuration revision log (tracking model/accessory substitutions, quotation revisions, review owners and final scope), distinct from quotation comparison and receiving-site planning. Avoid clinical procedures or unverified legal requirements. Also improve earlier guides when useful, without counting that as the daily new article.
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

## Remaining launch prerequisites

- Verified inventory, actual unit photographs, prices, evidence and approved company claims.
- A configured and verified email sender, production abuse protection and a separately authorized real delivery test.
- Legal review where appropriate. No regulatory certification is implied by the website or editorial material.
