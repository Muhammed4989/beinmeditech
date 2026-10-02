export const equipmentCategories = [
  { value: 'ultrasound', label: 'Ultrasound', productCategory: 'Ultrasound' },
  { value: 'endoscopy', label: 'Endoscopy', productCategory: 'Endoscopy' },
  { value: 'patient-monitors', label: 'Patient Monitors', productCategory: 'Patient Monitoring' },
];

export const equipmentSubcategories = [
  { value: 'general-imaging', category: 'ultrasound', label: 'General Imaging Systems', intro: 'Explore cart-based ultrasound packages for shared imaging environments. Compare the console, required probes and installed options as one configuration.', sections: [
    { title: 'Build a configuration around the intended examinations', body: 'Ask the clinical team to identify the examinations and transducers required. Record exact probe models, quantities and software requirements in the enquiry. A product family name does not establish which options are installed on a specific unit, so request written confirmation for the offered configuration.' },
    { title: 'Compare complete working packages', body: 'Identify the accessories, reporting workflow and installation support needed by the facility. Keep included equipment, optional additions and buyer-supplied items separate in the offer. Ask for unit-specific identification and available assessment records before comparing the final price.' },
  ] },
  { value: 'portable', category: 'ultrasound', label: 'Portable Ultrasound', intro: 'Explore compact ultrasound configurations for facilities that need equipment to move between rooms or departments. Include probes, power arrangements and transport accessories in your request.', sections: [
    { title: 'Describe how the system will be moved', body: 'State whether the system will be carried, used with a trolley or positioned at a fixed location between examinations. Ask the supplier to identify the power supply, battery information where relevant, carrying accessories and mounting scope. Portability should be assessed against the actual use environment rather than size alone.' },
    { title: 'Keep imaging requirements explicit', body: 'List the required examinations and transducer models for technical review. Confirm the proposed console, probes and installed options together, along with the method for transferring or reporting results. Any substitute configuration should be reviewed before it becomes part of the purchase agreement.' },
  ] },
  { value: 'systems', category: 'endoscopy', label: 'Endoscopy Systems', intro: 'Explore endoscopy tower configurations with processors, light sources, displays and supporting equipment. Define the exact package before requesting a price.', sections: [
    { title: 'Specify the tower line by line', body: 'List each processor, light source, monitor, trolley and scope with its model and quantity. Ask what is included in the quoted package and what is shown only for illustration. A complete tower description should make the equipment boundary clear enough for a technical and commercial comparison.' },
    { title: 'Review compatibility and handover records', body: 'Identify the equipment already used by the facility and ask the supplier to document the proposed combination. Request available condition and service information for the actual components. Record the documentation and preparation required at handover, with responsibilities agreed before shipment.' },
  ] },
  { value: 'components', category: 'endoscopy', label: 'Endoscopy Components', intro: 'Source individual endoscopy processors, light sources and related components around an identified installed system. Exact model and compatibility information guide the enquiry.', sections: [
    { title: 'Identify the component being replaced', body: 'Supply full model identifiers, nameplate photographs and the details of equipment connected to the component. State whether an exact replacement is required or alternatives may be proposed. Ask the responsible technical team to review any alternative against the relevant manufacturer documentation.' },
    { title: 'Define supporting accessories and work', body: 'Clarify whether the offer includes cables, adapters, installation or configuration. Record assessment evidence and any outstanding checks separately from the component description. This lets the buyer compare the supplied item and the supporting service scope without assuming either is included.' },
  ] },
  { value: 'bedside', category: 'patient-monitors', label: 'Bedside Monitors', intro: 'Explore patient monitors for fixed bedside environments. Specify measurements, modules, accessories and any connection to the facility’s existing monitoring infrastructure.', sections: [
    { title: 'Start with the required measurements', body: 'Ask the clinical team to identify patient groups and measurements before requesting a configuration. Include the relevant modules, cables, sensors and cuffs in the equipment schedule. Ask the supplier to distinguish included accessories from optional additions or items expected to be provided by the facility.' },
    { title: 'Review installation and connectivity', body: 'Identify mounting arrangements, power requirements and any central-station connection that the purchase depends on. Ask biomedical and IT teams to confirm compatibility and required configuration work. Record the acceptance scope and support contacts in the handover plan.' },
  ] },
  { value: 'transport', category: 'patient-monitors', label: 'Transport Monitors', intro: 'Explore monitoring packages intended for movement between care locations. Describe the route, required measurements, power arrangements and mounts for technical review.', sections: [
    { title: 'Describe the transport workflow', body: 'Tell the supplier where and how the equipment will be moved and which measurements the clinical team requires throughout that workflow. Ask for the relevant mounting and power configuration, with supporting product information for review. A portable appearance alone does not establish suitability for the intended environment.' },
    { title: 'Plan accessories and handover', body: 'Record the sensors, cables, batteries where applicable and charging arrangements included in the offer. Identify connections needed before and after transport and who will configure them. Agree the checks and records required by the receiving team before accepting the package.' },
  ] },
];

export function equipmentCategorySlug(name: string) {
  return equipmentCategories.find((category) => category.productCategory === name)?.value || '';
}
