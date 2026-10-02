import type { MetadataRoute } from 'next';
import { collectionPath, seoCollections, SITE_URL } from '@/lib/catalog';
import { blogTopics, blogArticles, blogPath, articlePath, BLOG_UPDATED } from '@/lib/blog';

const staticPages = [
  { path: '', modified: '2026-08-26', frequency: 'weekly' as const, priority: 1 },
  { path: '/about', modified: '2026-08-20', frequency: 'monthly' as const, priority: 0.8 },
  { path: '/services', modified: '2026-08-20', frequency: 'monthly' as const, priority: 0.8 },
  { path: '/services/medical-devices-trading', modified: '2026-08-20', frequency: 'monthly' as const, priority: 0.7 },
  { path: '/services/software-and-hardware-consultation', modified: '2026-08-20', frequency: 'monthly' as const, priority: 0.7 },
  { path: '/services/training-and-support-services', modified: '2026-08-20', frequency: 'monthly' as const, priority: 0.7 },
  { path: '/services/custom-it-solutions-for-healthcare', modified: '2026-08-20', frequency: 'monthly' as const, priority: 0.7 },
  { path: '/services/medical-integration-services', modified: '2026-08-20', frequency: 'monthly' as const, priority: 0.7 },
  { path: '/contact', modified: '2026-08-20', frequency: 'monthly' as const, priority: 0.6 },
  { path: '/request-quote', modified: '2026-09-01', frequency: 'monthly' as const, priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticPages.map((page) => ({ url: `${SITE_URL}${page.path}`, lastModified: new Date(page.modified), changeFrequency: page.frequency, priority: page.priority })),
    ...seoCollections.map((page) => ({ url: `${SITE_URL}${collectionPath(page.segments)}`, lastModified: new Date(page.updated), changeFrequency: 'weekly' as const, priority: page.segments.length === 0 ? 0.95 : 0.8 })),
    ...blogTopics.map((topic) => ({ url: `${SITE_URL}${blogPath(topic.segments)}`, lastModified: new Date(BLOG_UPDATED), changeFrequency: 'monthly' as const, priority: topic.segments.length === 0 ? 0.85 : 0.7 })),
    ...blogArticles.map((article) => ({ url: `${SITE_URL}${articlePath(article)}`, lastModified: new Date(BLOG_UPDATED), changeFrequency: 'monthly' as const, priority: 0.65 })),
  ];
}
