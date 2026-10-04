import type { ContentLink, ContentSection, Breadcrumb } from './content';

export type BlogTopic = {
  segments: string[];
  name: string;
  title: string;
  description: string;
  intro: string;
  sections: ContentSection[];
  equipment: ContentLink[];
};
export type BlogArticle = {
  publishedAt?: string;
  updatedAt?: string;
  cover: { src: string; alt: string };
  topic: string[];
  slug: string;
  title: string;
  description: string;
  intro: string;
  sections: ContentSection[];
  checklist: string[];
  equipment: ContentLink[];
};

export const BLOG_UPDATED = '2026-10-02';
export function articlePublishedDate(article: BlogArticle) { return article.publishedAt || BLOG_UPDATED; }
export function articleUpdatedDate(article: BlogArticle) { return article.updatedAt || articlePublishedDate(article); }
export function formatBlogDate(date: string) {
  return new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(date + 'T00:00:00Z'));
}
export function blogTopicUpdatedDate(segments: string[] = []) {
  return topicArticles(segments).reduce((latest, article) => articleUpdatedDate(article) > latest ? articleUpdatedDate(article) : latest, BLOG_UPDATED);
}

/** Every article owns a unique editorial image; no shared category fallback. */
export function blogCover(article: BlogArticle) {
  return article.cover;
}
const ultrasound = { label: 'Ultrasound systems', href: '/medical-equipment/ultrasound' };
const endoscopy = { label: 'Endoscopy equipment', href: '/medical-equipment/endoscopy' };
const monitoring = { label: 'Patient monitors', href: '/medical-equipment/patient-monitors' };
const used = { label: 'Used medical equipment', href: '/medical-equipment/used' };
const integration = { label: 'Medical integration services', href: '/services/medical-integration-services' };

