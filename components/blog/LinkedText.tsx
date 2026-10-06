import Link from 'next/link';
import { linkedTextParts } from '@/lib/blog-editorial-links';
import type { ContentLink } from '@/lib/content';

// Server-rendered anchors with escaped React text, never arbitrary HTML.
export default function LinkedText({ text, links }: { text: string; links: ContentLink[] }) {
  return <>{linkedTextParts(text, links).map((part, index) => part.href
    ? part.href.startsWith('/')
      ? <Link key={index} href={part.href} prefetch={false} className="journal-inline-link">{part.text}</Link>
      : <a key={index} href={part.href} className="journal-inline-link" target="_blank" rel="noopener noreferrer">{part.text}<span className="sr-only"> (opens in a new tab)</span></a>
    : part.text)}</>;
}
