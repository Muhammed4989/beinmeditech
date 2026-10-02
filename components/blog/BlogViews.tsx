import Image from 'next/image';
import Link from 'next/link';
import { articlePublishedDate, articleUpdatedDate, formatBlogDate, blogCover, blogPath, childTopics, findBlogTopic, readingMinutes, type BlogArticle, type BlogTopic } from '@/lib/blog';
import { sectionId, type Breadcrumb, type ContentLink } from '@/lib/content';
import Breadcrumbs from '@/components/content/Breadcrumbs';
import ArticleCards from './ArticleCards';
import BlogSidebar, { ArticleContents } from './BlogSidebar';

function EquipmentLinks({ links }: { links: ContentLink[] }) {
  return <section className="journal-equipment-links" aria-label="Related equipment">
    <h2>From reading to the right equipment</h2>
    <p>Explore the equipment in this guide or discuss your requirements with our team.</p>
    <div>{links.map((link) => <Link key={link.href} href={link.href}>{link.label} <span aria-hidden="true">→</span></Link>)}<Link href="/request-quote">Request a quotation <span aria-hidden="true">→</span></Link></div>
  </section>;
}

export function BlogArchive({ topic, path, crumbs, articles }: { topic: BlogTopic; path: string; crumbs: Breadcrumb[]; articles: BlogArticle[] }) {
  const children = childTopics(topic.segments);
  return <div className="journal journal-archive">
    <section className="journal-hero">
      <div className="journal-container">
        <Breadcrumbs items={crumbs} />
        <div className="journal-hero-copy">
          <h1>{topic.segments.length ? topic.name : 'beIN MediTech Blog'}</h1>
          <p>{topic.description}</p>
          <details className="journal-introduction">
            <summary><span className="journal-read-more">Read more</span><span className="journal-read-less">Read less</span><span aria-hidden="true">+</span></summary>
            <div className="journal-introduction-body">
              <p>{topic.intro}</p>
              {topic.sections.map((section) => <section key={section.title}><h2>{section.title}</h2><p>{section.body}</p></section>)}
              {children.length > 0 && <nav aria-label="Explore this category" className="journal-child-topics">{children.map((child) => <Link key={blogPath(child.segments)} href={blogPath(child.segments)}>{child.name} <span aria-hidden="true">→</span></Link>)}</nav>}
            </div>
          </details>
        </div>
      </div>
    </section>
    <div className="journal-container journal-layout">
      <BlogSidebar currentPath={path} />
      <div className="journal-main">
        <section aria-labelledby="articles-heading">
          <header className="journal-list-heading"><h2 id="articles-heading">{topic.segments.length ? `${topic.name} articles` : 'Latest articles'}</h2><p>{articles.length} articles</p></header>
          <ArticleCards articles={articles} layout="list" />
        </section>
        <EquipmentLinks links={topic.equipment} />
      </div>
    </div>
  </div>;
}

export function BlogArticleView({ article, path, crumbs, related }: { article: BlogArticle; path: string; crumbs: Breadcrumb[]; related: BlogArticle[] }) {
  const cover = blogCover(article);
  const published = articlePublishedDate(article);
  const updated = articleUpdatedDate(article);
  return <div className="journal journal-article">
    <header className="journal-article-heading journal-container">
      <Breadcrumbs items={crumbs} />
      <div className="journal-article-title">
        <Link href={blogPath(article.topic)} className="journal-topic-tag">{findBlogTopic(article.topic)?.name}</Link>
        <h1>{article.title}</h1>
        <div className="journal-article-meta"><Link href="/about">By beIN MediTech</Link><span>Published <time dateTime={published}>{formatBlogDate(published)}</time></span>{updated !== published && <span>Updated <time dateTime={updated}>{formatBlogDate(updated)}</time></span>}<span>{readingMinutes(article)} min read</span></div>
      </div>
    </header>
    <div className="journal-container journal-layout">
      <BlogSidebar currentPath={path} article={article} />
      <div className="journal-main">
        <figure className="journal-cover"><Image src={cover.src} alt={cover.alt} width={1200} height={800} priority sizes="(max-width: 959px) 100vw, 848px" /><figcaption>AI-generated editorial image — not a photograph of a specific product or facility.</figcaption></figure>
        <article className="journal-article-body">
          <p className="journal-article-summary">{article.description}</p>
          <p>{article.intro}</p>
          <div className="journal-mobile-contents"><ArticleContents article={article} /></div>
          {article.sections.map((section) => <section key={section.title} id={sectionId(section.title)}><h2>{section.title}</h2><p>{section.body}</p></section>)}
          <section id="checklist" className="journal-checklist"><h2>Enquiry checklist</h2><ul>{article.checklist.map((item) => <li key={item}>{item}</li>)}</ul></section>
          <EquipmentLinks links={article.equipment} />
          <footer className="journal-article-footer"><span>Published by <Link href="/about">beIN MediTech</Link></span><Link href={blogPath(article.topic)}>More {findBlogTopic(article.topic)?.name.toLowerCase()} guides <span aria-hidden="true">→</span></Link></footer>
        </article>
        {related.length > 0 && <section className="journal-related" aria-labelledby="related-heading"><h2 id="related-heading">Read next</h2><ArticleCards articles={related} layout="related" /></section>}
      </div>
    </div>
  </div>;
}
