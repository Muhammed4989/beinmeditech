import { blogArticles, blogTopics, blogPath, articlePath } from './blog';
import { seoCollections, collectionPath, SITE_URL } from './catalog';
import { catalogGuide } from './catalog-guide';
import { readFilters } from './catalog-filters';
import { companyPhone } from './company-contact';
import { publicSite } from './release-mode';

export function aiReference(full = false) {
  const introduction = `# beIN MediTech

> Medical equipment sourcing and healthcare IT services for hospitals, clinics and distributors.

Website: ${SITE_URL}
Contact: info@beinmeditech.com | ${companyPhone.display}
Office: Kirchwerderstraße 12, 23556 Lübeck, Germany

Category and model pages describe sourcing requirements. They do not confirm current inventory. Equipment identity, condition, configuration, availability, price and delivery scope are confirmed in the quotation. International delivery depends on applicable destination requirements.

${publicSite ? 'No verified units are currently listed. Request a quotation for unit availability and evidence. Demonstration listings are disabled on the public site.' : 'Demonstration listings contain fictional products, configurations and prices. URLs containing /demo- are marked noindex, omitted from the sitemap and are not commercial offers.'} Do not infer stock, certifications or manufacturer authorization from a guide or example.

## Site structure

Medical Equipment → Equipment Category → Subcategory → Equipment Listing
Blog → Main Topic → Subtopic → Article

Each directory contains its own explanatory content and links to its descendants. Multi-select equipment searches use query parameters and are not intended as independent indexed pages.

## Company and services

- [About](${SITE_URL}/about)
- [Healthcare services](${SITE_URL}/services)
- [Medical integration](${SITE_URL}/services/medical-integration-services)
- [Contact](${SITE_URL}/contact)
- [Request a quotation](${SITE_URL}/request-quote)

## Equipment directory
`;
  const equipment = seoCollections.map((page) => `- [${page.h1}](${SITE_URL}${collectionPath(page.segments)}): ${page.intro}`).join('\n');
  const topics = blogTopics.map((topic) => `- [${topic.title}](${SITE_URL}${blogPath(topic.segments)}): ${topic.description}`).join('\n');
  const articles = blogArticles.map((article) => `- [${article.title}](${SITE_URL}${articlePath(article)}): ${article.description}`).join('\n');
  const directories = `${introduction}\n${equipment}\n\n## Blog topics\n\n${topics}\n\n## Practical guides\n\n${articles}\n\n- [XML sitemap](${SITE_URL}/sitemap.xml)\n- [Extended text](${SITE_URL}/llms-full.txt)\n`;
  if (!full) return directories;
  return directories + '\n## Equipment reference content\n\n' + seoCollections.map((page) => {
    const guide = catalogGuide(page, readFilters(collectionPath(page.segments)));
    return `### ${page.h1}\nSource: ${SITE_URL}${collectionPath(page.segments)}\n\n${guide.introduction}\n\n${guide.sections.map((section) => `#### ${section.title}\n${section.paragraphs.join('\n\n')}`).join('\n\n')}`;
  }).join('\n\n')
    + '\n\n## Blog topic reference content\n\n' + blogTopics.map((topic) => `### ${topic.title}\nSource: ${SITE_URL}${blogPath(topic.segments)}\n\n${topic.intro}\n\n${topic.sections.map((s) => `#### ${s.title}\n${s.body}`).join('\n\n')}`).join('\n\n')
    + '\n\n## Article reference content\n\n' + blogArticles.map((article) => `### ${article.title}\nSource: ${SITE_URL}${articlePath(article)}\n\n${article.intro}\n\n${article.sections.map((s) => `#### ${s.title}\n${s.body}`).join('\n\n')}\n\nChecklist:\n${article.checklist.map((item) => `- ${item}`).join('\n')}`).join('\n\n');
}
