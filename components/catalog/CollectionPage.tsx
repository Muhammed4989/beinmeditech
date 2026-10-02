import Link from 'next/link';
import { collectionBreadcrumbs, collectionChildren, collectionPath, SITE_URL, type SeoCollection } from '@/lib/catalog';
import { demoProducts } from '@/lib/demo-products';
import { filterLabels, matchesFilters, readFilters, type SearchParameters } from '@/lib/catalog-filters';
import { blogArticles } from '@/lib/blog';
import { jsonLd } from '@/lib/content';
import Breadcrumbs from '@/components/content/Breadcrumbs';
import ArticleCards from '@/components/blog/ArticleCards';
import CatalogNavigation from './CatalogNavigation';
import DemoInventoryGrid from './DemoInventoryGrid';
import CatalogGuide from './CatalogGuide';
import { catalogGuide } from '@/lib/catalog-guide';

export default function CollectionPage({ page, searchParams = {} }: { page: SeoCollection; searchParams?: SearchParameters }) {
  const path = collectionPath(page.segments);
  const filters = readFilters(path, searchParams);
  const products = demoProducts.filter((product) => matchesFilters(product, filters) && (page.segments.at(-1) !== 'acuson-nx3' || product.model === 'ACUSON NX3'));
  const children = collectionChildren(page);
  const guide = catalogGuide(page, filters);
  const relatedLinks = [...new Map([...children.map((child) => ({ label: child.h1, href: collectionPath(child.segments) })), ...page.related].map((link) => [link.href, link])).values()];
  const crumbs = collectionBreadcrumbs(page);
  const functionalKeys = Object.keys(searchParams).filter((key) => !/^(utm_|gclid$|fbclid$)/.test(key));
  const hasFilters = functionalKeys.length > 0;
  const labels = filterLabels(filters);
  const heading = hasFilters && labels.length ? labels.join(' · ') + ' Equipment' : page.h1;
  if (hasFilters) crumbs.push({ name: labels.length ? labels.join(' · ') : 'Filtered results', href: path + '?' + new URLSearchParams(Object.entries(searchParams).flatMap(([key, value]) => value === undefined ? [] : [[key, Array.isArray(value) ? value.join(',') : value]])).toString() });
  const guideTopic = filters.category.length === 1 ? ({ ultrasound: 'ultrasound', endoscopy: 'endoscopy', 'patient-monitors': 'patient-monitoring' } as Record<string, string>)[filters.category[0]] : null;
  const guides = blogArticles.filter((article) => guideTopic ? article.topic[1] === guideTopic : article.topic[0] === 'procurement').slice(0, 2);
  const schema = {
    '@context': 'https://schema.org', '@graph': [
      { '@type': 'CollectionPage', '@id': SITE_URL + path + '#webpage', url: SITE_URL + path, name: heading, description: page.description, isPartOf: { '@id': SITE_URL + '/#website' }, dateModified: page.updated },
      { '@type': 'BreadcrumbList', itemListElement: crumbs.map((crumb, index) => ({ '@type': 'ListItem', position: index + 1, name: crumb.name, item: SITE_URL + crumb.href })) },
      ...(children.length ? [{ '@type': 'ItemList', name: 'Explore categories', numberOfItems: children.length, itemListElement: children.map((child, index) => ({ '@type': 'ListItem', position: index + 1, name: child.h1, url: SITE_URL + collectionPath(child.segments) })) }] : []),
    ],
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
    <section className="page-intro">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-gray-600"><Breadcrumbs items={crumbs} /></div>
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-orange-700">{page.eyebrow}</p>
        <h1 className="max-w-4xl text-3xl font-bold leading-tight sm:text-5xl">{heading}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">{hasFilters ? 'Browse equipment matching your selections. Configuration, availability and commercial terms are confirmed for each quotation.' : page.intro}</p>
        <Link href={'/request-quote?equipment=' + encodeURIComponent(heading)} className="btn-primary mt-6">Request a Quotation</Link>
      </div>
    </section>
    <CatalogNavigation key={path + JSON.stringify(filters)} initial={filters} />
    <CatalogGuide key={path + JSON.stringify(filters)} guide={guide} />
    <section className="bg-white py-12" data-nosnippet><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-7 rounded-xl border border-orange-100 bg-orange-50 px-4 py-3 text-sm leading-6 text-primary-600"><strong>Demonstration inventory.</strong> These products, prices and configurations are fictional examples for testing the site, not commercial offers.</div>
      <div className="mb-7 flex flex-wrap items-end justify-between gap-3"><h2 className="text-2xl font-bold text-primary-900">Equipment examples</h2><p className="text-sm text-gray-600">{products.length} demonstration result{products.length === 1 ? '' : 's'}</p></div>
      <DemoInventoryGrid products={products} />
    </div></section>
    <section className="py-14"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-7 flex flex-wrap items-center justify-between gap-3"><h2 className="text-2xl font-bold text-primary-900">Useful buying guides</h2><Link href="/blog" className="text-sm font-semibold text-orange-700 hover:underline">Explore the blog</Link></div><ArticleCards articles={guides} /></div></section>
    <section className="bg-primary-50 py-14"><div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"><h2 className="mb-7 text-2xl font-bold text-primary-900">Questions before buying</h2><div className="space-y-3">{page.faqs.map((faq) => <details key={faq.question} className="rounded-xl border border-primary-100 bg-white"><summary className="cursor-pointer p-5 font-semibold text-primary-900">{faq.question}</summary><p className="px-5 pb-5 leading-7 text-gray-700">{faq.answer}</p></details>)}</div></div></section>
    <section className="py-10"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><h2 className="mb-4 text-lg font-bold text-primary-900">Related equipment</h2><div className="flex flex-wrap gap-3">{relatedLinks.map((link) => <Link key={link.href} href={link.href} className="rounded-full border border-primary-200 px-4 py-2 text-sm text-primary-600 hover:border-orange">{link.label}</Link>)}</div></div></section>
  </>;
}
