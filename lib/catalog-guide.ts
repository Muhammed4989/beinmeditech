import type { SeoCollection } from './catalog';
import { filterLabels, type FilterState } from './catalog-filters';
import { equipmentCategories, equipmentSubcategories } from './equipment-taxonomy';

type GuideSection = { title: string; paragraphs: string[] };
export type CatalogGuide = { title: string; introduction: string; sections: GuideSection[] };

// Authored buying guidance, composed from validated selections on the server.
// These are procurement checklists, not claims about inventory or clinical suitability.
const categoryGuides: Record<string, GuideSection> = {
  ultrasound: {
    title: 'Comparing ultrasound configurations',
    paragraphs: [
      'Start an ultrasound enquiry with the examinations your department wants to support. Ask the clinical team to list the required transducers and imaging functions, then have the proposed configuration checked against that list. A console photograph or product family name cannot establish which options are installed. Request the exact probe identifiers, software version and available option records for the offered unit. Keep required functions separate from desirable extras, so a lower price does not hide a missing part of the package.',
      'Treat the probes as individual assets within the quotation. Record the model, quantity, available condition evidence and any accessories supplied with each one. Ask a qualified technical reviewer what inspection records are appropriate and whether additional assessment is needed before acceptance. Do not assume that a probe shown beside a system is included, or that another probe from the same manufacturer will work with it. Compatibility should be checked for the specific console and software combination, not inferred from branding.',
      'Describe the working environment as well as the imaging requirement. Include available space, how the system will move between rooms, reporting needs and any connection to existing systems. Ask who will configure the equipment and what support is included after delivery. When comparing two ultrasound offers, place the console, probes, installed options, accessories and service scope side by side. This creates a useful comparison even when the manufacture dates or asking prices differ, and makes unanswered questions visible before a purchase decision.',
    ],
  },
  endoscopy: {
    title: 'Defining an endoscopy package',
    paragraphs: [
      'An endoscopy enquiry should identify whether you need a complete configuration or an individual component for an existing setup. List the processor, light source, display, scopes and supporting equipment separately, with model identifiers wherever they are known. Ask your technical team to review the proposed combination against the relevant manufacturer documentation. A shared brand name or similar appearance is not a compatibility check. Specify which equipment is already owned by the facility and which items the supplier is expected to provide.',
      'For each scope or component, request unit-specific identification and the available condition and service records. Photographs can help establish what is being offered, but they do not replace a technical assessment. Ask the receiving team what evidence it needs before accepting the items and record any outstanding checks in the quotation. Preparation, handling and reprocessing questions should be reviewed by qualified staff using the applicable instructions. Avoid treating a broad description such as excellent condition as a documented account of the work performed.',
      'Compare the complete working package rather than the price of the most visible component. Cables, connectors, trolley arrangements and supporting accessories should have a clear included, optional or buyer-supplied status. Identify who is responsible for installation, configuration and handover, and whether those services have separate charges. If a seller proposes an alternative component, ask for a revised equipment schedule and technical review before agreeing. A consistent component list makes competing offers easier to compare and helps prevent gaps between the order and the delivered package.',
    ],
  },
  'patient-monitors': {
    title: 'Specifying patient monitoring equipment',
    paragraphs: [
      'Begin a patient monitoring request with the measurements, patient groups and working environment identified by the clinical team. Then ask for a configuration that names the monitor, relevant modules and supporting accessories individually. The main display alone does not describe the complete package. Confirm the sensors, cables, cuffs, mounts and power accessories included in the offer, and identify items that the facility will supply itself. Do not infer installed measurement options from a model name or a photograph of a demonstration screen.',
      'If the monitor must connect to an existing installation, involve the biomedical engineering and IT teams early. Provide the identifiers of the equipment already in use and describe the connection that the purchase depends on. Ask for written confirmation of the proposed interface, configuration work and any required options. The enquiry should distinguish standalone use from a connected workflow rather than assuming the same package supports both. Record who will review the documentation and who is responsible for commissioning at the receiving facility.',
      'Assess mobility, mounting and power arrangements in the context of the intended location. Where a battery is relevant, request available information about the supplied battery and how it was assessed rather than assuming runtime from a catalogue description. Ask what checks and records will accompany the actual unit. Compare offers using the same measurement and accessory schedule, with support, installation and acceptance responsibilities shown separately. This helps the buyer identify missing items and makes the final equipment price more meaningful than a comparison of display units alone.',
    ],
  },
  general: {
    title: 'Choose an equipment category before comparing offers',
    paragraphs: [
      'Medical equipment enquiries work best when the intended workflow comes before the model shortlist. Describe what the facility needs to accomplish, which department will use the equipment and what must connect to existing systems. Ask clinical and technical colleagues to agree the essential requirements. A product title can identify a family of equipment, but it does not establish the configuration of an individual unit. Keep a written schedule of necessary functions, accessories and services so that each quotation answers the same request.',
      'The catalogue separates ultrasound, endoscopy and patient monitoring because each requires a different comparison. Ultrasound enquiries need a clear console and probe schedule. Endoscopy enquiries need the components and their intended combination identified. Patient monitoring enquiries need the requested measurements, modules and accessories recorded. Selecting a subcategory can narrow this further to a particular equipment format or purchasing need. If you are comparing departments, maintain a separate requirement list for each one rather than evaluating unrelated systems using a single headline price.',
      'Use the filters to narrow your research, not as a substitute for checking the offered equipment. A manufacturer selection limits the names under consideration; a condition selection describes the type of offer you want to evaluate. Neither confirms availability, technical suitability or a particular service scope. Once you have a shortlist, request identification and documentation for the actual units being proposed. Keep unresolved points visible and ask for clarification before treating an example, a model guide or an initial price as a complete purchase offer.',
    ],
  },
};

