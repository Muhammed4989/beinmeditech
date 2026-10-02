import Link from 'next/link';
import Image from 'next/image';
import { articlePublishedDate, formatBlogDate, articlePath, blogPath, blogCover, findBlogTopic, readingMinutes, type BlogArticle } from '@/lib/blog';

export default function ArticleCards({ articles, layout = 'cards' }: { articles: BlogArticle[]; layout?: 'cards' | 'list' | 'related' }) {
  if (layout !== 'cards') return <div className={layout === 'list' ? 'journal-list' : 'journal-related-grid'}>
    {articles.map((article) => {
      const cover = blogCover(article);
      return <article key={articlePath(article)} className={layout === 'list' ? 'journal-list-item' : 'journal-related-item'}>
        <Link href={articlePath(article)} className="journal-thumbnail" tabIndex={-1} aria-hidden="true" prefetch={false}>
          <Image src={cover.src} alt="" width={1200} height={800} sizes={layout === 'list' ? '(max-width: 639px) 100vw, 240px' : '(max-width: 639px) 100vw, 400px'} />
        </Link>
        <div className="journal-list-copy">
          <Link href={blogPath(article.topic)} className="journal-topic-tag">{findBlogTopic(article.topic)?.name}</Link>
          <h3><Link href={articlePath(article)} prefetch={false}>{article.title}</Link></h3>
          <p>{article.description}</p>
          <div className="journal-list-meta"><time dateTime={articlePublishedDate(article)}>{formatBlogDate(articlePublishedDate(article))}</time><span aria-hidden="true">·</span><span>{readingMinutes(article)} min read</span></div>
        </div>
      </article>;
    })}
  </div>;
  return <div className="grid gap-5 md:grid-cols-2">
    {articles.map((article) => <article key={articlePath(article)} className="content-card flex flex-col p-6 sm:p-7">
      <div className="mb-5 flex flex-wrap items-center gap-3 text-sm text-gray-500">
        <span className="font-semibold text-primary-600">{findBlogTopic(article.topic)?.name}</span>
        <span aria-hidden="true">·</span><span>{readingMinutes(article)} min read</span>
      </div>
      <h3 className="text-xl font-bold leading-snug text-primary-900"><Link href={articlePath(article)} className="hover:text-orange-700">{article.title}</Link></h3>
      <p className="mt-3 flex-1 leading-7 text-gray-600">{article.description}</p>
      <Link href={articlePath(article)} className="mt-6 text-sm font-bold text-orange-700 underline-offset-4 hover:underline" aria-label={`Read: ${article.title}`}>Read the guide</Link>
    </article>)}
  </div>;
}
