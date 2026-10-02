import { equipmentCategories, equipmentSubcategories } from './equipment-taxonomy';
import type { DemoProduct } from './demo-products';

export type FilterKey = 'condition' | 'category' | 'subcategory' | 'brand';
export type FilterState = Record<FilterKey, string[]>;
export type SearchParameters = Record<string, string | string[] | undefined>;
export const filterGroups: { key: FilterKey; label: string; options: { label: string; value: string }[] }[] = [
  { key: 'category', label: 'Equipment Type', options: equipmentCategories },
  { key: 'subcategory', label: 'Subcategory', options: equipmentSubcategories },
  { key: 'condition', label: 'Condition', options: [{ label: 'Used', value: 'used' }, { label: 'Refurbished', value: 'refurbished' }, { label: 'New', value: 'new' }] },
  { key: 'brand', label: 'Manufacturer', options: [{ label: 'Siemens Healthineers', value: 'siemens' }, { label: 'Philips', value: 'philips' }, { label: 'Olympus', value: 'olympus' }, { label: 'GE HealthCare', value: 'ge-healthcare' }, { label: 'Demo Manufacturer', value: 'demo' }] },
];
export function emptyFilters(): FilterState { return { condition: [], category: [], subcategory: [], brand: [] }; }
export function pathFilters(path: string): FilterState {
  const parts = path.split('/').filter(Boolean);
  const state = emptyFilters();
  state.condition = ['used', 'refurbished', 'new'].filter((value) => parts.includes(value));
  state.category = equipmentCategories.filter((value) => parts.includes(value.value)).map((value) => value.value);
  state.subcategory = equipmentSubcategories.filter((value) => state.category.includes(value.category) && parts.includes(value.value)).map((value) => value.value);
  if (parts.includes('siemens')) state.brand = ['siemens'];
  return state;
}
export function readFilters(path: string, params: SearchParameters = {}): FilterState {
  const state = pathFilters(path);
  for (const group of filterGroups) {
    if (params[group.key] !== undefined) {
      const raw = params[group.key];
      const values = (Array.isArray(raw) ? raw.join(',') : raw || '').split(',');
      state[group.key] = group.options.filter((option) => values.includes(option.value)).map((option) => option.value);
    }
  }
  if (state.category.length) state.subcategory = state.subcategory.filter((value) => equipmentSubcategories.some((sub) => sub.value === value && state.category.includes(sub.category)));
  return state;
}
// Only approved landing pages become path segments; every other selection is retained in the query.
export function filterPath(filters: FilterState) {
  let path = '/medical-equipment';
  const [category] = filters.category;
  if (filters.category.length === 1) {
    path += `/${category}`;
    if (filters.subcategory.length === 1 && equipmentSubcategories.some((sub) => sub.value === filters.subcategory[0] && sub.category === category)) path += `/${filters.subcategory[0]}`;
    else if (!filters.subcategory.length && category === 'ultrasound' && filters.condition.length === 1 && filters.condition[0] === 'used') path = '/medical-equipment/used/ultrasound';
    else if (!filters.subcategory.length && category === 'ultrasound' && filters.brand.length === 1 && filters.brand[0] === 'siemens') path += '/siemens';
  } else if (!filters.category.length && filters.condition.length === 1 && filters.condition[0] === 'used') path += '/used';
  const encoded = pathFilters(path);
  const params = new URLSearchParams();
  for (const { key, options } of filterGroups) {
    const selected = options.filter((option) => filters[key].includes(option.value)).map((option) => option.value);
    if (selected.join(',') !== encoded[key].join(',') && selected.length) params.set(key, selected.join(','));
  }
  return `${path}${params.size ? `?${params.toString()}` : ''}`;
}
export function filterLabels(filters: FilterState) {
  return filterGroups.flatMap((group) => group.options.filter((option) => filters[group.key].includes(option.value)).map((option) => option.label));
}
export function matchesFilters(product: DemoProduct, filters: FilterState) {
  const category = equipmentCategories.find((item) => item.productCategory === product.category)?.value;
  const brand = filterGroups.find((group) => group.key === 'brand')!.options.find((item) => item.label === product.brand)?.value;
  const condition = product.condition.toLowerCase().includes('refurbished') ? 'refurbished' : product.condition.toLowerCase().includes('used') ? 'used' : 'new';
  return (!filters.category.length || filters.category.includes(category || '')) && (!filters.subcategory.length || filters.subcategory.includes(product.subcategory)) && (!filters.brand.length || filters.brand.includes(brand || '')) && (!filters.condition.length || filters.condition.includes(condition));
}