export const blogTopics: BlogTopic[] = [
  {
    segments: [], name: 'Blog', title: 'Medical Equipment Insights & Buying Guides',
    description: 'Practical guides to medical equipment, purchasing and healthcare IT. Explore clear buying checklists, configuration questions and handover planning.',
    intro: 'Better equipment decisions start with a clear specification. Explore our practical library for hospitals, clinics and distributors: understand the system, compare the complete offer and plan how it will fit into your facility.',
    sections: [
      { title: 'Start with the decision you need to make', body: 'The equipment guides explain what belongs in a configuration request. Procurement articles focus on condition, scope and commercial comparison. Healthcare IT articles cover the information needed to connect a system to an existing workflow. Each topic leads to narrower guides, so you can start broadly and follow the question that matters to your purchase.' },
      { title: 'Turn your reading into a useful enquiry', body: 'Record the intended use, required accessories, existing equipment and any unresolved questions as you read. Share these with the people responsible for clinical selection, technical assessment and purchasing. A useful enquiry separates confirmed requirements from preferences and makes it clear which details the supplier still needs to verify.' },
    ], equipment: [ultrasound, endoscopy, monitoring],
  },
  {
    segments: ['equipment-guides'], name: 'Equipment Guides', title: 'Medical Equipment Selection Guides',
    description: 'Explore ultrasound, endoscopy and patient-monitoring buying guides. Understand configurations, accessories and the questions to ask suppliers.',
    intro: 'A model name is only the beginning of an equipment specification. Explore each system family to understand the configuration, components and supporting evidence that make quotations comparable.',
    sections: [
      { title: 'Define the complete working system', body: 'A main unit may need probes, scopes, measurement modules, cables, mounts or software to perform the requested work. List these separately and ask whether they are supplied, optional or already owned by your facility. The equipment topics below focus on these boundaries so missing components can be identified before ordering.' },
      { title: 'Bring the right people into the comparison', body: 'Clinical users define the examinations or measurements they require. Biomedical engineering reviews condition and serviceability. IT reviews connectivity where relevant, and purchasing records the agreed commercial scope. Keep their questions together in one specification so a change made by one team is visible to the others.' },
    ], equipment: [ultrasound, endoscopy, monitoring],
  },
  {
    segments: ['equipment-guides', 'ultrasound'], name: 'Ultrasound', title: 'Ultrasound Buying & Configuration Guides',
    description: 'Prepare an ultrasound enquiry with a clear probe list, installed-option requirements and questions about the exact offered system.',
    intro: 'An ultrasound purchase brings together the console, transducers, installed options and reporting workflow. These guides help you describe the package and ask for evidence tied to the actual offered unit.',
    sections: [
      { title: 'Compare packages by examination needs', body: 'Ask the clinical team to describe the examinations the system will support, then request a written list of suitable transducers and options from the supplier. Do not assume that every unit with the same model name has the same software or probe package. Record alternatives separately so they can be reviewed before they change the purchase scope.' },
      { title: 'Check the accessory and support boundary', body: 'Include probe holders, printers if needed, export functions, electrical requirements and the intended service arrangements in the enquiry. Photographs help identify the offered equipment, while a unit-specific configuration list and assessment record answer different questions. Ask who will handle unresolved issues discovered before handover.' },
    ], equipment: [ultrasound],
  },
  {
    segments: ['equipment-guides', 'endoscopy'], name: 'Endoscopy', title: 'Endoscopy System & Component Buying Guides',
    description: 'Plan an endoscopy tower or component purchase with a written scope, compatibility review and a complete handover record.',
    intro: 'Endoscopy quotations can cover a complete tower or just one component. Establish what is included and how the proposed processor, light source, display and scopes relate to the existing system.',
    sections: [
      { title: 'Separate a complete tower from a component offer', body: 'Use a line-item list for the processor, light source, display, trolley, scopes and accessories. A photograph of an assembled tower does not establish that every visible item is included. Ask the supplier to identify exact models and serial numbers when available, and record any accessories that the buyer is expected to supply.' },
      { title: 'Keep technical and handover evidence together', body: 'Ask the responsible technical team to review compatibility using the relevant manufacturer documentation. Condition, service records and the required preparation for handover should be documented separately. These guides focus on procurement questions; handling and reprocessing must follow the applicable manufacturer instructions and your facility procedures.' },
    ], equipment: [endoscopy],
  },
  {
    segments: ['equipment-guides', 'patient-monitoring'], name: 'Patient Monitoring', title: 'Patient Monitor Buying & Accessory Guides',
    description: 'Specify patient monitors by measurements, modules, accessories and connectivity before comparing offers for your facility.',
    intro: 'A monitor purchase is a configuration decision. The display, measurement modules, sensors, mounting and network requirements need to be considered as one package.',
    sections: [
      { title: 'Describe the intended monitoring environment', body: 'Identify the department, patient population and measurements requested by the clinical team. Distinguish fixed bedside use from movement between locations. This gives the supplier context for proposing the relevant accessories, power arrangements and mounts without assuming that one configuration suits every department.' },
      { title: 'Identify existing-system dependencies', body: 'Record the central station, network and accessories already in use. Ask which parts of the proposed package need technical confirmation, additional licenses or separate installation work. A monitor can appear complete as a standalone item while leaving unanswered questions about how it will be used in the facility.' },
    ], equipment: [monitoring],
  },
  {
    segments: ['procurement'], name: 'Procurement', title: 'Medical Equipment Procurement Guides',
    description: 'Prepare clearer medical equipment RFQs, assess used-system offers and compare the full scope of purchase and delivery.',
    intro: 'Good procurement connects a technical requirement to a clear commercial agreement. Explore condition assessment, quotation comparison and shipment planning before committing to an order.',
    sections: [
      { title: 'Make assumptions visible before ordering', body: 'A quotation should state what is included, what is excluded and which details remain subject to confirmation. Keep the technical specification and commercial offer aligned as questions are resolved. If an alternative model or accessory is proposed, record the change and ask the responsible reviewer to assess it before acceptance.' },
      { title: 'Compare the total agreed scope', body: 'Equipment price is only one part of the purchase. Packing, freight, inspection, installation, accessories and support may be included or charged separately. Compare the same scope across suppliers and document the handover point, acceptance process and responsibility for each outstanding activity.' },
    ], equipment: [used],
  },
  {
    segments: ['procurement', 'used-equipment'], name: 'Used Equipment', title: 'Used Medical Equipment Buying Guides',
    description: 'Assess a pre-owned medical equipment offer with unit-specific identification, condition evidence and documented refurbishment scope.',
    intro: 'A used-system offer needs evidence about the particular unit. These guides explain what to request and how to distinguish a condition label from a documented assessment.',
    sections: [
      { title: 'Match the records to the offered unit', body: 'Record the model, serial number, production year where confirmed, and included accessories. Ask that photographs, service records and assessment reports identify the same equipment. When information is unavailable, make that visible in the comparison rather than treating an unanswered question as a positive finding.' },
      { title: 'Agree the work still needed', body: 'Clarify whether any preparation, replacement parts, testing or installation remains to be completed. Ask who performs that work and what records the buyer will receive. Product suitability and destination requirements need their own review before shipment; a condition description alone does not establish either.' },
    ], equipment: [used],
  },
  {
    segments: ['procurement', 'quotations-delivery'], name: 'Quotations & Delivery', title: 'Medical Equipment Quotations & Delivery Planning',
    description: 'Build comparable equipment quotations and plan packing, shipment handover and arrival checks around a clearly agreed scope.',
    intro: 'The most useful quotation explains both the equipment and the work around it. Prepare an enquiry that makes the configuration, delivery scope and open questions easy to review.',
    sections: [
      { title: 'A quotation needs more than a headline price', body: 'State quantity, configuration, currency, validity, expected readiness and the services requested. Separate provisional costs from fixed commitments. If a supplier offers a delivered price, ask for the named destination and a written explanation of the included transport and local responsibilities.' },
      { title: 'Plan the handover before packing begins', body: 'Agree the item list, identifiers, packing requirements, collection arrangements and documents needed by the receiving team. Confirm site access, unloading and installation responsibilities in advance. This connects the commercial agreement to a practical arrival plan rather than leaving those tasks until the shipment is in transit.' },
    ], equipment: [used, { label: 'Request a quotation', href: '/request-quote' }],
  },
  {
    segments: ['healthcare-it'], name: 'Healthcare IT', title: 'Healthcare IT & Equipment Integration Guides',
    description: 'Prepare healthcare technology projects with clear workflow requirements, interface scope and equipment handover plans.',
    intro: 'Medical equipment often needs to fit into an existing information workflow. These guides help purchasing and technical teams identify the interfaces and responsibilities before implementation.',
    sections: [
      { title: 'Start from the workflow', body: 'Describe where information comes from, who reviews it and where results need to go. Keep the current process and proposed changes visible to both clinical and IT teams. A product feature list is useful only when the people responsible for integration can relate it to the actual systems and work at the facility.' },
      { title: 'Turn compatibility questions into testable scope', body: 'List each connection, relevant system version, responsible party and expected outcome. Agree what evidence will demonstrate that the workflow is working and how issues will be handled after handover. Document dependencies such as licenses, network access and supplier assistance before setting the implementation schedule.' },
    ], equipment: [integration],
  },
  {
    segments: ['healthcare-it', 'integration'], name: 'Integration Planning', title: 'Medical Equipment Integration Planning',
    description: 'Prepare an integration brief and equipment handover checklist with named interfaces, responsibilities and acceptance criteria.',
    intro: 'A useful integration brief describes the required exchange of information and the teams involved. Start with existing systems, then define configuration, testing and handover responsibilities.',
    sections: [
      { title: 'Describe each interface independently', body: 'For every connection, name the sending system, receiving system and information being exchanged. Record the relevant versions and documentation available from each supplier. Ask which capabilities are installed, which require extra configuration and which are outside the agreed scope.' },
      { title: 'Plan a controlled handover', body: 'Agree a test environment, the permitted test data and the people authorized to accept the result. Identify how configuration records, user guidance and support contacts will be transferred to the facility. Procurement should include this work explicitly when a purchase depends on a connected workflow.' },
    ], equipment: [integration, ultrasound, monitoring],
  },
];

