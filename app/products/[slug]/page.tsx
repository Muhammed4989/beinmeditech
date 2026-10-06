import { notFound, permanentRedirect } from 'next/navigation';
import { visibleDemoProducts, demoProductPath, findDemoProduct } from '@/lib/demo-products';

export const dynamicParams = false;
export function generateStaticParams() { return visibleDemoProducts.map((product) => ({ slug: product.slug })); }
export default async function LegacyProductPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const product = findDemoProduct(params.slug);
  if (!product) notFound();
  permanentRedirect(demoProductPath(product));
}
