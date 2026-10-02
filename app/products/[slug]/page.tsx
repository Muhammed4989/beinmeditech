import { notFound, permanentRedirect } from 'next/navigation';
import { demoProducts, demoProductPath, findDemoProduct } from '@/lib/demo-products';

export const dynamicParams = false;
export function generateStaticParams() { return demoProducts.map((product) => ({ slug: product.slug })); }
export default function LegacyProductPage({ params }: { params: { slug: string } }) {
  const product = findDemoProduct(params.slug);
  if (!product) notFound();
  permanentRedirect(demoProductPath(product));
}
