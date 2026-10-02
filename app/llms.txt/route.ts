import { aiReference } from '@/lib/ai-reference';

export const dynamic = 'force-static';
export function GET() {
  return new Response(aiReference(), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
