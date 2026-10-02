import Breadcrumbs from './Breadcrumbs';
import type { Breadcrumb } from '@/lib/content';

export default function PageIntro({ title, description, eyebrow, crumbs }: { title: string; description?: string; eyebrow?: string; crumbs: Breadcrumb[] }) {
  return <section className="page-intro">
    <div className="site-container">
      <Breadcrumbs items={crumbs} />
      {eyebrow && <p className="section-label">{eyebrow}</p>}
      <h1>{title}</h1>
      {description && <p className="page-intro-description">{description}</p>}
    </div>
  </section>;
}
