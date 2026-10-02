import Link from 'next/link';
import { articlePath, findBlogTopic, readingMinutes, type BlogArticle } from '@/lib/blog';

export default function ArticleCards({ articles }: { articles: BlogArticle[] }) {
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
