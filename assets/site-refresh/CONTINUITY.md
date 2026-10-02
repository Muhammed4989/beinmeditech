# Ongoing editorial and development work

## User-approved boundaries

- Daily writing/development follow-up is enabled in this chat (automation `bein-meditech`, 10:00 Europe/Istanbul, no end date). Work is performed in scheduled rounds, not a continuously running writer.
- Use `codex/content-hierarchy` and Vercel Preview only. Never promote, change production/main, DNS, mail settings, or spend money without fresh authority.
- The user specifically rejected the redesigned homepage body. Its former section order and hero were restored from `fca293e`. Preserve `app/page.tsx`; do not redesign it during routine follow-up work.
- Keep the newer logo, Header/mobile navigation, footer, shared accessibility improvements, brand colours and all other page improvements.
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

1. Expand the shipment handover guide with a useful receiving-team document checklist and a clearly separated receipt/technical-acceptance workflow. Avoid clinical procedures or unverified legal requirements.
2. Expand category articles by answering distinct buyer questions, not by repeating general sourcing copy. Use current primary sources for technical/regulatory claims.
3. New articles require a new, unique, optimized local cover. Do not duplicate another article or listing photo. Existing articles can be deepened without generating a new cover.
4. Set explicit `publishedAt` for new articles; set `updatedAt` only when the article materially changes. `BLOG_UPDATED` is the legacy fallback, not a daily freshness switch. If a topic's own copy changes without an article change, introduce a topic-specific date rather than bumping unrelated dates.
5. Maintain this log, run `npm run build`, `node scripts/verify-site.cjs`, `node scripts/verify-contact.cjs` and `npm run test:content -- http://127.0.0.1:3030`; verify the affected UI on desktop/mobile before pushing. Mock email delivery only.

## Remaining launch prerequisites

- Verified inventory, actual unit photographs, prices, evidence and approved company claims.
- A configured and verified email sender, production abuse protection and a separately authorized real delivery test.
- Legal review where appropriate. No regulatory certification is implied by the website or editorial material.
