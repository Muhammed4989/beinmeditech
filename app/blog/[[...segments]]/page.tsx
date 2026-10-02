import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SITE_URL } from '@/lib/catalog';
import { BLOG_UPDATED, articlePath, blogArticles, blogBreadcrumbs, blogPath, blogTopics, childTopics, findBlogArticle, findBlogTopic, readingMinutes, topicArticles } from '@/lib/blog';
import { jsonLd, sectionId } from '@/lib/content';
import Breadcrumbs from '@/components/content/Breadcrumbs';
import ArticleCards from '@/components/blog/ArticleCards';
import TopicNavigation from '@/components/blog/TopicNavigation';

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
  const children = childTopics(segments);
  const topicLabel = article ? findBlogTopic(article.topic)?.name : segments.length === 0 ? 'beIN MediTech Journal' : segments.length === 1 ? 'Explore a subject' : 'In-depth buying guides';
  const schema = {
    '@context': 'https://schema.org', '@graph': [
      { '@type': article ? 'BlogPosting' : segments.length ? 'CollectionPage' : 'Blog', '@id': `${SITE_URL}${path}#webpage`, url: `${SITE_URL}${path}`, name: entry.title, description: entry.description, inLanguage: 'en', dateModified: BLOG_UPDATED,
        isPartOf: { '@id': article ? `${SITE_URL}${blogPath(article.topic)}#webpage` : segments.length ? `${SITE_URL}${blogPath(segments.slice(0, -1))}#webpage` : `${SITE_URL}/#website` },
        ...(article ? { headline: article.title, datePublished: BLOG_UPDATED, author: { '@type': 'Organization', name: 'beIN MediTech', url: `${SITE_URL}/about` }, publisher: { '@id': `${SITE_URL}/#organization` }, mainEntityOfPage: `${SITE_URL}${path}`, image: `${SITE_URL}/images/og-image.png`, articleSection: findBlogTopic(article.topic)?.name, articleBody: [article.intro, ...article.sections.map((s) => `${s.title}\n${s.body}`), ...article.checklist].join('\n\n') } : {}),
      },
      { '@type': 'BreadcrumbList', itemListElement: crumbs.map((crumb, index) => ({ '@type': 'ListItem', position: index + 1, name: crumb.name, item: `${SITE_URL}${crumb.href}` })) },
      ...(!article ? [{ '@type': 'ItemList', numberOfItems: articles.length, itemListElement: articles.map((item, i) => ({ '@type': 'ListItem', position: i + 1, name: item.title, url: `${SITE_URL}${articlePath(item)}` })) }] : []),
    ],
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
    <section className="border-b border-primary-100 bg-primary-50 pt-28 pb-12 sm:pt-32 sm:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-gray-600"><Breadcrumbs items={crumbs} /></div>
        <p className="mb-4 text-sm font-bold uppercase tracking-widest text-orange-700">{topicLabel}</p>
        <h1 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight text-primary-900 sm:text-5xl">{entry.title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">{entry.description}</p>
        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-600"><Link href="/about" className="font-semibold text-primary-600 hover:underline">By beIN MediTech</Link><span>Updated <time dateTime={BLOG_UPDATED}>2 October 2026</time></span><span>{article ? `${readingMinutes(article)} min read` : `${articles.length} practical guides`}</span></div>
      </div>
    </section>
    <div className="mx-auto grid max-w-7xl gap-9 px-4 py-12 sm:px-6 lg:grid-cols-[250px_minmax(0,1fr)] lg:px-8 lg:py-16">
      <div>
        <details className="rounded-xl border border-primary-100 lg:hidden"><summary className="cursor-pointer p-4 font-semibold text-primary-900">Browse blog topics</summary><TopicNavigation currentPath={path} /></details>
        <div className="hidden lg:block"><TopicNavigation currentPath={path} /></div>
      </div>
      <div className="min-w-0">
        <article>
          <p className="max-w-3xl text-lg leading-8 text-gray-700">{entry.intro}</p>
          {children.length > 0 && <section className="mt-10" aria-labelledby="subtopics-heading"><h2 id="subtopics-heading" className="mb-5 text-2xl font-bold text-primary-900">{segments.length ? 'Explore this category' : 'Browse by topic'}</h2><div className="grid gap-4 sm:grid-cols-2">{children.map((child) => <Link href={blogPath(child.segments)} key={blogPath(child.segments)} className="content-card p-6"><span className="text-sm font-semibold text-orange-700">{topicArticles(child.segments).length} guides</span><h3 className="mt-2 text-xl font-bold text-primary-900">{child.name}</h3><p className="mt-3 leading-7 text-gray-600">{child.description}</p></Link>)}</div></section>}
          {article && <nav aria-label="On this page" className="my-9 rounded-2xl border border-primary-100 bg-primary-50 p-6"><p className="mb-3 font-bold text-primary-900">In this guide</p><ol className="list-decimal space-y-2 pl-5 text-primary-600">{entry.sections.map((section) => <li key={section.title}><a href={`#${sectionId(section.title)}`} className="leading-7 hover:underline">{section.title}</a></li>)}<li><a href="#checklist" className="leading-7 hover:underline">Enquiry checklist</a></li></ol></nav>}
          <div className="my-10 max-w-3xl space-y-9">{entry.sections.map((section) => <section key={section.title} id={sectionId(section.title)} className="scroll-mt-28"><h2 className="mb-4 text-2xl font-bold text-primary-900">{section.title}</h2><p className="leading-8 text-gray-700">{section.body}</p></section>)}</div>
          {article && <section id="checklist" className="scroll-mt-28 rounded-2xl border-l-4 border-orange bg-primary-50 p-6 sm:p-8"><h2 className="text-2xl font-bold text-primary-900">Enquiry checklist</h2><ul className="mt-5 list-disc space-y-3 pl-5 leading-7 text-gray-700">{article.checklist.map((item) => <li key={item}>{item}</li>)}</ul></section>}
        </article>
        <section className="mt-12" aria-labelledby="reading-heading"><div className="mb-6 flex flex-wrap items-center justify-between gap-3"><h2 id="reading-heading" className="text-2xl font-bold text-primary-900">{article ? 'Continue reading' : 'Guides in this section'}</h2>{article && <Link href={blogPath(article.topic)} className="text-sm font-bold text-orange-700 hover:underline">All {findBlogTopic(article.topic)?.name.toLowerCase()} guides</Link>}</div><ArticleCards articles={articles} /></section>
        <section className="mt-12 rounded-2xl bg-primary-600 p-7 text-white sm:p-9"><p className="text-sm font-bold uppercase tracking-wider text-orange-100">From guide to equipment</p><h2 className="mt-3 text-2xl font-bold">Put your requirements into a quotation</h2><p className="mt-3 max-w-2xl leading-7 text-primary-100">Browse the relevant equipment or share your configuration with our sourcing team.</p><div className="mt-6 flex flex-wrap gap-3">{entry.equipment.map((link) => <Link key={link.href} href={link.href} className="rounded-lg border border-primary-300 px-4 py-3 text-sm font-semibold hover:bg-white hover:text-primary-900">{link.label}</Link>)}</div></section>
      </div>
    </div>
  </>;
}
