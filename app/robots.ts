import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // OpenAI
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'GPTBot', allow: '/' },
      // Anthropic (Claude-SearchBot / Claude-User power Claude's answer & search
      // features; ClaudeBot is the separate model-training crawler)
      { userAgent: 'Claude-SearchBot', allow: '/' },
      { userAgent: 'Claude-User', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      // Perplexity
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Perplexity-User', allow: '/' },
      // Google & Apple AI-training crawlers (separate from their regular search bots)
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'Applebot-Extended', allow: '/' },
      // Traditional search engines
      { userAgent: 'Googlebot', allow: '/', disallow: ['/api/'] },
      { userAgent: 'Bingbot', allow: '/', disallow: ['/api/'] },
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://beinmeditech.com/sitemap.xml',
    host: 'https://beinmeditech.com',
  };
}
