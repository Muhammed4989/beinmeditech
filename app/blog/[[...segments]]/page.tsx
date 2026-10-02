import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SITE_URL } from '@/lib/catalog';
import { BLOG_UPDATED, articlePath, blogArticles, blogBreadcrumbs, blogCover, blogPath, blogTopics, findBlogArticle, findBlogTopic, topicArticles } from '@/lib/blog';
import { jsonLd } from '@/lib/content';
import { BlogArchive, BlogArticleView } from '@/components/blog/BlogViews';

type Props = { params: { segments?: string[] } };
export const dynamicParams = false;

export function generateStaticParams() {
  return [...blogTopics.map((topic) => ({ segments: topic.segments })), ...blogArticles.map((article) => ({ segments: [...article.topic, article.slug] }))];
}

export function generateMetadata({ params }: Props): Metadata {
  const segments = params.segments || [];
  const article = findBlogArticle(segments);
  const entry = article || findBlogTopic(segments);
  if (!entry) return {};
  const url = `${SITE_URL}${blogPath(segments)}`;
  return {
    title: entry.title, description: entry.description, alternates: { canonical: url },
    openGraph: { title: entry.title, description: entry.description, url, type: article ? 'article' : 'website', ...(article ? { publishedTime: BLOG_UPDATED, modifiedTime: BLOG_UPDATED, authors: ['beIN MediTech'] } : {}), images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'beIN MediTech buying guides' }] },
    twitter: { card: 'summary_large_image', title: entry.title, description: entry.description, images: ['/images/og-image.png'] },
  };
}

export default function BlogPage({ params }: Props) {
  const segments = params.segments || [];
  const article = findBlogArticle(segments);
  const topic = findBlogTopic(segments);
  const entry = article || topic;
  if (!entry) notFound();
  const path = blogPath(segments);
  const crumbs = blogBreadcrumbs(segments, article);
  const articles = article ? topicArticles(article.topic).filter((item) => item.slug !== article.slug) : topicArticles(segments);
  const schema = {
    '@context': 'https://schema.org', '@graph': [
      { '@type': article ? 'BlogPosting' : segments.length ? 'CollectionPage' : 'Blog', '@id': `${SITE_URL}${path}#webpage`, url: `${SITE_URL}${path}`, name: entry.title, description: entry.description, inLanguage: 'en', dateModified: BLOG_UPDATED,
        isPartOf: { '@id': article ? `${SITE_URL}${blogPath(article.topic)}#webpage` : segments.length ? `${SITE_URL}${blogPath(segments.slice(0, -1))}#webpage` : `${SITE_URL}/#website` },
        ...(article ? { headline: article.title, datePublished: BLOG_UPDATED, author: { '@type': 'Organization', name: 'beIN MediTech', url: `${SITE_URL}/about` }, publisher: { '@id': `${SITE_URL}/#organization` }, mainEntityOfPage: `${SITE_URL}${path}`, image: [`${SITE_URL}/images/og-image.png`, `${SITE_URL}${blogCover(article).src}`], articleSection: findBlogTopic(article.topic)?.name, articleBody: [article.intro, ...article.sections.map((s) => `${s.title}\n${s.body}`), ...article.checklist].join('\n\n') } : {}),
      },
      { '@type': 'BreadcrumbList', itemListElement: crumbs.map((crumb, index) => ({ '@type': 'ListItem', position: index + 1, name: crumb.name, item: `${SITE_URL}${crumb.href}` })) },
      ...(!article ? [{ '@type': 'ItemList', numberOfItems: articles.length, itemListElement: articles.map((item, i) => ({ '@type': 'ListItem', position: i + 1, name: item.title, url: `${SITE_URL}${articlePath(item)}` })) }] : []),
    ],
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
    {article ? <BlogArticleView article={article} path={path} crumbs={crumbs} related={articles} /> : topic ? <BlogArchive topic={topic} path={path} crumbs={crumbs} articles={articles} /> : null}
  </>;
}