const conditionGuides: Record<string, GuideSection> = {
  used: {
    title: 'What to check when buying used equipment',
    paragraphs: [
      'For used equipment, request the manufacture date where available, unit identifiers, current photographs and the available service history. Separate cosmetic observations from documented functional assessment. A clean exterior does not establish the condition of every component, and an older manufacture date does not describe the work carried out since then. Ask the supplier to identify known faults, missing items and outstanding checks in writing. Keep the assessment date alongside the record so the receiving team understands what evidence it is reviewing.',
      'Agree the condition and acceptance scope for the specific used unit before comparing it with another offer. Record any repairs included before dispatch and which checks remain the buyer’s responsibility. Ask whether warranty or after-sales support is offered and request its actual terms; neither should be assumed from the word used. If evidence is unavailable, mark that point as unconfirmed instead of filling the gap with a marketing description.',
    ],
  },
  refurbished: {
    title: 'Ask what refurbishment actually included',
    paragraphs: [
      'For refurbished equipment, ask the seller to describe the work completed on the actual unit. Request a dated record identifying the assessment, repairs, replacements or other preparation included, together with the party responsible. The label refurbished does not tell a buyer which components were addressed or what remains outside the scope. Keep cosmetic work, functional checks and component replacement as separate entries. Ask whether the records relate to the complete package or only to the main unit shown in the listing.',
      'Request the proposed acceptance process and any warranty terms in writing. Clarify who handles a reported problem, where support is provided and which costs or exclusions apply. When comparing refurbished and used offers, compare their evidence and service commitments rather than assuming the condition label establishes a higher standard. Outstanding technical questions still need review, and required accessories or installed options must be confirmed independently of the refurbishment description.',
    ],
  },
  new: {
    title: 'Confirm the scope of a new-equipment offer',
    paragraphs: [
      'For equipment described as new, request the exact model, offered configuration, production information where available and the documentation supplied at handover. Ask the seller to clarify the equipment’s status, packaging and supply route rather than relying on a photograph of a sealed box. Confirm every accessory and installed option in the equipment schedule. New does not automatically mean that all available features are included, that a specific connection is supported or that setup at the buyer’s facility forms part of the price.',
      'Ask who provides the warranty and support, when coverage begins and what conditions apply. Identify any installation, configuration or training services required and whether they are included or quoted separately. Compare lead times using written confirmation for the proposed configuration. A general catalogue entry can help define your request, but the purchase decision should use the seller’s confirmed offer and the receiving team’s review of the supporting documentation.',
    ],
  },
  unspecified: {
    title: 'Decide how condition will be evaluated',
    paragraphs: [
      'If you have not selected a condition, ask for used, refurbished or new options to be identified clearly in each offer. These labels are starting points for questions, not a replacement for evidence. For a used unit, ask about identification, available history and outstanding checks. For a refurbished unit, request the documented scope of work. For an item offered as new, clarify its supply status, included configuration and support terms. Keep condition and configuration separate so they can both be compared consistently.',
      'Agree which records the receiving team needs and which unresolved points would prevent acceptance. Record known faults, exclusions and optional services explicitly. Do not assume a warranty, a particular assessment standard or installation support from the condition label alone. A useful shortlist shows what is confirmed, what is not yet established and which party will address each remaining question before the order proceeds.',
    ],
  },
};

