import Image from 'next/image';
import Link from 'next/link';
import { type DemoProduct, demoProductPath, demoProducts } from '@/lib/demo-products';
import { equipmentCategories, equipmentCategorySlug, equipmentSubcategories } from '@/lib/equipment-taxonomy';
import { SITE_URL } from '@/lib/catalog';
import { jsonLd } from '@/lib/content';
import Breadcrumbs from '@/components/content/Breadcrumbs';
import DemoInventoryGrid from './DemoInventoryGrid';

export default function ProductDetails({ product }: { product: DemoProduct }) {
  const category = equipmentCategorySlug(product.category);
  const parentPath = `/medical-equipment/${category}/${product.subcategory}`;
  const crumbs = [{ name: 'Home', href: '/' }, { name: 'Medical Equipment', href: '/medical-equipment' }, { name: equipmentCategories.find((item) => item.value === category)!.label, href: `/medical-equipment/${category}` }, { name: equipmentSubcategories.find((item) => item.value === product.subcategory)!.label, href: parentPath }, { name: product.model, href: demoProductPath(product) }];
  const related = demoProducts.filter((item) => item.subcategory === product.subcategory && item.slug !== product.slug);
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: crumbs.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.name, item: SITE_URL + item.href })) }) }} />
    <div className="bg-primary-50 pt-28 pb-14 sm:pt-32"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Breadcrumbs items={crumbs} />
      <p className="mb-7 rounded-xl border border-orange-100 bg-orange-50 p-4 text-sm font-semibold leading-6 text-primary-600">Demonstration listing. Price, stock and configuration are fictional website test data.</p>
      <div className="grid gap-8 rounded-3xl border border-primary-100 bg-white p-5 sm:p-8 lg:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-primary-50"><Image src={product.image} alt={`${product.category} illustration for a demonstration listing`} fill priority sizes="(max-width: 1023px) 100vw, 50vw" className="object-contain" /></div>
        <div><p className="text-sm font-semibold text-orange-700">{product.brand}</p><h1 className="mt-3 text-3xl font-bold leading-tight text-primary-900 sm:text-4xl">{product.name}</h1><p className="mt-5 font-semibold text-primary-600">{product.condition}</p><p className="mt-3 leading-8 text-gray-600">{product.cardDetails}</p><p className="mt-5 text-sm text-gray-500">Year: {product.year} (demo) · {product.location}</p><div className="my-7 border-y border-primary-100 py-6"><p className="text-sm text-gray-500">Fictional equipment price</p><p className="mt-1 text-3xl font-bold text-primary-900">€{product.price.toLocaleString('en-US')}</p><p className="mt-2 text-sm text-gray-500">Not a commercial offer</p></div><Link href={`/request-quote?equipment=${encodeURIComponent(`[DEMO] ${product.name}`)}`} className="btn-primary">Test a Quote Request</Link></div>
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-2"><section className="rounded-2xl border border-primary-100 bg-white p-7"><h2 className="mb-5 text-2xl font-bold text-primary-900">Demonstration specifications</h2><dl>{product.specifications.map((spec) => <div key={spec.label} className="grid grid-cols-[1fr_2fr] gap-4 border-b border-gray-100 py-3 text-sm leading-6"><dt className="text-gray-600">{spec.label}</dt><dd className="font-semibold text-primary-900">{spec.value}</dd></div>)}</dl></section><section className="rounded-2xl border border-primary-100 bg-white p-7"><h2 className="mb-5 text-2xl font-bold text-primary-900">Demonstration package</h2><ul className="list-disc space-y-3 pl-5 leading-7 text-gray-700">{product.included.map((item) => <li key={item}>{item}</li>)}</ul></section></div>
      <section className="mt-12"><div className="mb-6 flex flex-wrap items-center justify-between gap-3"><h2 className="text-2xl font-bold text-primary-900">More in this subcategory</h2><Link href={parentPath} className="font-semibold text-orange-700 hover:underline">View subcategory</Link></div><DemoInventoryGrid products={related} /></section>
    </div></div>
  </>;
}
