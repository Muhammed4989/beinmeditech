import type { ContentLink } from './content';

export type ArticleInlineLink = ContentLink & { paragraph: string };
export type ArticleReference = ContentLink & { publisher: string; note: string; checkedAt: string };

const guide = (path: string) => '/blog/' + path;
const comparison = guide('procurement/quotations-delivery/compare-equipment-quotations');
const photos = guide('procurement/used-equipment/medical-equipment-photo-checklist');
const evidence = guide('procurement/used-equipment/used-equipment-evidence');
const shipment = guide('procurement/quotations-delivery/equipment-shipping-handover');
const receiving = guide('procurement/quotations-delivery/receiving-site-readiness');
const revisions = guide('procurement/quotations-delivery/equipment-configuration-revision-log');
const integrationBrief = guide('healthcare-it/integration/medical-integration-brief');
const connectedHandover = guide('healthcare-it/integration/connected-equipment-handover');

export const primarySources = {
  procurement: {
    label: 'Procurement process resource guide (2011)', publisher: 'World Health Organization',
    href: 'https://www.who.int/publications/i/item/9789241501378',
    note: 'Background on medical-device procurement. This dated framework is not destination-specific import guidance or evidence of supplier stock.',
    checkedAt: '2026-10-06',
  },
  reprocessing: {
    label: 'Reprocessing of Reusable Medical Devices', publisher: 'U.S. Food and Drug Administration',
    href: 'https://www.fda.gov/medical-devices/products-and-medical-procedures/reprocessing-reusable-medical-devices',
    note: 'General U.S. information on reusable devices and the importance of their instructions. Not a procedure for an offered unit or proof of regulatory approval.',
    checkedAt: '2026-10-06',
  },
  dicom: {
    label: 'DICOM PS3.2: Scope and Field of Application', publisher: 'DICOM Standard',
    href: 'https://dicom.nema.org/medical/dicom/current/output/chtml/part02/chapter_1.html',
    note: 'Defines the purpose of conformance statements and the limits of the conformance standard. Applies to DICOM imaging interfaces, not every medical-device connection.',
    checkedAt: '2026-10-06',
  },
} satisfies Record<string, ArticleReference>;