const brandGuides: Record<string, GuideSection> = {
  siemens: {
    title: 'Reviewing Siemens Healthineers equipment',
    paragraphs: ['For a Siemens Healthineers selection, record the exact platform and model rather than treating the manufacturer name as the specification. If your shortlist includes an ACUSON system, ask for the offered console identifier, probe models and installed software information. Have the intended combination checked against documentation for that particular platform. Do not assume that accessories or options transfer between systems sharing a family name. Request unit-specific records and the seller’s support scope. A manufacturer filter is a research aid and does not establish that a seller is manufacturer-authorized or that a particular configuration is currently available.'],
  },
  philips: {
    title: 'Reviewing Philips equipment',
    paragraphs: ['For a Philips selection, identify the equipment family and the precise model before comparing quotations. An ultrasound package and a patient monitoring package need different accessory and configuration schedules even when they carry the same manufacturer name. Ask the supplier to list the offered modules, probes or other relevant items and have the combination reviewed for the intended setup. Keep software and connectivity questions tied to that specific unit. The manufacturer filter does not confirm installed options, warranty coverage, authorized seller status or availability; those details should be established separately in the written offer.'],
  },
  olympus: {
    title: 'Reviewing Olympus equipment',
    paragraphs: ['For an Olympus selection, identify the full model names and the platform generation of every component being considered. In an endoscopy enquiry, ask for a separate schedule covering the processor, light source, scopes and supporting items rather than a single tower description. Request confirmation of the proposed combination and the available records for each actual component. An equipment family name does not resolve compatibility, condition or included accessories. If you are replacing one item, provide details of the installed setup for review. Manufacturer selection alone does not confirm stock, seller authorization, support coverage or suitability.'],
  },
  'ge-healthcare': {
    title: 'Reviewing GE HealthCare equipment',
    paragraphs: ['For a GE HealthCare selection, make the enquiry specific to the offered platform, model and configuration. Record the accessories and software options your department requires and ask the supplier to distinguish confirmed items from optional additions. If probes are involved, list their exact identifiers and request a compatibility review for the proposed console. A broad product family can help organize a search but cannot establish what is installed on an individual unit. Confirm the available documentation, preparation and support scope separately. The manufacturer filter is not evidence of current stock, manufacturer authorization or a warranty commitment.'],
  },
  demo: {
    title: 'Understanding the demonstration manufacturer filter',
    paragraphs: ['Demo Manufacturer identifies fictional records used to test this website. These entries let you check filtering, compare the layout of equipment cards and explore the information a real listing would need. Their names, configurations, years and prices are not statements about equipment available to buy. Do not use a demonstration entry as a commercial quotation or as technical evidence. For a real enquiry, provide the equipment type and required configuration independently, and request confirmation of the actual manufacturer, unit identity, condition and terms. Demonstration records remain separate from confirmed inventory and commercial offers.'],
  },
  unspecified: {
    title: 'Compare manufacturers through the actual configuration',
    paragraphs: ['If you are considering several manufacturers, give each proposed package the same requirement schedule. Ask for exact model names and the documentation needed to review accessories, installed functions and connections. Similar descriptions across brands do not establish that parts are interchangeable or that a configuration meets your requirements. Have any proposed alternative reviewed by the appropriate technical team before accepting a substitution. Keep service scope and support contacts alongside the equipment details. Manufacturer preference can help narrow research, but the final comparison should rely on the identified equipment and written terms rather than the badge alone.'],
  },
};

