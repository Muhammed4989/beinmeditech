import { equipmentCategories, equipmentSubcategories } from './equipment-taxonomy';

export const SITE_URL = 'https://beinmeditech.com';

export type CatalogueItem = {
  name: string;
  brand: string;
  category: string;
  href: string;
  summary: string;
  buyerGuide: string;
  applications: string[];
};

export type SeoCollection = {
  segments: string[];
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  intro: string;
  itemNames: string[];
  sections: { title: string; body: string }[];
  faqs: { question: string; answer: string }[];
  related: { label: string; href: string }[];
  updated: string;
};

export const catalogueItems: CatalogueItem[] = [
  { name: 'Siemens ACUSON NX3', brand: 'Siemens Healthineers', category: 'Ultrasound', href: '/medical-equipment/ultrasound/siemens/acuson-nx3', summary: 'A versatile ultrasound platform commonly sourced for general imaging and shared clinical environments.', buyerGuide: 'Best evaluated by probe set, installed options, software version and production year. Confirm these details before comparing prices.', applications: ['General imaging', 'Vascular', 'OB/GYN'] },
  { name: 'Siemens ACUSON Juniper', brand: 'Siemens Healthineers', category: 'Ultrasound', href: '/medical-equipment/ultrasound/siemens', summary: 'A premium ultrasound platform available through our international sourcing network.', buyerGuide: 'Suitable configurations vary by department. State the required clinical applications so compatible probes and options can be sourced.', applications: ['Radiology', 'Cardiology', 'Women’s health'] },
  { name: 'Philips EPIQ 7', brand: 'Philips', category: 'Ultrasound', href: '/medical-equipment/ultrasound', summary: 'A high-end ultrasound platform for facilities requiring broad clinical capability.', buyerGuide: 'Check transducer compatibility, installed clinical packages and hardware generation because these factors materially affect value.', applications: ['Cardiology', 'Radiology', 'Interventional'] },
  { name: 'GE Voluson E10', brand: 'GE HealthCare', category: 'Ultrasound', href: '/medical-equipment/ultrasound', summary: 'An advanced women’s health ultrasound platform sourced according to configuration requirements.', buyerGuide: 'For women’s health use, specify required 3D/4D probes, software options and reporting workflow in the sourcing request.', applications: ['OB/GYN', 'Fetal medicine', '3D/4D imaging'] },
  { name: 'Olympus EVIS EXERA III', brand: 'Olympus', category: 'Endoscopy', href: '/medical-equipment/endoscopy', summary: 'Endoscopy systems and compatible components sourced with configuration verification.', buyerGuide: 'Processors, light sources and scopes must be checked as one compatible platform. Ask for a written list of every included component.', applications: ['Gastroenterology', 'Bronchoscopy', 'Surgical imaging'] },
  { name: 'Philips IntelliVue MX750', brand: 'Philips', category: 'Patient Monitoring', href: '/medical-equipment/patient-monitors', summary: 'Patient monitoring equipment for acute-care and connected clinical environments.', buyerGuide: 'Specify required measurements, modules, mounting and central-station compatibility before requesting the final configuration.', applications: ['ICU', 'Operating room', 'Emergency care'] },
];

const commonFaq = [
  { question: 'Can equipment be delivered outside Germany?', answer: 'Yes. beIN MediTech can arrange export preparation and international delivery. The final route, documentation and cost depend on the destination and equipment type.' },
  { question: 'Is every system shown currently in stock?', answer: 'Not necessarily. Some pages represent equipment we source on request. Availability, year, configuration, probes or accessories are confirmed in the formal quotation.' },
  { question: 'Can I request a delivered price?', answer: 'Yes. Send the destination country, required configuration and preferred delivery time. We will prepare a quotation that separates equipment, logistics and any optional services.' },
];