// Editorial choices, not sitewide keyword replacement. Each label must occur
// exactly once in its named paragraph; verification fails if copy drifts.
export const articleLinkPlans: Record<string, ArticleInlineLink[]> = {
  'ultrasound-configuration-checklist': [
    { paragraph: 'intro', label: 'ultrasound enquiry', href: '/medical-equipment/ultrasound' },
    { paragraph: 'List probes and options separately', label: 'exact probe models', href: guide('equipment-guides/ultrasound/probe-package-comparison') },
    { paragraph: 'Request evidence for the offered package', label: 'quotation comparison', href: comparison },
  ],
  'probe-package-comparison': [
    { paragraph: 'intro', label: 'proposed console', href: '/medical-equipment/ultrasound' },
    { paragraph: 'Create a line for every probe', label: 'required probe list', href: guide('equipment-guides/ultrasound/ultrasound-configuration-checklist') },
  ],
  'endoscopy-tower-scope': [
    { paragraph: 'intro', label: 'complete endoscopy tower', href: '/medical-equipment/endoscopy/systems' },
    { paragraph: 'Define evidence and handover', label: 'condition and service information', href: evidence },
    { paragraph: 'Define evidence and handover', label: 'reusable-device reprocessing', href: primarySources.reprocessing.href },
  ],
  'replacement-component-enquiry': [
    { paragraph: 'intro', label: 'one part of an endoscopy system', href: '/medical-equipment/endoscopy/components' },
    { paragraph: 'Describe the installed combination', label: 'clear nameplate photographs', href: photos },
  ],
  'monitor-configuration-checklist': [
    { paragraph: 'intro', label: 'patient monitor', href: '/medical-equipment/patient-monitors' },
    { paragraph: 'List mounting and power requirements', label: 'mounting, power and accessory scope', href: guide('equipment-guides/patient-monitoring/monitor-accessory-comparison') },
    { paragraph: 'Review standalone and connected operation', label: 'proposed arrangement', href: integrationBrief },
  ],
  'monitor-accessory-comparison': [
    { paragraph: 'intro', label: 'monitor offer', href: '/medical-equipment/patient-monitors' },
    { paragraph: 'Identify facility-supplied items', label: 'existing sensors, cables or mounts', href: guide('equipment-guides/patient-monitoring/monitor-configuration-checklist') },
    { paragraph: 'Carry the schedule into the handover', label: 'packing and arrival checks', href: shipment },
  ],
  'used-equipment-evidence': [
    { paragraph: 'intro', label: 'used medical equipment listing', href: '/medical-equipment/used' },
    { paragraph: 'Establish identity and configuration', label: 'current photographs', href: photos },
  ],
  'used-and-refurbished-offers': [
    { paragraph: 'intro', label: 'pre-owned system', href: '/medical-equipment/used' },
    { paragraph: 'Ask for the work scope', label: 'documentation identifies the particular unit', href: evidence },
    { paragraph: 'Compare what the buyer will receive', label: 'commercial terms', href: comparison },
  ],
  'compare-equipment-quotations': [
    { paragraph: 'intro', label: 'shared specification', href: revisions },
    { paragraph: 'Match the evidence to the particular equipment', label: 'current photographs', href: photos },
    { paragraph: 'Separate the equipment price from the surrounding work', label: 'named handover location', href: receiving },
    { paragraph: 'Start with one version of the requirement', label: 'procurement process resource guide', href: primarySources.procurement.href },
  ],
  'equipment-shipping-handover': [
    { paragraph: 'Confirm the shipment contents', label: 'accepted equipment and accessory schedule', href: comparison },
    { paragraph: 'Agree the transport and receiving scope', label: 'unloading, building access, movement within the facility', href: receiving },
  ],
  'medical-integration-brief': [
    { paragraph: 'intro', label: 'integration enquiry', href: '/services/medical-integration-services' },
    { paragraph: 'Define test cases and ownership', label: 'configuration, issue resolution and final records', href: connectedHandover },
    { paragraph: 'Identify the evidence and dependencies', label: 'DICOM conformance statements', href: primarySources.dicom.href },
  ],
  'connected-equipment-handover': [
    { paragraph: 'intro', label: 'connected equipment project', href: '/services/medical-integration-services' },
    { paragraph: 'Record acceptance and unresolved items', label: 'agreed test cases', href: integrationBrief },
  ],
  'medical-equipment-photo-checklist': [
    { paragraph: 'Turn the photo pack into a clearer enquiry', label: 'requested equipment category', href: '/medical-equipment' },
    { paragraph: 'Turn the photo pack into a clearer enquiry', label: 'commercial scope', href: comparison },
    { paragraph: 'Turn the photo pack into a clearer enquiry', label: 'technical suitability and acceptance', href: evidence },
  ],
  'receiving-site-readiness': [
    { paragraph: 'Name the actual handover point', label: 'accepted quotation', href: comparison },
    { paragraph: 'Review the route using packed dimensions', label: 'package dimensions, weights and number of pieces', href: shipment },
  ],
  'equipment-configuration-revision-log': [
    { paragraph: 'Keep the next enquiry easier to manage', label: 'quotation comparison guide', href: comparison },
    { paragraph: 'Keep the next enquiry easier to manage', label: 'photo checklist', href: photos },
    { paragraph: 'Keep the next enquiry easier to manage', label: 'receiving-site guide', href: receiving },
  ],
};

export const articleReferencePlans: Record<string, ArticleReference[]> = {
  'endoscopy-tower-scope': [primarySources.reprocessing],
  'compare-equipment-quotations': [primarySources.procurement],
  'medical-integration-brief': [primarySources.dicom],
};

export function articleLinks(slug: string, paragraph?: string) {
  return (articleLinkPlans[slug] || []).filter(link => paragraph === undefined || link.paragraph === paragraph);
}
export function articleReferences(slug: string) { return articleReferencePlans[slug] || []; }
export function safeEditorialHref(href: string) {
  if (/[\s\\\u0000-\u001f]/.test(href)) return false;
  if (href.startsWith('/') && !href.startsWith('//')) return true;
  try { const url = new URL(href); return url.protocol === 'https:' && !url.username && !url.password; } catch { return false; }
}

export function linkedTextParts(text: string, links: ContentLink[]) {
  const ranges = links.filter(link => link.label && safeEditorialHref(link.href)).map(link => ({ ...link, start: text.indexOf(link.label) })).filter(link => link.start >= 0).sort((a, b) => a.start - b.start);
  const parts: { text: string; href?: string }[] = [];
  let cursor = 0;
  for (const link of ranges) {
    if (link.start < cursor) continue;
    if (link.start > cursor) parts.push({ text: text.slice(cursor, link.start) });
    parts.push({ text: link.label, href: link.href });
    cursor = link.start + link.label.length;
  }
  if (cursor < text.length) parts.push({ text: text.slice(cursor) });
  return parts;
}
