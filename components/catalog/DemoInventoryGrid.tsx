import Image from 'next/image';
import Link from 'next/link';
import { demoProductPath, type DemoProduct } from '@/lib/demo-products';

export default function DemoInventoryGrid({ products }: { products: DemoProduct[] }) {
  if (!products.length) return <div className="rounded-2xl border border-primary-100 bg-primary-50 p-8 text-center"><h3 className="text-xl font-bold text-primary-900">No demo equipment matches these filters</h3><p className="mt-2 leading-7 text-gray-600">Remove one or more selections, or request sourcing for your configuration.</p><Link href="/medical-equipment" className="mt-5 inline-block font-semibold text-orange-700 underline">Reset filters</Link></div>;
  return <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{products.map((product) => <article key={product.slug} className="content-card overflow-hidden">
    <Link href={demoProductPath(product)} tabIndex={-1} aria-hidden="true" className="relative block aspect-[4/3] bg-primary-50"><Image src={product.image} alt="" fill sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw" className="object-cover" /><span className="absolute left-3 top-3 rounded-full bg-primary-600 px-3 py-1.5 text-xs font-bold text-white">DEMO</span></Link>
    <div className="p-5"><p className="text-sm text-gray-500">{product.brand} · {product.year}</p><h3 className="mt-2 text-xl font-bold text-primary-900"><Link href={demoProductPath(product)} className="hover:text-orange-700">{product.name}</Link></h3><p className="mt-3 text-sm font-semibold text-primary-600">{product.condition}</p><p className="mt-2 text-sm leading-6 text-gray-600">{product.cardDetails}</p><div className="mt-5 flex items-end justify-between gap-3 border-t border-gray-100 pt-4"><div><span className="text-sm text-gray-500">Fictional price</span><p className="text-2xl font-bold text-primary-900">€{product.price.toLocaleString('en-US')}</p></div><Link href={demoProductPath(product)} className="text-sm font-semibold text-orange-700 hover:underline">View details</Link></div></div>
  </article>)}</div>;
}
