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
    title: 'How to Compare Medical Equipment Quotations',
    description: 'Compare equipment offers on a consistent basis covering configuration, excluded costs, validity and delivery responsibilities.',
    intro: 'The lowest headline price may describe a smaller package. A fair quotation comparison begins with a shared specification and a list of the work required to deliver the agreed equipment to the buyer.',
    sections: [
      { title: 'Align the technical scope first', body: 'Compare model, configuration, condition, accessories and quantity before looking at totals. Ask each supplier to identify deviations from the request. Where an alternative is proposed, obtain the relevant technical review and record whether it is accepted rather than quietly treating it as equivalent.' },
      { title: 'Separate included and additional costs', body: 'List equipment, packing, freight, assessment, installation and support as applicable. Record currency, validity, payment milestones and provisional amounts. Ask for clarification of local charges and responsibilities through the appropriate importer or adviser. Do not assume that a phrase such as delivered price includes every possible cost.' },
      { title: 'Compare timing and completion criteria', body: 'Distinguish equipment readiness, collection and expected arrival. Identify what starts the lead time and any buyer information needed before work can proceed. The final agreement should state the accepted configuration and scope, the relevant destination or handover location, and the process for handling changes.' },
    ], checklist: ['Matching technical configuration', 'Explicit exclusions and provisional costs', 'Currency, validity and payment terms', 'Readiness, delivery and acceptance milestones'], equipment: [used, { label: 'Request a quotation', href: '/request-quote' }],
  },
  {
    topic: ['procurement', 'quotations-delivery'], slug: 'equipment-shipping-handover',
    title: 'Medical Equipment Shipment Handover Checklist',
    description: 'Plan equipment identification, packing scope, shipment documents and receiving-site responsibilities before collection.',
    intro: 'Shipment planning starts before the equipment is packed. The supplier, transport provider and receiving team need a shared record of the package, collection arrangements and work required at arrival.',
    sections: [
      { title: 'Confirm the shipment contents', body: 'Match the packing list to the accepted equipment and accessory schedule. Record available serial numbers and identify separate boxes or components. Ask for the agreed packing evidence and documents before collection so discrepancies can be clarified while the equipment is still accessible.' },
      { title: 'Agree the transport and receiving scope', body: 'Confirm dimensions and weights with the party preparing the shipment. Ask that the packing and transport plan take account of the manufacturer’s relevant handling requirements. Identify unloading, building access, movement within the facility and installation responsibilities, since these may sit outside the freight quotation.' },
      { title: 'Prepare the receiving team', body: 'Share the expected documents, item list and contact details with the buyer. Agree how visible damage, shortages and other discrepancies will be recorded under the contract and transport arrangements. Keep receipt checks distinct from technical acceptance; receiving the boxes does not by itself complete every agreed equipment check.' },
    ], checklist: ['Accepted item list and identifiers', 'Confirmed packing and shipment details', 'Named collection and receiving contacts', 'Receipt and technical acceptance responsibilities'], equipment: [used],
  },
  {
    topic: ['healthcare-it', 'integration'], slug: 'medical-integration-brief',
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
    title: 'Planning the Handover of Connected Medical Equipment',
    description: 'Prepare configuration records, acceptance evidence, support ownership and user guidance for connected equipment handover.',
    intro: 'A connected equipment project is easier to hand over when the final configuration and responsibilities are recorded. Plan these deliverables during procurement so they are available when the facility takes over routine operation.',
    sections: [
      { title: 'Document the agreed configuration', body: 'Keep an approved record of relevant equipment, system versions and interface scope. Identify where operational documentation will be stored and who maintains it. Sensitive configuration and access information should be transferred through the facility’s approved process rather than placed in a public equipment description.' },
      { title: 'Record acceptance and unresolved items', body: 'Keep the agreed test cases with their results, reviewer and any outstanding issues. Distinguish a completed test from a planned follow-up. Where the facility accepts an open item, document the owner, next action and agreed timeframe so the handover does not imply work is finished when it remains pending.' },
      { title: 'Define support and future changes', body: 'Provide the agreed support contacts and escalation responsibilities. Record how changes to equipment, interfaces or software will be reviewed and which parties need to be involved. User guidance and technical administration have different audiences, so identify the required material and handover session for each.' },
    ], checklist: ['Approved configuration record', 'Acceptance results and open-item owners', 'Support contacts and escalation route', 'User guidance and change responsibilities'], equipment: [integration],
  },
];

export function blogPath(segments: string[] = []) { return `/blog${segments.length ? `/${segments.join('/')}` : ''}`; }
export function articlePath(article: BlogArticle) { return blogPath([...article.topic, article.slug]); }
export function findBlogTopic(segments: string[] = []) { return blogTopics.find((topic) => topic.segments.join('/') === segments.join('/')); }
export function findBlogArticle(segments: string[] = []) { return blogArticles.find((article) => [...article.topic, article.slug].join('/') === segments.join('/')); }
export function topicArticles(segments: string[]) { return blogArticles.filter((article) => segments.every((part, index) => article.topic[index] === part)); }
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
