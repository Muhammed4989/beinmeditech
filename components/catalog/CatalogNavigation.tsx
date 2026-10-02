'use client';

import { useEffect, useRef, useState } from 'react';
import { filterGroups, filterPath, type FilterKey, type FilterState } from '@/lib/catalog-filters';
import { equipmentSubcategories } from '@/lib/equipment-taxonomy';

export default function CatalogNavigation({ initial }: { initial: FilterState }) {
  const [filters, setFilters] = useState(initial);
  const [openKey, setOpenKey] = useState<FilterKey | null>(null);
  const root = useRef<HTMLDivElement>(null);
  const selected = filterGroups.flatMap((group) => group.options.filter((option) => filters[group.key].includes(option.value)).map((option) => ({ ...option, key: group.key })));

  useEffect(() => {
    function closeOutside(event: PointerEvent) {
      const openGroup = root.current?.querySelector('[aria-expanded="true"]')?.parentElement;
      if (event.target instanceof Node && !openGroup?.contains(event.target)) setOpenKey(null);
    }
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        root.current?.querySelector<HTMLButtonElement>('[aria-expanded="true"]')?.focus();
        setOpenKey(null);
      }
    }
    document.addEventListener('pointerdown', closeOutside);
    document.addEventListener('keydown', closeOnEscape);
    return () => { document.removeEventListener('pointerdown', closeOutside); document.removeEventListener('keydown', closeOnEscape); };
  }, []);

  function toggle(key: FilterKey, value: string) {
    setFilters((current) => {
      const next = { ...current, [key]: current[key].includes(value) ? current[key].filter((item) => item !== value) : [...current[key], value] };
      if (key === 'category') next.subcategory = next.subcategory.filter((selectedSub) => equipmentSubcategories.some((sub) => sub.value === selectedSub && (!next.category.length || next.category.includes(sub.category))));
      if (key === 'subcategory' && next.subcategory.includes(value)) {
        const parent = equipmentSubcategories.find((sub) => sub.value === value)?.category;
        if (parent && !next.category.includes(parent)) next.category = [...next.category, parent];
      }
      return next;
    });
  }

  return <section className="border-b border-primary-100 bg-white" aria-labelledby="equipment-filter-heading">
    <div className="mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h2 id="equipment-filter-heading" className="text-xl font-bold text-primary-900">Find your equipment</h2>
        {selected.length > 0 && <a href="/medical-equipment" className="text-sm font-semibold text-gray-600 hover:text-orange-700">Clear all</a>}
      </div>
      <div ref={root} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {filterGroups.map((group) => {
          const options = group.key === 'subcategory' && filters.category.length ? group.options.filter((option) => equipmentSubcategories.some((sub) => sub.value === option.value && filters.category.includes(sub.category))) : group.options;
          const labels = group.options.filter((option) => filters[group.key].includes(option.value));
          return <div key={group.key} className="relative">
            <button type="button" onClick={() => setOpenKey((current) => current === group.key ? null : group.key)} aria-expanded={openKey === group.key} aria-controls={'filter-' + group.key} className={'flex w-full items-center justify-between gap-2 rounded-xl border bg-white px-4 py-3.5 text-left transition-colors ' + (openKey === group.key ? 'border-orange ring-2 ring-orange/10' : 'border-primary-200 hover:border-orange')}>
              <span className="min-w-0"><span className="block text-sm text-gray-500">{group.label}</span><strong className="mt-1 block truncate text-sm text-primary-900">{labels.length === 1 ? labels[0].label : labels.length ? labels.length + ' selected' : 'All options'}</strong></span>
              <svg aria-hidden="true" className={'h-4 w-4 shrink-0 text-primary-600 transition-transform ' + (openKey === group.key ? 'rotate-180' : '')} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m6 9 6 6 6-6" /></svg>
            </button>
            {openKey === group.key && <fieldset id={'filter-' + group.key} className="filter-dropdown absolute left-0 right-0 top-full z-30 mt-2 max-h-80 overflow-auto rounded-xl border border-primary-100 bg-white p-2 shadow-xl"><legend className="sr-only">{group.label}</legend>
              {options.map((option) => <label key={option.value} className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-primary-50"><input type="checkbox" checked={filters[group.key].includes(option.value)} onChange={() => toggle(group.key, option.value)} className="h-4 w-4 shrink-0 accent-[#28214C]" /><span>{option.label}</span></label>)}
            </fieldset>}
          </div>;
        })}
      </div>
      <div className="mt-5 flex flex-col justify-between gap-4 md:flex-row md:items-center" onPointerDown={() => setOpenKey(null)}>
        <div className="flex min-h-8 flex-wrap gap-2">{selected.length === 0 ? <span className="text-sm text-gray-500">Choose one or more options, then show matching equipment.</span> : selected.map((option) => <button key={option.key + '-' + option.value} type="button" onClick={() => toggle(option.key, option.value)} aria-label={'Remove ' + option.label} className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-3 py-2 text-sm font-semibold text-primary-600 hover:bg-orange-50">{option.label}<span aria-hidden="true">×</span></button>)}</div>
        <a href={filterPath(filters)} className="btn-primary justify-center whitespace-nowrap">Show Matching Equipment</a>
      </div>
      <noscript><p className="mt-4 text-sm text-gray-600">Browse the category links below to explore equipment without interactive filters.</p></noscript>
    </div>
  </section>;
}
