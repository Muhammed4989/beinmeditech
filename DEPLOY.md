# Deployment Guide — beIN Meditech on Vercel

## 1. Push to GitHub

```bash
cd "C:\Users\moham\Claude\Projects\BeinMeditech.com"
git init
git add .
git commit -m "Initial commit: beIN Meditech Next.js site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/beinmeditech.git
git push -u origin main
```

## 2. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (or create a free account)
2. Click **Add New → Project**
3. Import your GitHub repository (`beinmeditech`)
4. Vercel will auto-detect Next.js — click **Deploy**
5. Your site will be live at `https://beinmeditech.vercel.app` in ~2 minutes

## 3. Connect beinmeditech.com from name.com

Once deployed on Vercel:

### In Vercel:
1. Go to your project → **Settings → Domains**
2. Click **Add Domain**
3. Type `beinmeditech.com` and click **Add**
4. Also add `www.beinmeditech.com`
5. Vercel will show you the DNS records to add

### In name.com:
1. Log in to [name.com](https://www.name.com)
2. Go to your domain **beinmeditech.com → Manage → DNS Records**
3. **Delete** any existing A records or CNAME records for `@` and `www`
4. Add these records from Vercel:

| Type  | Host | Value                  | TTL  |
|-------|------|------------------------|------|
| A     | @    | 76.76.21.21            | 300  |
| CNAME | www  | cname.vercel-dns.com   | 300  |

5. Save. DNS propagation takes 5–30 minutes.
6. Back in Vercel, click **Verify** — once DNS propagates, your domain goes live with HTTPS automatically.

## 4. Configure Contact Form

The contact form currently points to Formspree (placeholder). To activate:

1. Go to [formspree.io](https://formspree.io) → create a free account
2. Create a new form → get your form ID
3. In `app/contact/page.tsx`, replace:
   ```
   action="https://formspree.io/f/placeholder"
   ```
   with your actual Formspree form URL.

## 5. Performance Checklist

- ✅ Static site generation (all pages pre-rendered)
- ✅ next/image for all images (auto-optimized)
- ✅ Security headers via vercel.json
- ✅ Immutable cache headers for static assets
- ✅ Schema.org JSON-LD on every page
- ✅ Open Graph + Twitter Card meta
- ✅ Sitemap at /sitemap.xml
- ✅ Robots.txt at /robots.txt
- ✅ llms.txt at /llms.txt (AI engine readability)
- ✅ GTM-WVK83TB5 preserved
- ✅ Old URL redirects (301) for SEO preservation
- ✅ Semantic HTML5 throughout
