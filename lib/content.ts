export type ContentSection = { title: string; body: string };
export type ContentLink = { label: string; href: string };
export type Breadcrumb = { name: string; href: string };

export function jsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}

export function sectionId(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}