const quotationGuide: GuideSection = {
  title: 'Compare the quoted package, not just the headline price',
  paragraphs: [
    'Request an itemized quotation showing the equipment, included accessories and optional services as separate lines. Ask which currency is used and which charges are included or excluded. Keep packing, transport, installation and training distinct so that two offers can be compared on the same basis. If a delivered price is requested, identify the delivery point and ask the supplier to state the delivery scope explicitly. A price shown beside an example does not establish these terms, and a low equipment price may describe a narrower package than another offer.',
    'Record the quotation date, validity period and expected availability confirmation. Ask which events the payment and delivery schedule depends on, especially when equipment must be sourced or prepared. Any substitution should be documented with updated identifiers and configuration details. Keep a list of open questions beside the commercial comparison instead of assuming that missing information is included in the price. This creates a clearer basis for discussion with the supplier and for internal purchasing approval.',
  ],
};

const handoverGuide: GuideSection = {
  title: 'Prepare a clear enquiry and handover plan',
  paragraphs: [
    'Send the required equipment type, preferred model if known, condition preference, quantity and essential accessories with your enquiry. Add the intended workflow, delivery location and requested timing, and identify the person who will review technical details. If the facility has an existing installation, include its relevant identifiers without sharing patient information. Ask the supplier to respond against the same checklist, marking confirmed points and questions that still need investigation. Short, concrete requirements are more useful than assuming that a general product description covers everything.',
    'Before agreeing an order, identify the documentation, receiving checks and support contacts that the buyer expects. Record responsibilities for packing, transport coordination, installation and acceptance without treating any of those services as automatic. Your qualified receiving team should decide what review is appropriate for the intended use and applicable requirements. This catalogue supports research and quotation preparation; it does not certify an individual unit or establish readiness for clinical use. Demonstration listings on this site are fictional examples, while real equipment identity, availability, configuration and commercial terms require a separate confirmed quotation.',
  ],
};

export function catalogGuide(page: SeoCollection, filters: FilterState): CatalogGuide {
  const labels = filterLabels(filters);
  const isModel = page.segments.at(-1) === 'acuson-nx3';
  const subject = isModel ? ['Siemens ACUSON NX3', ...labels.filter((label) => label !== 'Siemens Healthineers')].join(' · ') : labels.join(' · ') || 'Medical equipment';
  // Subcategory-only URLs are valid too: include their parent-specific guidance.
  const categories = [...new Set([...filters.category, ...equipmentSubcategories.filter((sub) => filters.subcategory.includes(sub.value)).map((sub) => sub.category)])];
  const sections: GuideSection[] = (categories.length ? categories : ['general']).map((key) => categoryGuides[key]);
  if (categories.length > 1) sections.unshift({ title: 'Comparing more than one equipment type', paragraphs: [`Your selection includes ${categories.map((key) => equipmentCategories.find((category) => category.value === key)?.label).join(', ')}. Keep a separate technical requirement list for each equipment type. These categories serve different purchasing needs, so their headline prices are not substitutes for a like-for-like configuration comparison. The sections below explain the checks relevant to each selected category.`] });
  sections.push(...equipmentSubcategories.filter((sub) => filters.subcategory.includes(sub.value)).map((sub) => ({ title: sub.label + ': configuration priorities', paragraphs: [sub.intro, ...sub.sections.map((section) => section.body)] })));
  if (isModel) sections.push({ title: 'ACUSON NX3: define the specific unit', paragraphs: ['This model guide is not an inventory confirmation. For an ACUSON NX3 enquiry, ask for the offered year, serial identification, console configuration, exact probe list and installed options. Have the proposed package reviewed for your department’s requirements. Do not apply the details or price of a demonstration listing to another unit sharing the model name. Request a written response for any required feature that has not yet been confirmed.'] });
  sections.push(...(filters.condition.length ? filters.condition : ['unspecified']).map((key) => conditionGuides[key]));
  sections.push(...(filters.brand.length ? filters.brand : ['unspecified']).map((key) => brandGuides[key]));
  sections.push(quotationGuide, handoverGuide);
  return {
    title: subject + ': buying guide',
    introduction: `Explore ${subject.toLowerCase().startsWith('medical equipment') ? 'medical equipment' : subject} with a clear view of the configuration, condition and documentation to request. This guide follows your selected equipment filters and explains how to compare the actual package, identify missing information and prepare a useful enquiry. Use it alongside the results below, not as a statement of stock or technical approval. An individual unit’s specifications, included items and price need written confirmation before a purchasing decision.`,
    sections,
  };
}

export function catalogGuideText(guide: CatalogGuide) {
  return [guide.introduction, ...guide.sections.flatMap((section) => section.paragraphs)].join('\n\n');
}
