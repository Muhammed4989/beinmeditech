import BrandLogo from '@/components/BrandLogo';
import Link from 'next/link';
import type { BlogArticle } from '@/lib/blog';
import { sectionId } from '@/lib/content';
import TopicNavigation from './TopicNavigation';

export function ArticleContents({ article }: { article: BlogArticle }) {
  return <nav aria-label="On this page" className="journal-contents">
    <h2>In this article</h2>
    <ol>{article.sections.map((section) => <li key={section.title}><a href={`#${sectionId(section.title)}`}>{section.title}</a></li>)}<li><a href="#checklist">Enquiry checklist</a></li></ol>
  </nav>;
}

function AuthorCard() {
  return <section className="journal-author-card" aria-label="About the publisher">
    <Link href="/about"><BrandLogo /><h2>By beIN MediTech</h2></Link>
    <p>Practical equipment and purchasing guides from our medical technology team.</p>
    <Link href="/about" className="journal-author-link">About our company <span aria-hidden="true">→</span></Link>
  </section>;
}

export default function BlogSidebar({ currentPath, article }: { currentPath: string; article?: BlogArticle }) {
  return <aside className="journal-sidebar">
    <details className="journal-mobile-topics"><summary>Browse blog sections <span aria-hidden="true">+</span></summary><TopicNavigation currentPath={currentPath} /></details>
    <div className="journal-desktop-sidebar">
      <TopicNavigation currentPath={currentPath} />
      {article && <ArticleContents article={article} />}
      <AuthorCard />
    </div>
  </aside>;
}
