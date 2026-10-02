# Site-wide visual and usability review

Date: 2026-10-02. Work targets the `codex/content-hierarchy` preview branch, not production.

## Implemented

- Replaced the small placeholder wordmark with a transparent, tightly framed version prepared from the approved beIN Meditech artwork. One component supplies the header, footer and blog sidebar.
- Retained deep purple `#28214C`, orange `#FF6400` and pale lavender `#F3F6FD`; unified typography, buttons, content widths, spacing, page introductions and call-to-action sections.
- Rebuilt the homepage around equipment categories, sourcing, services, a clear enquiry process and unique editorial articles. Removed unsupported statistics and testimonials.
- Added three photorealistic editorial images using the built-in image generator. Image captions distinguish illustrations from actual staff, premises and inventory. All final images are stored locally; no remote photo dependency remains on the checked pages.
- Aligned About, Services and service detail pages, Contact, quote requests and legal-page presentation. Preserved the blog structure, twelve unique article covers, filter hierarchy, guides, canonical rules and demonstration labels.
- Reworked navigation for click, keyboard and mobile use; Escape restores focus, outside clicks dismiss menus, and navigation closes the mobile menu. Shared skip navigation and a named quick-contact landmark improve keyboard/screen-reader navigation.
- Fixed the contact form's false-success fallback. When no delivery provider is configured, inputs remain visible and the user gets an explicit prepared-email option, not a claim that email was sent. Added server field validation and HTML escaping.
- Deferred the existing GTM integration and removed duplicate reveal handling that could hide content.

## Verification

- `npm run build`: passed, including TypeScript checks and 80 generated static pages.
- `node scripts/verify-site.cjs`: passed, 15 main templates, 59 internal links and 23 image assets.
- `npm run test:content -- http://127.0.0.1:3030`: passed, 48 routes, canonical metadata, structured data, sitemap, redirects and 16,384 filter round trips. Existing catalogue guides remain at least 891 words, and all twelve article covers remain unique.
- `node scripts/verify-contact.cjs`: passed, validation, escaping, missing-provider and provider success/failure handling. The provider is stubbed; no external email is sent.
- Browser review of 12 representative desktop/mobile pages at 1440 × 1000 and 390 × 844: no horizontal overflow or broken visible images. Screenshots are in `output/site-review/`.
- Browser interaction checks: desktop/mobile menus, Escape/focus return, outside dismissal, equipment navigation, one filter dropdown at a time, filter URL and breadcrumb agreement.
- Contact browser tests used intercepted mock responses for missing configuration, success and failure. No test messages were delivered.
- Axe scans of home, About, Contact, a service detail, Blog, used equipment, quote and Privacy: zero reported violations after the quick-contact landmark fix. Blog arrows and quote checkmarks were flagged for manual contrast review as non-text glyphs, not confirmed violations. This is not an accessibility certification.
- Local, warm desktop load sample: CLS 0, LCP 92 ms. These are local diagnostics, not public-site Core Web Vitals or a production performance guarantee.

## Assets and prompts

Tool mode: built-in `image_gen`, followed by mechanical size/format conversion.

- `public/images/brand/bein-meditech.png` — transparent wordmark, 480 × 287, 66,646 bytes.
- `public/images/site/medical-equipment-hero.webp` — 1440 × 960, 95,724 bytes.
- `public/images/site/equipment-consultation.webp` — 1440 × 960, 71,592 bytes.
- `public/images/site/clinical-team-training.webp` — 1440 × 960, 85,210 bytes.
- `assets/site-refresh/prompts.json` contains the exact final prompt set and source/output mapping. Local originals are in `output/site-review/originals/`.

## Not claimed complete

- Real email delivery still requires a configured provider and verified sender; the existing route's test sender must be replaced for production. Delivery was not tested against a real mailbox. Spam protection also needs production configuration.
- Demonstration inventory must be replaced by verified stock, photographs, prices and documentation before being represented as available equipment.
- Legal text was only restyled, not legally reviewed. Destination-specific certification and regulatory claims require evidence.
- No production promotion, domain or DNS change is part of this refresh.
