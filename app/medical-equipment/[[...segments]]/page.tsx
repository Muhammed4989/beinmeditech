import type { Metadata } from 'next';
import { notFound, permanentRedirect } from 'next/navigation';
import CollectionPage from '@/components/catalog/CollectionPage';
import ProductDetails from '@/components/catalog/ProductDetails';
import { collectionPath, findCollection, seoCollections, SITE_URL } from '@/lib/catalog';
import { visibleDemoProducts, demoProductPath, findDemoProduct } from '@/lib/demo-products';
import { filterLabels, filterPath, readFilters, type SearchParameters } from '@/lib/catalog-filters';

type Props = { params: Promise<{ segments?: string[] }>; searchParams?: Promise<SearchParameters> };
export const dynamicParams = false;

export function generateStaticParams() {
  return [...seoCollections.map((page) => ({ segments: page.segments })), ...visibleDemoProducts.map((product) => ({ segments: demoProductPath(product).split('/').slice(2) }))];
}
function routeProduct(segments: string[] = []) {
  const product = findDemoProduct(segments.at(-1) || '');
  return product && demoProductPath(product) === collectionPath(segments) ? product : undefined;
}
const isFunctional = (key: string) => !/^(utm_|gclid$|fbclid$)/.test(key);

export async function generateMetadata(props: Props): Promise<Metadata> {
  const searchParams = (await props.searchParams) || {};
  const params = await props.params;
  const product = routeProduct(params.segments);
  if (product) return {
    title: '[Demo] ' + product.name,
    description: 'Fictional demonstration listing for website testing. Not a commercial offer.',
    alternates: { canonical: SITE_URL + demoProductPath(product) },
    robots: { index: false, follow: true, googleBot: { index: false, follow: true } },
  };
  const page = findCollection(params.segments);
  if (!page) return {};
  const path = collectionPath(page.segments);
  const filtered = Object.keys(searchParams).some(isFunctional);
  const labels = filterLabels(readFilters(path, searchParams));
  const title = filtered && labels.length ? labels.join(' · ') + ' Equipment' : page.title.replace(/ \| beIN MediTech$/, '');
  return {
    title, description: page.description, alternates: { canonical: SITE_URL + path },
    robots: { index: !filtered, follow: true, googleBot: { index: !filtered, follow: true } },
    openGraph: { type: 'website', url: SITE_URL + path, title, description: page.description, images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'beIN MediTech medical equipment' }] },
    twitter: { card: 'summary_large_image', title, description: page.description, images: ['/images/og-image.png'] },
  };
}

export default async function MedicalEquipmentPage(props: Props) {
  const searchParams = (await props.searchParams) || {};
  const params = await props.params;
  const product = routeProduct(params.segments);
  if (product) return <ProductDetails product={product} />;
  const page = findCollection(params.segments);
  if (!page) notFound();
  const path = collectionPath(page.segments);
  const filters = readFilters(path, searchParams);
  const target = filterPath(filters);
  // Normalize filter changes onto the appropriate category, preserving all selected facets.
  if (['category', 'subcategory', 'condition', 'brand'].some((key) => key in searchParams) && target.split('?')[0] !== path) permanentRedirect(target);
  return <CollectionPage page={page} searchParams={searchParams} />;
}