const originalCollections: SeoCollection[] = [
  {
    segments: [], eyebrow: 'Medical Equipment Marketplace',
    title: 'Medical Equipment for Sale from Germany | beIN MediTech',
    description: 'Source used and refurbished medical equipment from Germany with configuration checks, export support and delivered-price quotations.',
    h1: 'Medical Equipment for Sale from Germany',
    intro: 'Browse a curated selection of medical equipment categories, manufacturers and model guides. We help hospitals, clinics and distributors source suitable systems, verify configurations and arrange international delivery.',
    itemNames: catalogueItems.map((item) => item.name),
    sections: [
      { title: 'A sourcing process built for medical buyers', body: 'Medical equipment cannot be evaluated by model name alone. Manufacturing year, software, probes, accessories, service history and destination requirements all influence suitability and price. Our quotation process confirms these details before an order is agreed.' },
      { title: 'From Germany to your facility', body: 'Our team supports equipment sourcing, commercial documentation, export preparation and logistics coordination. Buyers receive a clear offer based on the requested configuration and delivery destination.' },
    ],
    faqs: commonFaq,
    related: [
      { label: 'Used medical equipment', href: '/medical-equipment/used' },
      { label: 'Ultrasound systems', href: '/medical-equipment/ultrasound' },
      { label: 'Endoscopy equipment', href: '/medical-equipment/endoscopy' },
      { label: 'Patient monitors', href: '/medical-equipment/patient-monitors' },
    ], updated: '2026-09-01',
  },
  {
    segments: ['used'], eyebrow: 'Condition', title: 'Used Medical Equipment for Sale | beIN MediTech',
    description: 'Source quality used medical equipment from Germany. Request verified configurations and an international delivered-price quotation.',
    h1: 'Used Medical Equipment for Sale',
    intro: 'Find pre-owned medical systems sourced around your clinical, budget and destination requirements. Each offer identifies the exact configuration, included accessories and commercial terms.',
    itemNames: catalogueItems.map((item) => item.name),
    sections: [
      { title: 'What to verify before buying used equipment', body: 'Ask for the serial number, year, software version, installed options, included accessories and available service information. Compatibility with local voltage, language and regulatory requirements should also be checked.' },
      { title: 'A quotation for the actual configuration', body: 'Prices vary substantially between systems carrying the same model name. We quote the specific unit and clearly state what is included, helping buyers compare offers on a like-for-like basis.' },
    ], faqs: commonFaq,
    related: [{ label: 'Used ultrasound machines', href: '/medical-equipment/used/ultrasound' }, { label: 'All medical equipment', href: '/medical-equipment' }], updated: '2026-09-01',
  },
  {
    segments: ['ultrasound'], eyebrow: 'Equipment Category', title: 'Ultrasound Machines for Sale from Germany | beIN MediTech',
    description: 'Browse ultrasound systems from Siemens, Philips and GE. Request probes, configuration details and delivered pricing for your country.',
    h1: 'Ultrasound Machines for Sale',
    intro: 'Source ultrasound platforms for radiology, cardiology, women’s health and general imaging. Tell us the examinations you perform and the probes you need so we can match the system to the clinical requirement.',
    itemNames: ['Siemens ACUSON NX3', 'Siemens ACUSON Juniper', 'Philips EPIQ 7', 'GE Voluson E10'],
    sections: [
      { title: 'Choose the system by clinical application', body: 'The right ultrasound system depends on its intended examinations, imaging modes, probe compatibility and workflow needs. A lower headline price may not include the transducers or options required for your department.' },
      { title: 'Probe and software verification', body: 'Our offers identify included probes and known installed options. Additional transducers and accessories can be sourced where available.' },
    ], faqs: commonFaq,
    related: [{ label: 'Used ultrasound systems', href: '/medical-equipment/used/ultrasound' }, { label: 'Siemens ultrasound systems', href: '/medical-equipment/ultrasound/siemens' }], updated: '2026-09-01',
  },
  {
    segments: ['used', 'ultrasound'], eyebrow: 'Condition & Category', title: 'Used Ultrasound Machines for Sale | German Sourcing',
    description: 'Used ultrasound systems sourced from Germany with probe and configuration checks. Ask for availability and delivered pricing.',
    h1: 'Used Ultrasound Machines for Sale',
    intro: 'Compare pre-owned ultrasound platforms by application, configuration and included probes—not model name alone. We source individual systems and provide the exact details in each quotation.',
    itemNames: ['Siemens ACUSON NX3', 'Siemens ACUSON Juniper', 'Philips EPIQ 7', 'GE Voluson E10'],
    sections: [{ title: 'Why configuration matters', body: 'Two used systems of the same model may have different software packages, probe sets, production years and service histories. These differences affect both clinical value and market price.' }],
    faqs: commonFaq, related: [{ label: 'All ultrasound machines', href: '/medical-equipment/ultrasound' }, { label: 'All used medical equipment', href: '/medical-equipment/used' }], updated: '2026-09-01',
  },
  {
    segments: ['ultrasound', 'siemens'], eyebrow: 'Brand & Category', title: 'Used Siemens Ultrasound Machines for Sale | beIN MediTech',
    description: 'Source Siemens ultrasound systems from Germany, including ACUSON model families. Request configuration and international delivery pricing.',
    h1: 'Siemens Ultrasound Systems for Sale',
    intro: 'Explore Siemens Healthineers ultrasound platforms available through our sourcing network. We confirm the exact model, year, probes, options and condition before quotation.',
    itemNames: ['Siemens ACUSON NX3', 'Siemens ACUSON Juniper'],
    sections: [{ title: 'Buying a pre-owned Siemens ultrasound', body: 'Identify the examinations, probes and software features required by your clinicians. The ACUSON family includes different system classes and configurations, so compatibility should be verified against the offered unit.' }],
    faqs: commonFaq, related: [{ label: 'Siemens ACUSON NX3', href: '/medical-equipment/ultrasound/siemens/acuson-nx3' }, { label: 'All ultrasound machines', href: '/medical-equipment/ultrasound' }], updated: '2026-09-01',
  },
  {
    segments: ['ultrasound', 'siemens', 'acuson-nx3'], eyebrow: 'Model Guide', title: 'Used Siemens ACUSON NX3 for Sale | Sourcing & Delivery',
    description: 'Request a used Siemens ACUSON NX3 ultrasound system sourced from Germany, with configuration checks and international delivery quotation.',
    h1: 'Used Siemens ACUSON NX3 Ultrasound System',
    intro: 'The ACUSON NX3 is a versatile ultrasound platform often considered for general imaging and multi-department use. Availability changes, so we source the required year, probes and configuration on request.',
    itemNames: ['Siemens ACUSON NX3'],
    sections: [
      { title: 'Configuration checklist', body: 'Before ordering, confirm the system year, installed software, imaging options, probe types, accessories, language, electrical requirements and physical condition. All included items should be written into the quotation.' },
      { title: 'Request sourcing even when stock changes', body: 'This model guide remains useful when a specific unit is no longer available. Send your required probes, budget and destination and our team can search for a comparable configuration.' },
    ], faqs: commonFaq,
    related: [{ label: 'Siemens ultrasound systems', href: '/medical-equipment/ultrasound/siemens' }, { label: 'Used ultrasound machines', href: '/medical-equipment/used/ultrasound' }], updated: '2026-09-01',
  },
  {
    segments: ['endoscopy'], eyebrow: 'Equipment Category', title: 'Used Endoscopy Equipment for Sale | beIN MediTech',
    description: 'Source endoscopy processors, light sources, scopes and compatible components from Germany with configuration verification.',
    h1: 'Endoscopy Equipment for Sale',
    intro: 'Source endoscopy systems and components according to procedure type, platform generation and compatibility requirements. Exact included equipment is documented in the quotation.',
    itemNames: ['Olympus EVIS EXERA III'],
    sections: [{ title: 'System compatibility comes first', body: 'Processors, light sources, monitors, scopes and accessories must belong to compatible generations. A complete request should identify both the procedures and the components already used by the facility.' }],
    faqs: commonFaq, related: [{ label: 'All medical equipment', href: '/medical-equipment' }], updated: '2026-09-01',
  },
  {
    segments: ['patient-monitors'], eyebrow: 'Equipment Category', title: 'Patient Monitors for Sale | International Delivery',
    description: 'Source patient monitoring systems for hospitals and clinics with configuration checks and international delivered pricing.',
    h1: 'Patient Monitoring Systems for Sale',
    intro: 'We source patient monitors for critical care, operating rooms and emergency departments. Required modules, networking compatibility and accessories are confirmed before quotation.',
    itemNames: ['Philips IntelliVue MX750'],
    sections: [{ title: 'Specify the parameters you need', body: 'A patient monitor quotation should state the required measurements, modules, mounting, accessories and central-station compatibility. These requirements determine the correct configuration.' }],
    faqs: commonFaq, related: [{ label: 'All medical equipment', href: '/medical-equipment' }], updated: '2026-09-01',
  },
  {
    segments: ['ultrasound', 'for-sale', 'saudi-arabia'], eyebrow: 'Destination Guide', title: 'Ultrasound Machines for Sale in Saudi Arabia | Delivered Quote',
    description: 'Request ultrasound systems sourced from Germany with a delivered-price quotation for Saudi Arabia and documented configuration details.',
    h1: 'Ultrasound Machines Delivered to Saudi Arabia',
    intro: 'Hospitals, clinics and medical distributors in Saudi Arabia can request ultrasound systems sourced from Germany with a quotation tailored to the destination, configuration and delivery terms.',
    itemNames: ['Siemens ACUSON NX3', 'Siemens ACUSON Juniper', 'Philips EPIQ 7', 'GE Voluson E10'],
    sections: [
      { title: 'What the delivered quotation covers', body: 'The offer can identify equipment price, included probes and accessories, packing, transport terms and optional services. Import duties, local registration and installation responsibilities are stated separately where applicable.' },
      { title: 'Information needed from the buyer', body: 'Provide the Saudi city, facility type, clinical applications, preferred manufacturer, required probes and target budget. This allows us to source and price a relevant configuration.' },
    ], faqs: commonFaq,
    related: [{ label: 'All ultrasound machines', href: '/medical-equipment/ultrasound' }, { label: 'Used Siemens ultrasound', href: '/medical-equipment/ultrasound/siemens' }], updated: '2026-09-01',
  },
];

