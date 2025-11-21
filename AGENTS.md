# AGENTS.md

## Project name

**Hair by Anjali — Pine Bush, NY**

## Primary goal

Build a fast, credible local-service website that ranks highly for:

* “hairstylist in pine bush”
* “hair salon pine bush ny”
* “hairstylist near me” (from Pine Bush / Montgomery / Walden area)
* service + location queries (e.g., “balayage pine bush,” “women’s haircut pine bush ny”).

Local search ranking is driven mainly by **relevance, proximity, and prominence/popularity**; this site must maximize relevance and prominence signals. ([Local Falcon][1])

## Scope

A small, high-quality marketing site with:

1. Home page (location-optimized)
2. Services (overview + individual service pages)
3. About Anjali
4. Gallery / Portfolio
5. Reviews / Testimonials
6. Book / Contact (CTA first)
7. FAQ (local + service questions)
8. Blog / Tips (optional but recommended for ongoing ranking)

## Constraints / truthfulness

* Anjali is **not yet NY-licensed** and may not have a final salon seat.
* Do **not** claim she is currently licensed in New York or currently taking appointments in a specific salon unless the user provides that later.
* Use wording like:

  * “Now building my Pine Bush clientele”
  * “Booking opens as soon as NY licensure is finalized”
  * “Join the waitlist / request an appointment”
* All address/phone must be editable in a single config file, so it can be switched once the salon seat is confirmed.

## Tech expectations

Use a modern, SEO-friendly stack that supports static generation and excellent Core Web Vitals.
Preferred:

* Next.js App Router + TypeScript
* TailwindCSS
* Static generation where possible
* Deployed on Vercel or equivalent

If you use another stack, keep these non-negotiables:

* Server-rendered or statically generated HTML
* Clean URLs
* Full control of meta tags, schema, sitemap, robots.

## Brand / voice

* Clean, modern, warm, professional.
* Emphasize *specialty + locality*: “Pine Bush stylist specializing in [x].”
* Avoid generic salon-stock language. Be specific and human.

## Information architecture / URLs

Use short, keyword-rich slugs.

Required routes:

* `/`
* `/services`
* `/services/haircut-pine-bush-ny`
* `/services/hair-color-pine-bush-ny`
* `/services/balayage-pine-bush-ny` (if offered)
* `/services/bridal-hair-hudson-valley` (if offered)
* `/about`
* `/gallery`
* `/reviews`
* `/book` (or `/contact`)
* `/faq`
* `/blog` + `/blog/[slug]` (optional)

Each service page must be **location-specific**, not a thin duplicate. Include:

* Who it’s for
* Process
* What makes Anjali different
* Local references (“Pine Bush,” “Hudson Valley,” nearby towns)
* Before/after images
  This aligns with local SEO guidance to create location-specific service pages. ([Ronkot][2])

## SEO requirements (must implement)

### 1. On-page keyword targeting

For each page:

* **One clear primary keyword** in:

  * `<title>`
  * H1
  * first 100 words
  * meta description
  * image alt text (where relevant)
* Sprinkle close variants naturally.
* Avoid keyword stuffing.

Example for Home:

* Primary: “Hairstylist in Pine Bush, NY”
* Variants: “hair stylist Pine Bush,” “Hudson Valley hairstylist,” “Montgomery NY hair stylist.”

### 2. Title tags & meta descriptions

* Keep titles ~50–60 chars, front-load location keyword.
* Meta descriptions ~140–160 chars, include CTA + location.

Example Home title:

* “Hairstylist in Pine Bush, NY | Hair by Anjali”

### 3. Schema / structured data (critical)

Add JSON-LD schema site-wide:

* Use **`@type: "HairSalon"`** (not generic LocalBusiness), with NAP, geo, services, hours, price range. ([Schema.org][3])
* If final salon address unknown, use current service area + “available by appointment / waitlist,” and update later.

Include at minimum:

* `name`
* `url`
* `image`
* `telephone`
* `address` (or serviceArea if needed)
* `geo`
* `priceRange`
* `openingHoursSpecification`
* `sameAs` (Instagram, Facebook)

Provide a single `schema.ts` (or JSON) source of truth.

