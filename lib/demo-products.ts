import { equipmentCategorySlug } from './equipment-taxonomy';

export type DemoProduct = {
  slug: string;
  name: string;
  brand: string;
  model: string;
  category: string;
  subcategory: string;
  year: number;
  condition: string;
  price: number;
  currency: 'EUR';
  location: string;
  availability: string;
  image: string;
  shortDescription: string;
  cardDetails: string;
  included: string[];
  specifications: { label: string; value: string }[];
};

// TEST DATA ONLY. These records must remain noindex and excluded from the sitemap.
export const demoProducts: DemoProduct[] = [
  {
    slug: 'demo-siemens-acuson-nx3-2019',
    name: 'Siemens ACUSON NX3 Ultrasound System', brand: 'Siemens Healthineers', model: 'ACUSON NX3', category: 'Ultrasound', subcategory: 'general-imaging',
    year: 2019, condition: 'Excellent used condition', price: 11900, currency: 'EUR', location: 'Lübeck, Germany', availability: 'Demo: In stock', image: '/images/demo-ultrasound.svg',
    shortDescription: 'Professional ultrasound system prepared as a demonstration listing for testing the marketplace design and quotation journey.',
    cardDetails: 'Professional ultrasound system with three demo probes for general imaging, vascular and OB/GYN applications.',
    included: ['Three demonstration probes', 'Operator console', 'Power cable', 'Basic export packing'],
    specifications: [{ label: 'Manufactured', value: '2019 (demo)' }, { label: 'Condition', value: 'Used – demo value' }, { label: 'Applications', value: 'General imaging, vascular, OB/GYN' }, { label: 'Origin', value: 'Germany' }],
  },
  {
    slug: 'demo-olympus-evis-exera-iii',
    name: 'Olympus EVIS EXERA III Endoscopy Tower', brand: 'Olympus', model: 'EVIS EXERA III', category: 'Endoscopy', subcategory: 'systems',
    year: 2018, condition: 'Refurbished demo condition', price: 18500, currency: 'EUR', location: 'Hamburg, Germany', availability: 'Demo: In stock', image: '/images/demo-endoscopy.svg',
    shortDescription: 'Demonstration endoscopy configuration used to test category cards, specifications and delivered-price enquiries.',
    cardDetails: 'Complete demo tower with video processor, light source, medical monitor and mobile trolley.',
    included: ['Video processor', 'Light source', 'Medical-grade monitor', 'Mobile trolley'],
    specifications: [{ label: 'Manufactured', value: '2018 (demo)' }, { label: 'Condition', value: 'Refurbished – demo value' }, { label: 'Configuration', value: 'Tower configuration' }, { label: 'Origin', value: 'Germany' }],
  },
  {
    slug: 'demo-philips-intellivue-mx750',
    name: 'Philips IntelliVue MX750 Patient Monitor', brand: 'Philips', model: 'IntelliVue MX750', category: 'Patient Monitoring', subcategory: 'bedside',
    year: 2021, condition: 'Very good used condition', price: 4750, currency: 'EUR', location: 'Berlin, Germany', availability: 'Demo: In stock', image: '/images/demo-monitor.svg',
    shortDescription: 'Demonstration patient-monitor listing with fictional commercial details for interface testing only.',
    cardDetails: 'Patient monitor configured for ECG, SpO₂ and NIBP, including a demo cable and sensor set.',
    included: ['Display unit', 'Power supply', 'ECG cable set', 'SpO₂ sensor'],
    specifications: [{ label: 'Manufactured', value: '2021 (demo)' }, { label: 'Condition', value: 'Used – demo value' }, { label: 'Parameters', value: 'ECG, SpO₂, NIBP (demo)' }, { label: 'Origin', value: 'Germany' }],
  },
];

// Clearly fictional units exercise every branch without claiming additional branded inventory.
const examples = [
  ['ultrasound-general-b', 'General Imaging Ultrasound — Demo B', 'Ultrasound', 'general-imaging', 9800, 'refurbished', 'Cart-based system with a demonstration console and two probe placeholders.'],
  ['ultrasound-portable-a', 'Portable Ultrasound — Demo A', 'Ultrasound', 'portable', 6400, 'used', 'Compact console with a demo carrying case, power supply and one probe placeholder.'],
  ['ultrasound-portable-b', 'Portable Ultrasound — Demo B', 'Ultrasound', 'portable', 7900, 'new', 'Portable demonstration package with a trolley and two probe placeholders.'],
  ['endoscopy-system-b', 'Endoscopy Tower — Demo B', 'Endoscopy', 'systems', 15200, 'used', 'Demonstration tower with processor, light source, monitor and mobile trolley.'],
  ['endoscopy-component-a', 'Video Processor — Demo A', 'Endoscopy', 'components', 3200, 'used', 'Standalone demo video processor with a power cable; scopes and display excluded.'],
  ['endoscopy-component-b', 'Light Source — Demo B', 'Endoscopy', 'components', 2100, 'refurbished', 'Standalone demonstration light-source unit with a power cable and accessory placeholder.'],
  ['monitor-bedside-b', 'Bedside Monitor — Demo B', 'Patient Monitoring', 'bedside', 3600, 'refurbished', 'Bedside demonstration display with ECG, SpO₂ and NIBP accessory placeholders.'],
  ['monitor-transport-a', 'Transport Monitor — Demo A', 'Patient Monitoring', 'transport', 2800, 'used', 'Compact demo monitor with battery, carrying handle and sensor placeholders.'],
  ['monitor-transport-b', 'Transport Monitor — Demo B', 'Patient Monitoring', 'transport', 4100, 'new', 'Demonstration transport package with charger, mounting placeholder and sample cables.'],
] as const;
for (const [slug, name, category, subcategory, price, condition, details] of examples) {
  demoProducts.push({
    slug: `demo-${slug}`, name, model: name, category, subcategory, brand: 'Demo Manufacturer', year: 2020, condition: `${condition[0].toUpperCase()}${condition.slice(1)} demonstration condition`, price, currency: 'EUR', location: 'Germany (demo)', availability: 'Demonstration only',
    image: category === 'Ultrasound' ? '/images/demo-ultrasound.svg' : category === 'Endoscopy' ? '/images/demo-endoscopy.svg' : '/images/demo-monitor.svg',
    shortDescription: details, cardDetails: details,
    included: ['Fictional equipment configuration for website testing', 'Illustrative accessories only'],
    specifications: [{ label: 'Equipment type', value: category }, { label: 'Condition', value: `${condition} (fictional)` }, { label: 'Configuration', value: 'Demonstration data; not a commercial offer' }],
  });
}

export function demoProductPath(product: DemoProduct) {
  return `/medical-equipment/${equipmentCategorySlug(product.category)}/${product.subcategory}/${product.slug}`;
}

export function findDemoProduct(slug: string) {
  return demoProducts.find((product) => product.slug === slug);
}
