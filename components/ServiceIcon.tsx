const paths: Record<string, string> = {
  equipment: 'M4 4h16v11H4z M8 20h8 M12 15v5 M7 10h2l2-3 2 6 2-3h2',
  consultation: 'M3 4h18v12H3z M8 20h8 M12 16v4 M7 8h10 M7 12h6',
  training: 'M3 5h18v12H3z M12 17v4 M8 21h8 M8 9l3 3 5-5',
  software: 'M8 5L2 12l6 7 M16 5l6 7-6 7 M14 3l-4 18',
  integration: 'M3 3h6v6H3z M15 15h6v6h-6z M15 3h6v6h-6z M3 15h6v6H3z M9 6h6 M6 9v6 M18 9v6 M9 18h6',
  check: 'M5 12l4 4L19 6',
  support: 'M4 13v-2a8 8 0 0116 0v2 M4 12H2v6h4v-6H4 M20 12h2v6h-4v-6h2 M18 18v2h-6',
  globe: 'M21 12a9 9 0 11-18 0 9 9 0 0118 0 M3 12h18 M12 3c5 5 5 13 0 18-5-5-5-13 0-18',
};
export default function ServiceIcon({ name, className = '' }: { name: string; className?: string }) {
  return <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name] || paths.equipment} /></svg>;
}