### 4. NAP consistency

The site must show **Name / Address / Phone** consistently in:

* Header or footer
* Contact page
* Schema markup
  NAP consistency is a local ranking signal. ([Ronkot][2])

### 5. Reviews & prominence signals

* Build a `/reviews` page.
* Support embedding Google reviews later (placeholder block ok).
* Include testimonials that mention specific services and Pine Bush when possible.
  Reviews and popularity strongly influence local prominence. ([Ronkot][2])

### 6. Performance / Core Web Vitals

* Mobile-first responsive.
* Target Lighthouse 90+ on mobile:

  * optimize images (next/image or equivalent)
  * lazy load non-critical media
  * avoid layout shifts
    Mobile usability + speed matter for local SEO. ([Ronkot][2])

### 7. Local backlinks support

Add a lightweight “Community / Partners” section:

* List local towns served.
* Space to add partner logos/links later.
  Local backlinks help ranking. ([LPagery][4])

### 8. Sitemap & robots

* Generate `sitemap.xml` including all services/blog posts.
* `robots.txt` allow indexing.
* Canonical tags on all pages.

### 9. Open Graph / social

* OG title/description/image per page.
* Twitter cards.
* Default share image with brand + Pine Bush.

## Page content requirements

### Home (`/`)

Must include:

* H1: “Hairstylist in Pine Bush, NY”
* Short intro with specialty + locality.
* Primary CTA above the fold: “Join waitlist / Request appointment.”
* 3–6 service tiles linking to service pages.
* Proof blocks:

  * Before/after carousel
  * Short testimonials
  * “Why Pine Bush clients choose Anjali” (3 bullets)
* Towns served list.

### Services overview (`/services`)

* Intro paragraph targeting “hair services in Pine Bush, NY.”
* Cards linking to each service page.
* Pricing as “starting at” if you don’t have final numbers.

### Individual service pages

Template rules:

* Unique H1 including service + location.
* 600–1200 words of useful content.
* Sections:

  1. What this service is
  2. Who it’s for
  3. Anjali’s approach / differentiator
  4. Typical timing + maintenance
  5. Price range
  6. FAQs
  7. CTA to book

### About (`/about`)

* Personal story (moved to Pine Bush, building clientele).
* Credentials without claiming NY license if not final.
* 2–3 candid photos.
* Emphasize specialties.

### Gallery (`/gallery`)

* High-quality, compressed images.
* Each image has descriptive alt text with service + location where natural.

### Book/Contact (`/book`)

* Simple form:

  * Name
  * Email
  * Phone
  * Service interest
  * Preferred days/times
  * Notes
* Add “what happens next” text.
* If possible, integrate Calendly/booking later via config flag.

### FAQ (`/faq`)

Questions that help ranking:

* “How do I book a hairstylist in Pine Bush?”
* “Do you take new clients in Pine Bush, NY?”
* “What’s the difference between balayage and highlights?”
* “How often should I refresh my color?”
  Answer plainly, locally.

### Blog (optional)

If built:

* 6–10 starter posts targeting:

  * Hair care tips for Hudson Valley weather
  * “Best low-maintenance color for busy moms in Pine Bush”
  * “Wedding hair timeline for Hudson Valley brides”
* Internal link to services and book page.

## Components / utilities to include

* `SEOHead` component to standardize meta.
* `LocalBusinessSchema` component.
* `config/site.ts` for NAP, service area, socials, prices.
* `ImageWithAlt` helper to enforce alt text.
* `CTAButton` consistent style.

## Acceptance checklist

The build is done when:

* All required routes exist and render meaningful content.
* Each page has correct title, H1, meta, OG tags.
* JSON-LD HairSalon schema validates.
* Sitemap + robots present.
* Lighthouse mobile scores are strong with no major CWV issues.
* No false licensure/address claims.
* Local keyword targeting is implemented naturally throughout.

## Future hooks (leave placeholders)

* Google Business Profile link + map embed once address confirmed. GBP optimization is a primary local SEO lever. ([Ronkot][2])
* Review widget swap-in.
* Partner logos/backlinks.
* Online booking system integration.