export const blogArticles: BlogArticle[] = [
  {
    topic: ['equipment-guides', 'ultrasound'], slug: 'ultrasound-configuration-checklist',
    cover: { src: '/images/blog/articles/ultrasound-configuration-checklist.webp', alt: "AI-generated editorial scene of an empty ultrasound examination room prepared for equipment planning" },
    title: 'What to Include in an Ultrasound Equipment Enquiry',
    description: 'Build an ultrasound RFQ around examinations, probes, installed options and the evidence needed to compare complete offers.',
    intro: 'An ultrasound enquiry is most useful when it describes the working package your team needs. Starting with a model and a budget can leave probes, options and workflow requirements unresolved. Use a short specification that separates essential features from preferences and gives suppliers a consistent basis for responding.',
    sections: [
      { title: 'Describe the intended examinations', body: 'Ask the clinical team to name the examinations and workflow the system will support. Record whether the equipment will serve one department or move between users. Where a particular imaging option is required, name it explicitly and ask the supplier to confirm availability on the offered unit. Avoid treating a general product brochure as evidence of the configuration being sold.' },
      { title: 'List probes and options separately', body: 'Request exact probe models, quantities and condition information. Record whether probes are included, optional or already owned by the buyer. Ask the supplier to identify the installed software and any relevant option or license dependencies. An alternative probe should remain an open technical question until the responsible user has reviewed it.' },
      { title: 'Request evidence for the offered package', body: 'Ask for equipment identification, current photographs, a configuration list and available assessment records. Keep unanswered questions in the quotation comparison. If the unit changes during sourcing, request an updated package description rather than assuming the earlier evidence applies to the replacement.' },
      { title: 'Agree the acceptance and support scope', body: 'Document who checks the package before shipment and what happens at delivery. Include installation, user familiarization and service support only where they have been agreed. The resulting offer should allow the purchasing team to identify the exact equipment, its included components and the work still needed before facility acceptance.' },
    ], checklist: ['Intended examinations and required options', 'Exact probe models, quantities and included accessories', 'Unit identification and available assessment records', 'Delivery, acceptance and support responsibilities'], equipment: [ultrasound],
  },
  {
    topic: ['equipment-guides', 'ultrasound'], slug: 'probe-package-comparison',
    cover: { src: '/images/blog/articles/probe-package-comparison.webp', alt: "AI-generated overhead scene of two ultrasound probe sets arranged in separate protective cases" },
    title: 'How to Compare Two Ultrasound Probe Packages',
    description: 'Compare ultrasound offers using probe identity, compatibility evidence, included quantities and condition records rather than probe count alone.',
    intro: 'Two offers that both include three probes can describe very different packages. Compare exact identities and the examinations they are intended to support, then connect each probe to the proposed console and its installed options.',
    sections: [
      { title: 'Create a line for every probe', body: 'Record the manufacturer code, quantity, identifier if available and intended role. Keep the required probe list beside the offered list so omissions and substitutions are obvious. A generic description such as linear or convex is a starting point for clarification, not a complete commercial specification.' },
      { title: 'Request compatibility confirmation', body: 'Ask the supplier to confirm the combination of console, software and transducer using the relevant product documentation. If your facility owns existing probes, provide their full identification rather than expecting compatibility from the manufacturer name alone. Record which party will resolve any outstanding technical question.' },
      { title: 'Compare the evidence and commercial terms', body: 'Ask what condition assessment information is available for each probe and whether replacement or additional work is included. Record exclusions and the agreed process if a discrepancy is found at acceptance. Compare the package only after those details have been made consistent across offers; a lower total may simply contain a different scope.' },
    ], checklist: ['Exact transducer codes', 'Console and software compatibility confirmation', 'Condition evidence for each included probe', 'Written treatment of substitutions and exclusions'], equipment: [ultrasound],
  },
  {
    topic: ['equipment-guides', 'endoscopy'], slug: 'endoscopy-tower-scope',
    cover: { src: '/images/blog/articles/endoscopy-tower-scope.webp', alt: "AI-generated editorial scene of an endoscopy package and separate components in a staging area" },
    title: 'What Is Included in an Endoscopy Tower Quotation?',
    description: 'Use a component-by-component scope to compare endoscopy tower offers and identify omitted scopes, displays, accessories or service work.',
    intro: 'The phrase complete endoscopy tower needs a written definition. A processor, light source, display and trolley may be pictured together while scopes or supporting accessories are priced separately. Establish the package boundary before comparing totals.',
    sections: [
      { title: 'Identify each component', body: 'Request separate lines for processor, light source, monitor, trolley, scopes and supporting accessories. Include model codes and quantity, with serial numbers where available. Ask the supplier to explain any difference between the photographs and the item list. The final order should refer to the agreed list rather than a general photograph.' },
      { title: 'Resolve compatibility questions', body: 'Send the identification of equipment already owned by the facility. Ask the responsible technical reviewer to check the proposed combination against the relevant manufacturer documentation. Record whether additional cables, adapters or configuration work are needed and who supplies them.' },
      { title: 'Define evidence and handover', body: 'Request the available condition and service information for the included components. Agree the preparation records and documents that accompany the shipment. The facility should follow the applicable manufacturer instructions and its own procedures for equipment handling and use; a commercial package description does not replace those instructions.' },
    ], checklist: ['Line-item tower and scope list', 'Exact component identification', 'Compatibility review for the complete combination', 'Documented handover and exclusions'], equipment: [endoscopy],
  },
  {
    topic: ['equipment-guides', 'endoscopy'], slug: 'replacement-component-enquiry',
    cover: { src: '/images/blog/articles/replacement-component-enquiry.webp', alt: "AI-generated close-up of a biomedical technician checking an endoscopy component connector" },
    title: 'Preparing an Enquiry for an Endoscopy Replacement Component',
    description: 'Identify the installed system, replacement component and evidence needed for a focused endoscopy sourcing enquiry.',
    intro: 'Replacing one part of an endoscopy system begins with identification of the existing equipment. A complete description helps the supplier distinguish an exact replacement from a proposed alternative and makes the technical review more focused.',
    sections: [
      { title: 'Describe the installed combination', body: 'Record the full model and available identifiers of the component being replaced and the systems connected to it. Add clear nameplate photographs and relevant documentation. Explain whether the requirement is for the same item or whether alternatives can be considered, and identify who approves those alternatives.' },
      { title: 'Separate the component from supporting work', body: 'Ask whether the offer includes necessary cables, accessories or configuration. If installation or assessment is requested, define its scope as a separate deliverable. This prevents a quote for a bare component from being compared with an offer that includes a larger service package.' },
      { title: 'Record the acceptance basis', body: 'Agree how identity, condition and compatibility will be checked before the transaction is completed. Retain the supplier responses alongside the final specification. If an offered model changes, update the technical review and purchase description together so the accepted component remains traceable to the evidence.' },
    ], checklist: ['Full installed-system identifiers', 'Exact replacement or permitted alternatives', 'Accessories and service scope', 'Named technical acceptance contact'], equipment: [endoscopy],
  },
  {
    topic: ['equipment-guides', 'patient-monitoring'], slug: 'monitor-configuration-checklist',
    cover: { src: '/images/blog/articles/monitor-configuration-checklist.webp', alt: "AI-generated architectural view of an empty monitored hospital room prepared for a new installation" },
    title: 'Patient Monitor Configuration: A Buyer’s Checklist',
    description: 'Prepare a patient-monitor specification covering required measurements, modules, accessories, mounting and existing-system connections.',
    intro: 'A patient monitor should be compared as a configured package. The display name alone does not show which measurement modules, accessories or connections are included. A clear enquiry makes those choices visible to the supplier and reviewing team.',
    sections: [
      { title: 'Specify measurements and patient population', body: 'Ask the clinical team to identify the required measurements and intended patient groups. Pass those requirements to the supplier without substituting a generic accessory set. Record which parts are included and which depend on a particular module or configuration that still needs confirmation.' },
      { title: 'List mounting and power requirements', body: 'Describe the intended installation and whether the equipment will move between locations. Request the appropriate mounting, power and accessory scope for technical review. Existing mounts or accessories should be identified by their actual codes rather than described only by appearance.' },
      { title: 'Review standalone and connected operation', body: 'State whether a central station or other system connection is required. Ask the facility IT and biomedical teams to review the proposed arrangement, relevant versions and any additional licenses. Keep the acceptance criteria and responsibilities in the order so connectivity is a defined part of the purchase when it is required.' },
    ], checklist: ['Required measurements and patient groups', 'Modules, sensors, cuffs and cables', 'Mounting and power scope', 'Connectivity and technical acceptance'], equipment: [monitoring],
  },
  {
    topic: ['equipment-guides', 'patient-monitoring'], slug: 'monitor-accessory-comparison',
    cover: { src: '/images/blog/articles/monitor-accessory-comparison.webp', alt: "AI-generated flat-lay of monitoring cuffs, sensor clips and cables arranged on a service mat" },
    title: 'Comparing Patient Monitor Accessories Across Offers',
    description: 'Build a monitor accessory schedule that exposes missing cables, sensors, mounts and configuration assumptions before purchase.',
    intro: 'Accessories can change the value and completeness of a monitor offer. Prepare a schedule that records what is needed, what the supplier includes and what the facility will provide from its own inventory.',
    sections: [
      { title: 'Make the package measurable', body: 'For each accessory, record description, code where available, quantity and intended user group. Ask the supplier to identify any substitute and its supporting compatibility documentation. This creates a comparison that can be reviewed line by line instead of relying on the phrase standard accessories.' },
      { title: 'Identify facility-supplied items', body: 'If existing sensors, cables or mounts will be reused, supply their identifiers and ask the technical team to verify the proposed combination. Keep these items separate from the purchase list. Doing so avoids both paying twice for the same scope and assuming that an essential component will be supplied by someone else.' },
      { title: 'Carry the schedule into the handover', body: 'Use the accepted accessory list as the basis for packing and arrival checks. Agree how shortages, substitutions or discrepancies are recorded and resolved. Keep any consumable supply arrangement separate from the initial equipment package so ongoing purchasing expectations are clear.' },
    ], checklist: ['Accessory identity and quantity', 'Included versus facility-supplied items', 'Compatibility evidence for substitutes', 'Agreed packing and receipt checklist'], equipment: [monitoring],
  },
  {
    topic: ['procurement', 'used-equipment'], slug: 'used-equipment-evidence',
    cover: { src: '/images/blog/articles/used-equipment-evidence.webp', alt: "AI-generated scene of a technician photographing equipment identification for a condition record" },
    title: 'What Evidence to Request for Used Medical Equipment',
    description: 'Connect a used medical equipment offer to identifiers, condition records, service information and the exact included package.',
    intro: 'A used medical equipment listing is an invitation to investigate a particular unit. Ask for evidence that identifies that unit and explains its offered condition, configuration and outstanding work before relying on a headline price.',
    sections: [
      { title: 'Establish identity and configuration', body: 'Request the full model, serial number, confirmed production year and included components. Ask for current photographs that show identification and the package being offered. Where software or installed options matter, include them in the written specification and ask which details have been verified.' },
      { title: 'Understand the scope of the assessment', body: 'Ask what checks were carried out, by whom, when and against which stated criteria. A report should be tied to the equipment identifiers and identify limitations or unresolved findings. A statement that a device powers on is not a complete description of condition or readiness for the intended facility.' },
      { title: 'Agree what happens before shipment', body: 'Record any further assessment, preparation, replacement parts or documentation included in the offer. Confirm the destination requirements with the responsible importer before shipment. Ask the buyer’s technical team to establish its own acceptance needs and incorporate them into the purchase agreement where applicable.' },
    ], checklist: ['Unit and accessory identifiers', 'Configuration and current photographs', 'Assessment scope, date and limitations', 'Outstanding work and acceptance responsibilities'], equipment: [used],
  },
  {
    topic: ['procurement', 'used-equipment'], slug: 'used-and-refurbished-offers',
    cover: { src: '/images/blog/articles/used-and-refurbished-offers.webp', alt: "AI-generated editorial scene of a biomedical refurbishment workbench with a technician and equipment housing" },
    title: 'Used and Refurbished Offers: Ask What Work Was Done',
    description: 'Review used and refurbished medical equipment descriptions by asking for a documented work scope and unit-specific evidence.',
    intro: 'Condition labels are useful for browsing, but they do not tell the whole story of a pre-owned system. When comparing a used offer with one described as refurbished, ask what the seller means and what records support that description.',
    sections: [
      { title: 'Ask for the work scope', body: 'Request a description of inspections, repairs, replaced parts, cosmetic work and any other preparation included in the refurbishment claim. Ask who performed the work and whether documentation identifies the particular unit. Do not assume that two suppliers use the same term for an identical scope.' },
      { title: 'Separate condition from commercial support', body: 'A condition assessment and a warranty answer different questions. Ask the supplier to state support duration, coverage, exclusions and the process for resolving a claim, if support is offered. Record who bears transport and service responsibilities rather than inferring them from the condition label.' },
      { title: 'Compare what the buyer will receive', body: 'Bring the configuration, work records, included accessories and commercial terms into one comparison. Keep missing evidence and unresolved issues visible. A technically reviewed, documented scope gives the purchasing team a clearer basis for evaluating an offer than a label on its own.' },
    ], checklist: ['Documented preparation or refurbishment scope', 'Identity of the assessed unit', 'Separate written support terms', 'Remaining issues and buyer acceptance criteria'], equipment: [used],
  },
  {
    topic: ['procurement', 'quotations-delivery'], slug: 'compare-equipment-quotations',
    publishedAt: '2026-10-02', updatedAt: '2026-10-03',
    cover: { src: '/images/blog/articles/compare-equipment-quotations.webp', alt: "AI-generated editorial scene of two purchasing colleagues comparing equipment quotation folders" },
    title: 'How to Compare Medical Equipment Quotations',
    description: 'Compare equipment offers on a consistent basis covering configuration, excluded costs, validity and delivery responsibilities.',
    intro: 'The lowest headline price may describe a smaller package. A fair medical equipment quotation comparison begins with a shared specification and a list of the work required to deliver the agreed equipment to the buyer. Bring the clinical, technical and purchasing questions into one document before ranking offers. The purpose is not to create a complicated scoring system: it is to make omissions, assumptions and unresolved decisions visible before anyone commits to an order.',
    sections: [
      { title: 'Start with one version of the requirement', body: 'Give every supplier the same dated brief. Include the intended department, requested equipment, quantity, accessories, condition preference and delivery location. Separate essential requirements from preferences so an attractive optional feature does not distract from a missing essential item. Assign a version number to the brief and retain earlier versions when your team changes its requirements. Ask suppliers to identify the version they used. Otherwise, one offer might answer the original enquiry while another answers a later conversation, making their totals appear comparable when their scope is different. Nominate one purchasing contact to collect clarifications and distribute the agreed changes consistently.' },
      { title: 'Align the technical scope before comparing totals', body: 'Create one comparison row for each meaningful component. For an ultrasound enquiry, that could mean the console, each requested probe, installed options, printer and trolley accessories. For another category, use the component list agreed by the responsible technical reviewer. Record exact model codes where available rather than relying on a family name or a photograph. Mark each line as included, excluded, optional or awaiting confirmation. An empty cell should remain unknown, not become included by assumption. Ask the clinical or technical team to assess proposed substitutions, and record the outcome separately from the commercial comparison. This avoids quietly treating different configurations as equivalent.' },
      { title: 'Match the evidence to the particular equipment', body: 'Keep current photographs, identification details, configuration lists and available assessment records beside the offer they support. A general brochure describes a product range; it does not establish the condition or installed options of a particular used unit. If the supplier changes the proposed equipment, request a revised evidence pack and quotation reference. Record unavailable documents clearly and ask the relevant reviewer what further information is needed. Do not interpret a polished presentation, a familiar manufacturer name or a condition label as proof that all technical questions have been answered. Purchasing can track the evidence without attempting to replace a qualified technical assessment.' },
      { title: 'Separate the equipment price from the surrounding work', body: 'Use separate lines for equipment, accessories, packing, freight, assessment, installation, user orientation and agreed support. Record the currency and whether each amount is fixed, provisional or excluded. A delivered quotation should identify the named handover location and explain which transport and receiving tasks are included. Ask the responsible importer or adviser to clarify destination charges and requirements instead of inserting assumed percentages into the comparison. If one supplier includes a service and another leaves it open, keep the difference visible until it has been priced or deliberately accepted. Avoid presenting an incomplete total as a final landed cost.' },
      { title: 'Compare two fictional offers without losing the detail', body: 'Consider a purely illustrative situation: Offer A includes a console and two named accessories, while Offer B includes the same console, three accessories and packing. Their headline prices cannot settle the decision because the packages are different. First check whether the third accessory is actually required. Then ask whether packing can be specified consistently for both offers. If the accessory is essential, request a matching addition to Offer A; if it is unnecessary, keep it visible as an extra rather than assigning it automatic value. This example is a comparison method, not a real quotation, price recommendation or claim about available stock.' },
      { title: 'Distinguish readiness, collection and arrival', body: 'Ask what the quoted lead time measures and what must happen before it starts. Equipment that is available for inspection is not necessarily packed and ready for collection. Likewise, an expected arrival date may depend on information or arrangements still required from the buyer. Record the supplier readiness milestone, collection responsibility and receiving contact separately. Include access questions such as unloading, doorways, lift availability and movement to the intended room where they affect the agreed work. Do not turn a provisional estimate into a guaranteed deadline in an internal summary. Keep the original qualification visible to the people making the purchase decision.' },
      { title: 'Read support terms as a defined scope', body: 'If a warranty, installation visit or training session is offered, ask what is covered, who provides it and what exclusions apply. Distinguish an equipment condition description from a promise of future support. Record the contact process and responsibilities for transport or on-site work where these have been agreed. A broad word such as support is not enough to compare two offers. Have the appropriate reviewer assess contractual questions instead of rewriting terms from memory. Where support remains unresolved, label it as an open item and identify the person responsible for obtaining a written answer before acceptance.' },
      { title: 'Keep a clarification log and a final decision record', body: 'Give each unanswered question an owner, date raised, supplier response and status. Refer back to the quotation number and revision so answers do not become detached from the offer. When a response changes the configuration, price or delivery scope, request an updated quotation rather than relying on scattered messages. Before approval, review the last version with the people responsible for technical suitability, commercial terms and receiving arrangements. Save the accepted component list, exclusions, readiness assumptions and unresolved items together. A short decision note should explain why the selected offer fits the requirement and what still needs confirmation, not merely state that it was the cheapest.' },
      { title: 'Prepare a clearer enquiry for your next comparison', body: 'Use the same comparison structure when asking beIN Meditech or another supplier for an offer. Share the equipment category, preferred configuration, condition, included accessories and intended handover location. Add your timing requirement and identify who will review technical questions. If an existing quote is being compared, describe the missing information without sharing unrelated personal or confidential material. Ask for uncertainty to be stated explicitly. A useful response helps your team distinguish confirmed scope from assumptions; it should not require the buyer to infer what is included. Keep the final equipment and commercial decision with the responsible people at your facility.' },
    ], checklist: ['One dated requirement shared with all suppliers', 'Component-by-component scope with unknowns marked explicitly', 'Unit-specific evidence and documented substitutions', 'Separate fixed, provisional and excluded costs', 'Readiness, collection and receiving responsibilities', 'Written support scope and clarification owners', 'Approved final quotation revision and decision record'], equipment: [used, { label: 'Shipment handover checklist', href: '/blog/procurement/quotations-delivery/equipment-shipping-handover' }, { label: 'Used equipment evidence', href: '/blog/procurement/used-equipment/used-equipment-evidence' }, { label: 'Equipment photo checklist', href: '/blog/procurement/used-equipment/medical-equipment-photo-checklist' }],
  },
  {
    topic: ['procurement', 'quotations-delivery'], slug: 'equipment-shipping-handover',
    cover: { src: '/images/blog/articles/equipment-shipping-handover.webp', alt: "AI-generated editorial scene of medical equipment shipping crates prepared for dispatch" },
    title: 'Medical Equipment Shipment Handover Checklist',
    description: 'Plan equipment identification, packing scope, shipment documents and receiving-site responsibilities before collection.',
    intro: 'Shipment planning starts before the equipment is packed. The supplier, transport provider and receiving team need a shared record of the package, collection arrangements and work required at arrival.',
    sections: [
      { title: 'Confirm the shipment contents', body: 'Match the packing list to the accepted equipment and accessory schedule. Record available serial numbers and identify separate boxes or components. Ask for the agreed packing evidence and documents before collection so discrepancies can be clarified while the equipment is still accessible.' },
      { title: 'Agree the transport and receiving scope', body: 'Confirm dimensions and weights with the party preparing the shipment. Ask that the packing and transport plan take account of the manufacturer’s relevant handling requirements. Identify unloading, building access, movement within the facility and installation responsibilities, since these may sit outside the freight quotation.' },
      { title: 'Prepare the receiving team', body: 'Share the expected documents, item list and contact details with the buyer. Agree how visible damage, shortages and other discrepancies will be recorded under the contract and transport arrangements. Keep receipt checks distinct from technical acceptance; receiving the boxes does not by itself complete every agreed equipment check.' },
    ], checklist: ['Accepted item list and identifiers', 'Confirmed packing and shipment details', 'Named collection and receiving contacts', 'Receipt and technical acceptance responsibilities'], equipment: [used, { label: 'Prepare your receiving site', href: '/blog/procurement/quotations-delivery/receiving-site-readiness' }],
  },
  {
    topic: ['healthcare-it', 'integration'], slug: 'medical-integration-brief',
    cover: { src: '/images/blog/articles/medical-integration-brief.webp', alt: "AI-generated editorial scene of hospital IT staff planning connections between clinical systems" },
    title: 'Writing a Medical Equipment Integration Brief',
    description: 'Describe existing systems, required information exchanges and ownership of configuration and testing in an equipment integration brief.',
    intro: 'A useful integration enquiry describes the workflow the facility wants to achieve. Listing connectivity as a requirement is too broad to establish the systems, interfaces and work involved.',
    sections: [
      { title: 'Map the current and intended workflow', body: 'Record the systems involved, their relevant versions and the information that needs to move between them. Identify who creates, reviews and receives that information. Ask the facility team to distinguish an essential workflow from an optional improvement so suppliers can respond to a clear priority.' },
      { title: 'Identify the evidence and dependencies', body: 'Request the relevant interface documentation from each supplier. Ask which capabilities are installed, which require licenses or configuration, and which still need technical confirmation. Record access, network and supplier-coordination dependencies rather than assuming they are included in the equipment price.' },
      { title: 'Define test cases and ownership', body: 'Agree the outcomes the facility expects to see and who will approve them. Specify a suitable test environment and test-data handling arrangement with the responsible teams. Assign ownership for configuration, issue resolution and final records so an unanswered interface question does not remain between suppliers at handover.' },
    ], checklist: ['Systems, versions and intended workflow', 'Required interfaces and supplier documentation', 'Licenses, access and configuration dependencies', 'Test cases, acceptance owner and handover records'], equipment: [integration],
  },
  {
    topic: ['healthcare-it', 'integration'], slug: 'connected-equipment-handover',
    cover: { src: '/images/blog/articles/connected-equipment-handover.webp', alt: "AI-generated editorial scene of a clinician and engineer reviewing a handover beside newly installed equipment" },
    title: 'Planning the Handover of Connected Medical Equipment',
    description: 'Prepare configuration records, acceptance evidence, support ownership and user guidance for connected equipment handover.',
    intro: 'A connected equipment project is easier to hand over when the final configuration and responsibilities are recorded. Plan these deliverables during procurement so they are available when the facility takes over routine operation.',
    sections: [
      { title: 'Document the agreed configuration', body: 'Keep an approved record of relevant equipment, system versions and interface scope. Identify where operational documentation will be stored and who maintains it. Sensitive configuration and access information should be transferred through the facility’s approved process rather than placed in a public equipment description.' },
      { title: 'Record acceptance and unresolved items', body: 'Keep the agreed test cases with their results, reviewer and any outstanding issues. Distinguish a completed test from a planned follow-up. Where the facility accepts an open item, document the owner, next action and agreed timeframe so the handover does not imply work is finished when it remains pending.' },
      { title: 'Define support and future changes', body: 'Provide the agreed support contacts and escalation responsibilities. Record how changes to equipment, interfaces or software will be reviewed and which parties need to be involved. User guidance and technical administration have different audiences, so identify the required material and handover session for each.' },
    ], checklist: ['Approved configuration record', 'Acceptance results and open-item owners', 'Support contacts and escalation route', 'User guidance and change responsibilities'], equipment: [integration],
  },
  {
    topic: ['procurement', 'used-equipment'], slug: 'medical-equipment-photo-checklist',
    publishedAt: '2026-10-03',
    cover: { src: '/images/blog/articles/medical-equipment-photo-checklist.webp', alt: 'AI-generated editorial scene of an equipment coordinator photographing a patient monitor beside an accessory checklist' },
    title: 'Medical Equipment Photo Checklist for Buyers',
    description: 'Use a medical equipment photo checklist to review the offered unit, accessories, visible condition and missing evidence before requesting a quotation.',
    intro: 'A clear photograph can answer a purchasing question; a collection of attractive images can still leave the important details unresolved. This medical equipment photo checklist helps buyers ask for an organised view of a particular used unit and its proposed accessories. It also gives sellers a practical way to prepare an enquiry pack without confusing product presentation with technical evidence. Use the photographs alongside a written configuration list and the available records. They support questions about identity, scope and visible condition, but they do not establish performance, suitability, certification or readiness for clinical use.',
    sections: [
      { title: 'Start with the offered unit, not a catalogue image', body: 'Ask whether each image shows the actual equipment being quoted, another unit of the same model or an illustration. Keep those categories distinct in your comparison. A catalogue photograph can help explain a product family, but it should not stand in for current pictures of the offered unit. Request an overall view with a simple enquiry reference beside the equipment where practical. Record who provided the images and when they were supplied. A dated note helps organise the pack; it is not independent proof of ownership or an assessment of condition. If the proposed unit changes, ask for a new, clearly identified set.' },
      { title: 'Connect the images to the written identification', body: 'Request a readable view of the equipment identification label where it can be photographed safely, together with an overall image showing where that label is located. Ask the supplier to transcribe the relevant model and identifier into the quotation so the purchasing team is not relying on an enlarged, blurred image. Keep the identifier consistent across the quotation, photographs and available records. If something is obscured or unreadable, mark it as an open question instead of guessing a character. Do not ask someone to remove covers or disturb equipment solely to find a label. Sensitive identifiers can be shared through the agreed private channel rather than a public listing.' },
      { title: 'Use wide views before close-up details', body: 'An overall view makes close-ups easier to interpret. Ask for the front, rear and accessible sides of the unit, plus its stand or trolley if included. Keep the complete equipment within the frame and leave enough background to understand what is connected to it. Photograph the device in a tidy, well-lit area without trying to make wear disappear. A close-up of one connector is much more useful when a second image shows its position on the equipment. If an angle cannot be obtained safely, say so. A clear explanation of a missing view is better than an image that appears to show a part but actually belongs to another unit.' },
      { title: 'Lay out accessories against the quotation list', body: 'Ask for included accessories to be shown separately and matched to named lines in the offer. For example, a fictional monitor package might list the display, mounting arrangement, power accessories and several separately identified cables. The picture should help a buyer count and recognise those items, not imply that every object in the room is included. Label optional items as optional in the accompanying file list. Keep borrowed demonstration accessories out of the offered-package photograph, or explain their status explicitly. Pictures alone cannot confirm that an accessory is compatible, licensed or suitable for the intended use; those questions belong in the technical review.' },
      { title: 'Show visible wear without making a diagnosis', body: 'Request both a context image and a close-up for visible scratches, damaged housings, missing knobs, worn cables or other disclosed concerns. Ask the supplier to describe what is visible and what remains unassessed. Avoid inferring the cause or severity of a mark from a photograph alone. For example, an image of a worn cable should prompt a question about the assessment and proposed replacement scope, not a remote declaration that it is safe or unsafe to use. Keep any condition report separate from the image caption and ask which unit and components it covers. Honest presentation makes a subsequent review more useful than cosmetic editing does.' },
      { title: 'Treat screen photographs and videos as limited evidence', body: 'A lit display or short video does not replace an agreed technical assessment. If the supplier provides screen images, ask what they are intended to demonstrate and whether they relate to the exact unit and configuration being offered. Keep any explanation alongside the file so a screenshot does not circulate without context. Do not request patient information, confidential network details or credentials. Equipment should only be operated by appropriately authorised personnel under the relevant procedures; the purchasing team should not invent a test sequence for the sake of a photograph. Missing technical evidence should remain a question for the responsible reviewer, not be filled in by assumptions about an attractive screen.' },
      { title: 'Keep a useful file index and preserve the originals', body: 'Choose simple names that connect the enquiry, item and view, such as enquiry-A12-main-unit-front or enquiry-A12-accessory-03. These are organisational examples, not a required naming standard. Add a short index that states what each file shows, whether the item is included and which questions remain. Preserve the original files alongside any smaller copies prepared for sharing. Basic resizing for convenience should not remove useful detail or conceal a defect. Do not use generated or retouched images as condition evidence. A clearly labelled editorial illustration can explain a guide, but it must stay separate from the photographs used to describe actual inventory.' },
      { title: 'Review the pack for missing answers', body: 'Give one reviewer responsibility for checking the image index against the requested configuration. A simple status for each item can be enough: received, unclear, missing or awaiting technical review. For example, if three accessories are listed but only two can be identified in the images, ask for clarification rather than assuming the third is inside a closed case. Record the question, the supplier response and any replacement file. Keep superseded images available for the audit trail while marking the current set clearly. This helps the buyer avoid combining photographs from several offer revisions into an apparently complete package that no supplier actually proposed.' },
      { title: 'Turn the photo pack into a clearer enquiry', body: 'Send the relevant photographs with the requested equipment category, written configuration, preferred condition and intended delivery scope. Tell the supplier which details you want clarified instead of sending a large folder without explanation. For beIN Meditech enquiries, the goal is a defined equipment request and a list of open questions, not an approval based only on appearance. Confirm the actual unit, accessories, available records and commercial scope in the quotation. Keep technical suitability and acceptance with the responsible people at the receiving facility, and retain the agreed evidence pack with the final version of the offer.' },
    ],
    checklist: ['Confirm that photographs show the actual offered unit', 'Match identification to the quotation and available records', 'Request overall views and contextual close-ups', 'Identify included, optional and excluded accessories', 'Show disclosed wear without concealing it', 'Exclude patient information and confidential system details', 'Keep originals, a file index and outstanding questions', 'Review photographs alongside qualified technical evidence'],
    equipment: [used, { label: 'Evidence for used equipment', href: '/blog/procurement/used-equipment/used-equipment-evidence' }, { label: 'Compare equipment quotations', href: '/blog/procurement/quotations-delivery/compare-equipment-quotations' }],
  },
  {
    topic: ['procurement', 'quotations-delivery'], slug: 'receiving-site-readiness',
    publishedAt: '2026-10-04',
    cover: { src: '/images/blog/articles/receiving-site-readiness.webp', alt: 'AI-generated editorial scene of a facilities coordinator reviewing a medical equipment delivery route beside sealed shipping crates' },
    title: 'Medical Equipment Delivery: Receiving-Site Checklist',
    description: 'Prepare for medical equipment delivery with a receiving-site checklist covering access, unloading, contacts, storage and document handover.',
    intro: 'A medical equipment delivery can reach the correct address while the people and arrangements needed to receive it are still missing. The entrance may be closed, the receiving contact may be elsewhere, or the quotation may cover transport only to a different handover point. A receiving-site checklist helps purchasing, facilities and the supplier describe what will happen when the shipment arrives. Prepare it before confirming the collection and delivery arrangements, then review it when the equipment package or arrival window changes. This guide focuses on coordination at the destination, from the named entrance to the handover of the package and its records.',
    sections: [
      { title: 'Name the actual handover point', body: 'Give the supplier the facility name, full address, building, entrance and agreed delivery point. An address shared by several buildings is not enough to tell a driver where the receiving team will be waiting. Ask whether the quoted service ends at a loading area, reception desk, storage room or another named point. Put that answer in the delivery brief and refer to the accepted quotation. For example, a fictional clinic could use its public entrance for visitors but a separate service entrance for equipment deliveries. A clear written instruction avoids treating those two entrances as interchangeable. Include a contact method for arrival and identify who can approve a change to the handover point.' },
      { title: 'Give each receiving task a named owner', body: 'Choose a receiving coordinator and a backup who can be contacted during the agreed arrival window. List the people responsible for access, unloading coordination, package receipt and the later technical handover. Several tasks may belong to one person, but each needs an explicit answer. Share the relevant contact details with the transport provider and supplier through the agreed channel. Check whether reception or security staff need advance notice, a delivery reference or a visitor arrangement. A contact list should explain what each person can decide; someone available by telephone may not be authorised to approve additional work. Resolve that question before an unexpected change requires a decision at the entrance.' },
      { title: 'Review the route using packed dimensions', body: 'Ask the party preparing the shipment for the package dimensions, weights and number of pieces. The dimensions of an unpacked device do not describe a crate, pallet or proposed transport arrangement. Give the package information to the facility team that reviews the delivery route. Ask them to check the relevant entrances, passageways, lifts and destination access against their own procedures and any applicable constraints. Record unresolved points and the person reviewing them. Do not supply guessed clearances or assume that a route used for a previous purchase will suit the new package. If a restriction is identified, discuss the alternative arrangement with the responsible parties before collection rather than improvising when the shipment arrives.' },
      { title: 'Confirm the arrival window and access arrangements', body: 'State when deliveries can be received and how arrival will be announced. Ask the transport provider how the expected window will be confirmed and who receives an update if the schedule changes. Record any booking, entrance or parking arrangements needed by the facility. Keep an estimated arrival separate from an agreed receiving appointment so staff know what still needs confirmation. Review whether the receiving contact, access permission and required support will be available together. If delivery outside the usual window is proposed, ask the facility to confirm the arrangement in writing. The brief should contain a practical contact and decision path for a delay, rather than relying on a general statement that somebody will be there.' },
      { title: 'Agree unloading and internal movement as a scope', body: 'Ask which party provides the unloading service, the personnel involved and the suitable handling arrangement. Then ask who is responsible for movement from the delivery point to the agreed storage or destination location. Describe these tasks in the quotation or associated delivery scope, including work that is excluded or awaiting a separate arrangement. This is a question for the parties planning and performing the work, not a request for purchasing staff to devise a lifting method. If equipment, site access or packing changes, have the responsible people review the plan again. A freight price should not lead the buyer to assume that every movement inside the building has also been agreed.' },
      { title: 'Choose a receiving location and document its purpose', body: 'Identify where the package will be placed after receipt and who controls access to that location. Ask the supplier for the relevant manufacturer guidance and any agreed storage or handling instructions, then have the facility team review the proposed arrangements. Keep sealed-package storage, unpacking and installation plans clear in the brief. An available corner of a corridor is not automatically the agreed destination. Record who will arrange the next movement and what information they need. If the intended room is not yet available, discuss the temporary arrangement before delivery and obtain the necessary review. Avoid treating a temporary storage decision as confirmation that the device is ready to be installed or used.' },
      { title: 'Prepare the documents for receipt and technical handover', body: 'Request the agreed packing list, shipment reference, equipment schedule and other documents identified in the order. Give the receiving team access to the current versions before the expected arrival. Ask how separate boxes and accessories will be matched to the package list, and which documents should be passed to the person responsible for the technical handover. Record the supplier contact for missing information. Package receipt and technical acceptance may involve different people and stages; describe both responsibilities in the brief. Follow the agreed contract and facility process when recording receipt or discrepancies. A checklist can help organise the records, but it should not invent contractual terms or replace the responsible reviewer.' },
      { title: 'Plan how changed details and exceptions will be handled', body: 'Keep a dated version of the receiving brief with the quotation and shipment records. A change to the arrival window, crate size, destination room or contact person should trigger a review of the affected arrangements. For a fictional example, suppose a facility has booked one entrance but later learns that a revised package needs a different route. The coordinator would obtain the new package information, request a facilities review and confirm the revised delivery instructions with the transport provider. They would also tell the receiving team which brief is current. For unexpected shortages or visible damage, use the agreed reporting process, record the observations and contact the responsible parties rather than guessing the next step.' },
      { title: 'Send one final receiving-site brief before dispatch', body: 'Bring the confirmed delivery point, contacts, arrival arrangements, package information, movement responsibilities and document list into one concise brief. Mark open questions clearly, with an owner and a date for the next response. Share the current version with the supplier and the people receiving the shipment. Ask for acknowledgement where the plan depends on a specific service or site arrangement. When contacting beIN Meditech, include your intended receiving location and the delivery scope you want quoted alongside the requested equipment configuration. This helps the conversation cover the complete handover requirement. The final technical review, installation arrangements and acceptance steps should remain with the responsible people at the facility.' },
    ],
    checklist: ['Named building, entrance and contractual handover point', 'Receiving coordinator, backup and decision responsibilities', 'Confirmed packed dimensions, weights and package count', 'Facility review of the route and unresolved restrictions', 'Arrival window and access arrangements', 'Agreed unloading and internal movement scope', 'Reviewed receiving or temporary storage location', 'Current package list and technical handover documents', 'A dated brief with open-item owners and a change process'],
    equipment: [used, { label: 'Shipment handover checklist', href: '/blog/procurement/quotations-delivery/equipment-shipping-handover' }, { label: 'Compare equipment quotations', href: '/blog/procurement/quotations-delivery/compare-equipment-quotations' }, { label: 'Discuss your delivery requirements', href: '/request-quote' }],
  },
];