export function collectionPath(segments: string[]) {
  return `/medical-equipment${segments.length ? `/${segments.join('/')}` : ''}`;
}

export function findCollection(segments: string[] = []) {
  const key = segments.join('/');
  return seoCollections.find((page) => page.segments.join('/') === key);
}

export const seoCollections: SeoCollection[] = [
  ...originalCollections.filter((page) => !page.segments.includes('for-sale')),
  ...equipmentSubcategories.map((sub): SeoCollection => ({
    segments: [sub.category, sub.value], eyebrow: 'Equipment subcategory',
    title: `${sub.label} | Medical Equipment Sourcing`, h1: sub.label,
    description: sub.intro, intro: sub.intro, sections: sub.sections,
    itemNames: [], updated: '2026-10-02',
    faqs: [
      { question: `How do I request ${sub.label.toLowerCase()}?`, answer: 'Send the required configuration, quantity, preferred condition and intended use. The team will clarify availability, the included package and commercial terms in a formal quotation.' },
      { question: 'Are the demonstration prices commercial offers?', answer: 'No. Demonstration listings are fictional website test data. Actual equipment identification, condition, accessories and price require a separate confirmed quotation.' },
    ],
    related: [{ label: `All ${equipmentCategories.find((category) => category.value === sub.category)?.label.toLowerCase()}`, href: collectionPath([sub.category]) }, { label: 'Used medical equipment', href: '/medical-equipment/used' }],
  })),
];

export function collectionBreadcrumbs(page: SeoCollection) {
  const crumbs = [{ name: 'Home', href: '/' }, { name: 'Medical Equipment', href: '/medical-equipment' }];
  page.segments.forEach((segment, index) => {
    const parts = page.segments.slice(0, index + 1);
    const sub = equipmentSubcategories.find((item) => item.value === segment && parts.includes(item.category));
    const name = sub?.label || equipmentCategories.find((item) => item.value === segment)?.label || ({ used: 'Used Equipment', siemens: 'Siemens', 'acuson-nx3': 'ACUSON NX3' } as Record<string, string>)[segment] || segment;
    crumbs.push({ name, href: collectionPath(parts) });
  });
  return crumbs;
}

export function collectionChildren(page: SeoCollection) {
  return seoCollections.filter((candidate) => candidate.segments.length === page.segments.length + 1 && page.segments.every((segment, index) => candidate.segments[index] === segment) && (page.segments.length > 0 || candidate.segments[0] !== 'used'));
}

export function collectionItems(page: SeoCollection) {
  return page.itemNames.map((name) => catalogueItems.find((item) => item.name === name)).filter((item): item is CatalogueItem => Boolean(item));
}
