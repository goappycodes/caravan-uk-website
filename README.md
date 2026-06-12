# Caravan Support — Website Rebuild

Modern rebuild of [caravansupport.co.uk](https://caravansupport.co.uk) (Caravan Support Ltd, Malton, North Yorkshire — AWS Approved caravan & motorhome servicing) on Next.js. Replaces the legacy WordPress/Elementor site.

## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (design tokens in [globals.css](src/app/globals.css))
- **lucide-react** icons
- Fully static output — every route prerenders (SSG)

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Pages

| Route | Purpose |
|---|---|
| `/` | Home — hero, services, warranty promise, coverage, about, reviews, FAQs, quote form |
| `/services` | Services overview (image cards) |
| `/services/[slug]` | 6 SEO service pages (annual-caravan-service, motorhome-habitation-service, damp-check-and-repair, caravan-repairs, motor-movers, upgrades-solar-wifi-gas) |
| `/pricing` | Full published price list (from the client's June 2026 prices) |
| `/about` | Story, standards, holiday-park trust |
| `/contact` | Quote form, contact details, map — the conversion endpoint |

Planned next: location pages (York, Pickering, Scarborough…), blog/guides, online booking.

## Structure

- [src/lib/site.ts](src/lib/site.ts) — **single source of truth**: contact details, services (incl. detail-page content), price list, reviews, FAQs, nav. Edit content here.
- `src/components/` — section components (Hero, Services, Warranty, Coverage, About, Reviews, Faq, BookingCta, DampCallout), shared chrome (Header, Footer, MobileCallBar), inner-page kit (PageHeader, CtaBand), QuoteForm, `ui.tsx` primitives
- `public/images/` — stock placeholders (Unsplash/Pexels free licences, no attribution required). **Replace with real photography before launch** — especially the hero, engineer and workshop shots.

## SEO

LocalBusiness JSON-LD (home), Service + BreadcrumbList JSON-LD (service pages), FAQPage JSON-LD, per-page metadata/canonicals/OG, sitemap.xml, robots.txt, semantic H1s, en-GB.

## Before launch — outstanding items

1. **Wire the quote form** ([QuoteForm.tsx](src/components/QuoteForm.tsx)) to email/CRM — currently shows a client-side confirmation only (see TODO).
2. **Real photography** to replace the stock placeholders (hero caravan, engineer, workshop, parks; About has a slot for Harvey's photo — currently a monogram).
3. **Confirm with client**: all prices (taken from old site's list — note "Powrtouch Evolution Twin Auto £1,494" looks like a typo, cheaper than the Manual), opening hours (5:30pm used; old site also showed 5:00pm), AWS membership number (display next to badge; not found in the public AWS directory — verify).
4. **Old WordPress site**: indexed casino-spam post suggests compromise — clean up and 301-redirect old URLs (`/extra/` → `/pricing`, `/about-us/` → `/about`, `/contact-us/` → `/contact`, `/caravan-and-motorhome-servicing/` → `/services/annual-caravan-service`, etc.) at DNS cutover.
5. Re-add GA4 / Facebook Pixel if continuing (old site used G-J3BDN2ZXWS, pixel 363526472867736).
