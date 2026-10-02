import Link from 'next/link';
import type { Breadcrumb } from '@/lib/content';

export default function Breadcrumbs({ items }: { items: Breadcrumb[] }) {
  return <nav aria-label="Breadcrumb" className="mb-6 text-sm leading-6">
    <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
      {items.map((item, index) => <li key={item.href} className="flex items-center gap-2">
        {index > 0 && <span aria-hidden="true" className="opacity-40">/</span>}
        {index === items.length - 1 ? <span aria-current="page" className="font-semibold">{item.name}</span> : <Link href={item.href} className="underline-offset-4 hover:underline">{item.name}</Link>}
      </li>)}
    </ol>
  </nav>;
}
