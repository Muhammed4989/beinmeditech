// Server-side only. Production can never opt into fictional inventory or claims.
// SITE_RELEASE_MODE=public lets a Preview exercise the exact public presentation.
export const publicSite = process.env.VERCEL_ENV === 'production' || process.env.SITE_RELEASE_MODE === 'public';