export function blogPath(segments: string[] = []) { return `/blog${segments.length ? `/${segments.join('/')}` : ''}`; }
export function articlePath(article: BlogArticle) { return blogPath([...article.topic, article.slug]); }
export function findBlogTopic(segments: string[] = []) { return blogTopics.find((topic) => topic.segments.join('/') === segments.join('/')); }
export function findBlogArticle(segments: string[] = []) { return blogArticles.find((article) => [...article.topic, article.slug].join('/') === segments.join('/')); }
export function topicArticles(segments: string[]) {
  return blogArticles.filter((article) => segments.every((part, index) => article.topic[index] === part))
    .sort((a, b) => articlePublishedDate(b).localeCompare(articlePublishedDate(a)));
}
export function childTopics(segments: string[]) { return blogTopics.filter((topic) => topic.segments.length === segments.length + 1 && segments.every((part, index) => topic.segments[index] === part)); }
export function blogBreadcrumbs(segments: string[], article?: BlogArticle): Breadcrumb[] {
  return [{ name: 'Home', href: '/' }, { name: 'Blog', href: '/blog' }, ...segments.map((_, i) => {
    const parts = segments.slice(0, i + 1);
    return { name: findBlogTopic(parts)?.name || article?.title || parts[i], href: blogPath(parts) };
  })];
}
export function readingMinutes(article: BlogArticle) {
  const text = [article.intro, ...article.sections.map((section) => section.body), ...article.checklist].join(' ');
  return Math.max(1, Math.ceil(text.split(/\s+/).length / 200));
}
