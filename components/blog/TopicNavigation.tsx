import Link from 'next/link';
import { blogArticles, blogPath, childTopics, topicArticles, articlePath } from '@/lib/blog';

export default function TopicNavigation({ currentPath }: { currentPath: string }) {
  const isWithin = (path: string) => currentPath === path || currentPath.startsWith(`${path}/`);
  return <nav aria-label="Blog topics" className="journal-topic-nav">
    <h2>Blog sections</h2>
    <Link href="/blog" className="journal-all-posts" aria-current={currentPath === '/blog' ? 'page' : undefined}>
      <span>All articles</span><span className="journal-topic-count">{blogArticles.length}</span>
    </Link>
    {childTopics([]).map((category) => {
      const categoryPath = blogPath(category.segments);
      return <details key={`${currentPath}:${categoryPath}`} open={isWithin(categoryPath)} className="journal-category">
        <summary><span>{category.name}</span><span className="journal-topic-count">{topicArticles(category.segments).length}</span><span className="journal-toggle" aria-hidden="true" /></summary>
        <div className="journal-category-content">
          <Link href={categoryPath} aria-current={currentPath === categoryPath ? 'page' : undefined} className="journal-overview-link">Explore {category.name.toLowerCase()}</Link>
          {childTopics(category.segments).map((topic) => {
            const topicPath = blogPath(topic.segments);
            return <details key={`${currentPath}:${topicPath}`} open={isWithin(topicPath)} className="journal-subcategory">
              <summary><span>{topic.name}</span><span className="journal-topic-count">{topicArticles(topic.segments).length}</span><span className="journal-toggle" aria-hidden="true" /></summary>
              <div className="journal-subcategory-content">
                <Link href={topicPath} aria-current={currentPath === topicPath ? 'page' : undefined} className="journal-overview-link">All {topic.name.toLowerCase()} guides</Link>
                <ul>{topicArticles(topic.segments).map((article) => <li key={article.slug}>
                  <Link href={articlePath(article)} aria-current={currentPath === articlePath(article) ? 'page' : undefined}>{article.title}</Link>
                </li>)}</ul>
              </div>
            </details>;
          })}
        </div>
      </details>;
    })}
  </nav>;
}
