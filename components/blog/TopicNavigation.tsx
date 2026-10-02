import Link from 'next/link';
import { blogPath, childTopics, topicArticles, articlePath } from '@/lib/blog';

export default function TopicNavigation({ currentPath }: { currentPath: string }) {
  return <aside className="rounded-2xl border border-primary-100 bg-white p-5 lg:sticky lg:top-28">
    <nav aria-label="Blog topics">
      <Link href="/blog" className="mb-5 block font-bold text-primary-900" aria-current={currentPath === '/blog' ? 'page' : undefined}>Explore the blog</Link>
      <div className="space-y-3">{childTopics([]).map((category) => <details key={blogPath(category.segments)} open={currentPath.startsWith(`${blogPath(category.segments)}/`) || currentPath === blogPath(category.segments)} className="blog-topic">
        <summary className="cursor-pointer py-2 text-sm font-semibold text-primary-900">{category.name}</summary>
        <div className="ml-1 space-y-2 border-l border-primary-100 pl-4 pb-2">
          <Link href={blogPath(category.segments)} aria-current={currentPath === blogPath(category.segments) ? 'page' : undefined} className="block py-1 text-sm text-gray-600 hover:text-orange-700">Category overview</Link>
          {childTopics(category.segments).map((topic) => <div key={blogPath(topic.segments)}>
            <Link href={blogPath(topic.segments)} aria-current={currentPath === blogPath(topic.segments) ? 'page' : undefined} className="block py-2 text-sm font-semibold text-primary-600 hover:text-orange-700">{topic.name} <span className="text-gray-500">({topicArticles(topic.segments).length})</span></Link>
            {currentPath.startsWith(blogPath(topic.segments)) && <ul className="space-y-2 pb-3 pl-3">{topicArticles(topic.segments).map((article) => <li key={article.slug}><Link href={articlePath(article)} aria-current={currentPath === articlePath(article) ? 'page' : undefined} className="block py-1 text-sm leading-6 text-gray-600 hover:text-orange-700">{article.title}</Link></li>)}</ul>}
          </div>)}
        </div>
      </details>)}</div>
    </nav>
    <div className="mt-6 border-t border-primary-100 pt-5"><p className="text-sm leading-6 text-gray-600">Ready to turn a requirement into an enquiry?</p><Link href="/request-quote" className="mt-3 inline-block text-sm font-bold text-orange-700 hover:underline">Talk to our team</Link></div>
  </aside>;
}
