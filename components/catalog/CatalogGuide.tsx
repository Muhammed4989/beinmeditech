import type { CatalogGuide as GuideContent } from '@/lib/catalog-guide';

export default function CatalogGuide({ guide }: { guide: GuideContent }) {
  return <section className="border-b border-primary-100 bg-primary-50 py-7" aria-labelledby="catalog-guide-heading">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 id="catalog-guide-heading" className="mb-3 text-xl font-bold leading-8 text-primary-900 sm:text-2xl">{guide.title}</h2>
      {/* Native disclosure: the complete text is server-rendered and works without JavaScript. */}
      <details className="catalog-guide" id="equipment-buying-guide">
        <summary className="catalog-guide-summary rounded-sm" aria-label={'Read equipment guide: ' + guide.title}>
          <span className="catalog-guide-preview text-base leading-7 text-gray-700">{guide.introduction}</span>
          <span className="mt-2 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-orange-700">
            <span className="catalog-guide-more">Read more</span><span className="catalog-guide-less">Read less</span>
            <svg aria-hidden="true" className="catalog-guide-chevron h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m6 9 6 6 6-6" /></svg>
          </span>
        </summary>
        <div className="catalog-guide-body max-w-4xl space-y-7 pb-3 pt-4">
          {guide.sections.map((section) => <section key={section.title}>
            <h3 className="mb-3 text-lg font-bold text-primary-900">{section.title}</h3>
            <div className="space-y-4">{section.paragraphs.map((paragraph) => <p key={paragraph} className="text-base leading-7 text-gray-700">{paragraph}</p>)}</div>
          </section>)}
        </div>
      </details>
    </div>
  </section>;
}
