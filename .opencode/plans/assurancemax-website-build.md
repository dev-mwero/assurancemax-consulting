# AssuranceMax Consulting Ltd — Website Build Plan

## Summary

Build a premium, modern, conversion-focused corporate website for AssuranceMax Consulting Ltd, a professional consulting firm specializing in financial management, accounting, governance, compliance, business advisory, and business transformation. The website is an inspired redesign based on the Biopic Ltd reference site (https://biopic-sme-growth.lovable.app), significantly improved in UX, UI, conversion, engineering, and brand expression. The stack is Next.js 16.3.3, React 19, Tailwind CSS 4, shadcn/ui, Lucide icons, React Hook Form + Zod, with Biome for linting. The official slogan is "Where Expertise Inspires Confidence."

---

## 1. Scope

### IN SCOPE

- Complete homepage with all sections (Hero, Trust, Services, Why AssuranceMax, Financial Clarity, Process, Vision/Mission, Core Values, Industries, Testimonials placeholder, CTA, Contact preview, Footer)
- About page (`/about`)
- Services overview page (`/services`)
- Individual service pages (`/services/[slug]`) for 7 service areas
- Contact page (`/contact`) with form, validation, API
- Privacy and Terms placeholder pages (`/privacy`, `/terms`)
- Versioned API routes: `/api/v1/contact`, `/api/v1/inquiries`, `/api/v1/newsletter`
- Design system (color tokens, typography, components)
- shadcn/ui components (Button, Card, Badge, Input, Textarea, Select, Form, Sheet, Accordion, Separator)
- Responsive navigation with mobile Sheet drawer
- Comprehensive footer
- SEO (metadata, sitemap, robots, Open Graph, structured data)
- Accessibility (WCAG 2.2 AA target)
- Error handling (error.tsx, global-error.tsx, not-found.tsx)
- .env.example with configuration placeholders
- All company content as data-driven constants (no hardcoded content in components)

### OUT OF SCOPE

- CMS integration (content will be in TypeScript constants, designed for future CMS migration)
- Authentication / client portal
- Blog / resources section (empty blog worse than none)
- Database (no server-side storage needed for MVP)
- Payment processing
- Analytics integration (can be added later)
- Multi-language support
- E2E test framework setup (manual QA for MVP)
- Image generation or stock photo sourcing (placeholder strategy with Unsplash or similar)
- Email sending implementation (API will validate and return success; actual email service is a deployment concern)
- Social media feeds

---

## 2. Architecture

### 2.1 Route Structure

```
src/app/
├── (marketing)/
│   ├── layout.tsx              # Marketing layout (navbar + footer)
│   ├── page.tsx                # Homepage
│   ├── about/
│   │   └── page.tsx            # About page
│   ├── services/
│   │   ├── page.tsx            # Services overview
│   │   └── [slug]/
│   │       └── page.tsx        # Individual service page
│   ├── contact/
│   │   └── page.tsx            # Contact page
│   ├── privacy/
│   │   └── page.tsx            # Privacy policy placeholder
│   └── terms/
│       └── page.tsx            # Terms placeholder
│
├── api/
│   └── v1/
│       ├── contact/
│       │   └── route.ts        # POST contact form
│       ├── inquiries/
│       │   └── route.ts        # POST service inquiries
│       └── newsletter/
│           └── route.ts        # POST newsletter signup
│
├── layout.tsx                  # Root layout (html, body, fonts)
├── error.tsx                   # Root error boundary (Client Component)
├── global-error.tsx            # Global error (Client Component, includes html/body)
├── not-found.tsx               # 404 page
├── robots.ts                   # Robots.txt
├── sitemap.ts                  # Sitemap
└── globals.css                 # Tailwind v4 theme + CSS variables
```

### 2.2 Component Structure

```
src/components/
├── ui/                         # shadcn/ui primitives
│   ├── button.tsx
│   ├── card.tsx
│   ├── badge.tsx
│   ├── input.tsx
│   ├── textarea.tsx
│   ├── select.tsx
│   ├── form.tsx
│   ├── sheet.tsx
│   ├── accordion.tsx
│   ├── separator.tsx
│   ├── label.tsx
│   └── sonner.tsx              # Toast notifications
│
├── layout/
│   ├── navbar.tsx              # Desktop + mobile nav (Client Component)
│   ├── mobile-navigation.tsx   # Sheet-based mobile menu (Client Component)
│   ├── footer.tsx              # Comprehensive footer (Server Component)
│   └── logo.tsx                # AssuranceMax logo/wordmark
│
├── marketing/
│   ├── hero.tsx                # Hero section
│   ├── trust-section.tsx       # Trust/credibility intro
│   ├── services-overview.tsx   # Services grid on homepage
│   ├── service-card.tsx        # Individual service card
│   ├── why-assurancemax.tsx    # Why choose us section
│   ├── financial-clarity.tsx   # Financial clarity story
│   ├── process-section.tsx     # How we work (5 steps)
│   ├── vision-mission.tsx      # Vision & mission section
│   ├── core-values.tsx         # 7 core values with icons
│   ├── industries-section.tsx  # Industries/organizations we support
│   ├── testimonials.tsx        # Testimonials section (placeholder-aware)
│   ├── cta-section.tsx         # Call to action section
│   └── contact-preview.tsx     # Contact section on homepage
│
├── sections/
│   ├── page-header.tsx         # Reusable page header (title + breadcrumb)
│   └── section-wrapper.tsx     # Consistent section container
│
└── forms/
    ├── contact-form.tsx        # Contact form (Client Component)
    └── newsletter-form.tsx     # Newsletter signup (Client Component)
```

### 2.3 Data & Types

```
src/types/
├── service.ts                  # Service, ServiceCategory types
├── core-value.ts               # CoreValue type
├── testimonial.ts              # Testimonial type
├── process-step.ts             # ProcessStep type
├── industry.ts                 # Industry type
├── api.ts                      # ApiResponse<T>, API error types
└── form.ts                     # Form state types

src/lib/
├── utils.ts                    # cn() utility for shadcn/ui
├── constants.ts                # Site-wide constants (name, slogan, contact info)
├── validations/
│   ├── contact.ts              # Zod schema for contact form
│   ├── inquiries.ts            # Zod schema for inquiries
│   └── newsletter.ts           # Zod schema for newsletter
└── api/
    └── responses.ts            # Typed API response helpers

src/data/
├── services.ts                 # All service data (type-safe, CMS-ready)
├── core-values.ts              # Core values data
├── testimonials.ts             # Testimonial placeholders
├── process-steps.ts            # How We Work steps
├── industries.ts               # Industries data
└── site.ts                     # Site metadata, URLs, OG config
```

### 2.4 Data Flow

```
src/data/*.ts (static data)
    ↓ imported by
src/components/marketing/*.tsx (section components)
    ↓ rendered by
src/app/(marketing)/page.tsx (homepage)
    ↓ wrapped in
src/app/(marketing)/layout.tsx (navbar + footer)
    ↓ wrapped in
src/app/layout.tsx (root: html, body, fonts, metadata)
```

API flow:
```
Client Form (React Hook Form + Zod)
    ↓ POST /api/v1/contact
Route Handler (validates with Zod server-side)
    ↓ returns
Typed ApiResponse<T> (consistent response shape)
```

---

## 3. What To Do

### 3.1 Foundation Setup

**Task 1: Install dependencies**
```bash
npx shadcn@latest init
# Select: New York style, neutral base color, CSS variables enabled
# It will install: clsx, tailwind-merge, class-variance-authority, lucide-react

npx shadcn@latest add button card badge input textarea select label separator accordion sheet form sonner

npm install react-hook-form @hookform/resolvers zod
```

**Task 2: Configure globals.css with design tokens**
- Define CSS custom properties for the AssuranceMax color palette
- Map to Tailwind via `@theme inline` (Tailwind v4 pattern)
- Include animation import (`tw-animate-css` for shadcn/ui)
- Define typography scale

**Task 3: Create lib/utils.ts**
- `cn()` function using `clsx` + `tailwind-merge`

**Task 4: Create .env.example**
```
# Contact form
CONTACT_EMAIL=
CONTACT_FORM_ENABLED=true

# Newsletter (if implemented)
NEWSLETTER_API_KEY=
NEWSLETTER_LIST_ID=

# Site
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=AssuranceMax Consulting Ltd
```

**Task 5: Create site constants (src/lib/constants.ts)**
- Company name, short name, slogan
- Vision, mission statements
- Contact placeholders (clearly marked as needing verification)
- Social links placeholders

### 3.2 Design System

**Color Palette (Financial Consulting Brand)**
```css
@theme inline {
  /* Primary: Deep Navy — Trust, Authority */
  --color-primary: oklch(0.25 0.08 250);
  --color-primary-foreground: oklch(0.98 0 0);

  /* Secondary: Warm Teal — Expertise, Growth */
  --color-secondary: oklch(0.45 0.12 175);
  --color-secondary-foreground: oklch(0.98 0 0);

  /* Accent: Restrained Gold — Quality, Confidence */
  --color-accent: oklch(0.72 0.12 80);
  --color-accent-foreground: oklch(0.15 0.02 80);

  /* Background: Clean White */
  --color-background: oklch(1 0 0);
  --color-foreground: oklch(0.18 0.02 250);

  /* Muted: Warm Gray */
  --color-muted: oklch(0.96 0.01 80);
  --color-muted-foreground: oklch(0.45 0.02 250);

  /* Border */
  --color-border: oklch(0.88 0.01 250);

  /* Destructive */
  --color-destructive: oklch(0.55 0.2 25);
  --color-destructive-foreground: oklch(0.98 0 0);

  /* Card */
  --color-card: oklch(1 0 0);
  --color-card-foreground: oklch(0.18 0.02 250);

  /* Radius */
  --radius: 0.625rem;
}
```

**Typography: Inter** (or Geist — both are clean, professional, excellent readability)
- Hero: 3.5rem / 700 weight (desktop), 2.25rem (mobile)
- Section headings: 2.25rem / 700
- Subheadings: 1.25rem / 600
- Body: 1rem / 400, line-height 1.6
- Small/caption: 0.875rem

**Button Variants**
- `default`: Primary navy, white text
- `secondary`: Teal, white text
- `outline`: Navy border, navy text
- `ghost`: Transparent, navy text
- `accent`: Gold background, dark text

### 3.3 Homepage Sections (Build Order)

**Section 1: Hero**
- Full-width, professional background (gradient or subtle pattern)
- Slogan: "Where Expertise Inspires Confidence" (large, prominent)
- Supporting statement about financial management, governance, compliance, transformation
- Two CTAs: "Book a Consultation" (primary) + "Explore Our Services" (secondary)
- NO fabricated stats, NO fake "trusted by X companies"
- Server Component

**Section 2: Trust Introduction**
- Brief trust statement about professional approach
- Use Lucide icons: ShieldCheck, BadgeCheck, LockKeyhole
- 3-4 trust pillars: Expertise, Confidentiality, Compliance, Client Focus
- NO fabricated numbers or claims

**Section 3: Services Overview**
- 7 service cards in responsive grid (3 cols desktop, 1 col mobile)
- Each card: icon, title, short description, "Learn More" link
- Data-driven from src/data/services.ts

**Section 4: Why AssuranceMax**
- 6 reasons in 2x3 grid
- Expertise, Practical Solutions, Accountability, Confidentiality, Client Focus, Long-Term Perspective
- Each with Lucide icon, title, description

**Section 5: Financial Clarity Story**
- Visual narrative showing the journey:
  Accurate Records → Financial Visibility → Better Decisions → Stronger Controls → Compliance → Sustainable Growth
- Could be a vertical timeline or horizontal flow with arrows

**Section 6: How We Work (Process)**
- 5 steps: Understand, Assess, Advise, Implement, Support
- Numbered, with Lucide icons, title, description
- Horizontal on desktop, vertical on mobile

**Section 7: Vision & Mission**
- Editorial layout (not generic cards)
- Strong typography, generous whitespace
- Vision and mission as blockquotes or highlighted text

**Section 8: Core Values**
- 7 values in responsive grid
- Each: Lucide icon, title, concise description
- Integrity, Professionalism, Accountability, Innovation, Client Focus, Reliability, Confidentiality

**Section 9: Industries**
- Broad categories: SMEs, Startups, Professional Services, Retail, Hospitality, Construction, NGOs, Growing Enterprises
- Grid of badges or minimal cards

**Section 10: Testimonials**
- Build the component architecture
- If no real testimonials: render a placeholder section with a note "[Testimonials to be added when available]"
- DO NOT fabricate testimonials

**Section 11: CTA Section**
- Strong headline encouraging consultation
- 3 benefit bullets (free consultation, personalized approach, ongoing support)
- Primary CTA button

**Section 12: Contact Preview**
- Contact details (placeholders clearly marked)
- Small form or link to /contact
- Map placeholder if applicable

### 3.4 Navigation

**Desktop**
- Left: Logo/wordmark "AssuranceMax"
- Center: Home, About, Services (with dropdown for individual services), Contact
- Right: "Book a Consultation" CTA button
- Sticky header with subtle backdrop blur
- Client Component (needs pathname detection, scroll behavior)

**Mobile**
- Hamburger icon → shadcn Sheet (slide from left)
- Full navigation links
- CTA button at bottom of sheet
- Accessible: focus trap, escape to close, aria labels

### 3.5 Footer

- 4-column layout (desktop): Brand, Services, Quick Links, Contact
- Brand column: Logo, slogan, brief description
- Services: Links to all 7 services
- Quick Links: Home, About, Contact, Privacy, Terms
- Contact: Placeholder email, phone, address (marked as needing verification)
- Social links: placeholder
- Bottom bar: Copyright, slogan

### 3.6 Inner Pages

**About Page**
- Page header with breadcrumb
- Who We Are narrative
- Vision (blockquote)
- Mission (blockquote)
- Core Values (reused component)
- Approach section
- Why Work With Us
- NO fabricated founding year, team size, founder bio, certifications

**Services Overview Page**
- Page header
- Introduction paragraph
- All 7 services in detail cards
- Each links to individual service page
- CTA at bottom

**Individual Service Pages (7 pages)**
- Dynamic route: /services/[slug]
- generateMetadata for each service
- Page header with service title
- Description
- Benefits list
- Features list
- Related services
- CTA

**Contact Page**
- Two-column: Form + Info
- Form fields: Full Name, Email, Phone, Organization, Service Required (select), Message
- Client-side validation (React Hook Form + Zod)
- Loading, success, error states
- Contact info sidebar (placeholders)
- FAQ section (6 questions, accordion)

**Privacy & Terms Pages**
- Professional placeholder structure
- Clear note: "[This is a placeholder. Replace with actual legal content.]"

### 3.7 API Routes

**POST /api/v1/contact**
```typescript
// Route handler pattern for Next.js 16
import { type NextRequest } from "next/server"
import { ContactSchema } from "@/lib/validations/contact"

export async function POST(request: NextRequest) {
  const body = await request.json()
  const result = ContactSchema.safeParse(body)

  if (!result.success) {
    return Response.json(
      { success: false, error: { code: "VALIDATION_ERROR", message: "Invalid input", details: result.error.flatten() } },
      { status: 400 }
    )
  }

  // Process contact form (email, store, etc.)
  return Response.json({ success: true, data: { message: "Contact form submitted successfully" } }, { status: 200 })
}
```

**POST /api/v1/inquiries**
- Similar pattern for structured consultation inquiries
- Fields: name, email, organization, service interest, message, preferred contact method

**POST /api/v1/newsletter**
- Email-only subscription
- Returns success/error consistently

### 3.8 SEO Implementation

**Root Layout Metadata**
```typescript
export const metadata: Metadata = {
  title: {
    template: "%s | AssuranceMax Consulting Ltd",
    default: "AssuranceMax Consulting Ltd — Where Expertise Inspires Confidence",
  },
  description: "Professional consulting services in financial management, governance, compliance, and business transformation.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
}
```

**Per-page metadata** via static `metadata` exports or `generateMetadata` for dynamic routes.

**robots.ts**: Allow all public routes, disallow /api/, /privacy placeholder note

**sitemap.ts**: Static sitemap with all public routes

**Structured data (JSON-LD)**:
- Organization schema (in root layout)
- ProfessionalService schema
- WebSite schema
- BreadcrumbList (on inner pages)
- NO reviews, ratings, aggregate ratings

### 3.9 Accessibility

- Semantic HTML: `<main>`, `<nav>`, `<header>`, `<footer>`, `<section>`, `<article>`
- Correct heading hierarchy: one `<h1>` per page, sequential `<h2>`→`<h3>`
- All interactive elements keyboard accessible
- Focus visible states on all focusable elements
- Form inputs with associated `<label>` elements
- Error messages linked to inputs via `aria-describedby`
- Mobile menu: focus trap, escape key, aria-expanded, aria-controls
- Images: meaningful `alt` text (or `alt=""` for decorative)
- Skip navigation link
- Color contrast: all text meets WCAG 2.2 AA (4.5:1 normal, 3:1 large)
- `prefers-reduced-motion` respected for any animations

---

## 4. What NOT To Do

| Prohibition | Rationale |
|---|---|
| Do not copy Biopic Ltd's slogan, testimonials, statistics, or company identity | They belong to another company |
| Do not fabricate client numbers, years of experience, certifications, awards, team size, revenue | The user explicitly forbids invented company information |
| Do not fabricate testimonials | Fake testimonials damage credibility when discovered |
| Do not use `"use client"` on entire pages | Server Components should be the default; only interactive parts need client |
| Do not install unnecessary dependencies (framer-motion, GSAP, styled-components, etc.) | Keep bundle minimal; Tailwind + CSS transitions are sufficient |
| Do not use `any` type | Strict TypeScript throughout |
| Do not use Pages Router | App Router only |
| Do not create `tailwind.config.js` | Tailwind v4 uses CSS-based configuration via `@theme` |
| Do not use ESLint | Project uses Biome |
| Do not add excessive animations | Professional motion only: fade, slide, hover, scale |
| Do not use emoji as interface icons | Lucide icons only |
| Do not keyword-stuff SEO content | Natural, useful content |
| Do not expose API keys or secrets in client code | Environment variables only |
| Do not leave forms without loading/success/error states | Every form must have complete UX states |
| Do not create empty blog/resources pages | Empty pages damage credibility |
| Do not invent regulatory claims (IRA, tax certifications, etc.) | Only use verified information |
| Do not use generic AI-sounding copy | Clear, professional, human, specific |
| Do not skip `not-found.tsx`, `error.tsx`, `global-error.tsx` | Required for production readiness |
| Do not hardcode colors in JSX | Use CSS variables / Tailwind tokens from design system |
| Do not create a database | No server-side storage needed for MVP |

---

## 5. Security Considerations

| Threat | Mitigation |
|---|---|
| Invalid form submissions | Zod validation on both client and server |
| XSS via form inputs | React escapes by default; server-side sanitization for any stored data |
| CSRF on API routes | Same-origin policy + consider CSRF token for production |
| Spam submissions | Honeypot field + rate limiting strategy (to be added in production) |
| Secrets exposure | .env.example committed; .env.local gitignored; no secrets in client bundle |
| Stack trace leakage | error.tsx/global-error.tsx render user-safe messages only |
| API abuse | Rate limiting strategy (to be implemented at deployment level, e.g., Vercel Edge Config or middleware) |

---

## 6. Performance Considerations

| Strategy | Implementation |
|---|---|
| Server Components by default | Only interactive components use `"use client"` |
| Image optimization | `next/image` with proper `sizes`, `priority` for above-fold, lazy loading below |
| Font optimization | `next/font/google` self-hosted, minimal subsets |
| Bundle size | No animation libraries; Tailwind purges unused CSS; minimal client JS |
| Core Web Vitals target | LCP < 2.5s, FID < 100ms, CLS < 0.1 |
| Mobile performance | Total page weight < 500KB initial; lazy-load below-fold sections |
| Code splitting | Next.js automatic route-based splitting |
| Static generation | All marketing pages are statically generated (no dynamic data fetching) |

---

## 7. DevOps and Observability

| Concern | Approach |
|---|---|
| Linting | `biome check` (configured in package.json as `npm run lint`) |
| Formatting | `biome format --write` (configured as `npm run format`) |
| Type checking | `npx tsc --noEmit` (add as `typecheck` script in package.json) |
| Build | `npm run build` (Next.js with Turbopack) |
| Dev server | `npm run dev` |
| Environment | .env.local for development, Vercel env vars for production |
| Deployment target | Vercel (default for Next.js) or similar |
| Monitoring | Vercel Analytics (optional, post-launch) |
| Logging | Console errors in dev; structured logging to be added for production API routes |

---

## 8. Implementation Tasks (Ordered)

### Phase 1: Foundation (Tasks 1-8)

| # | Task | Agent Type | Details |
|---|---|---|---|
| 1 | Install dependencies | developer-fast | shadcn/ui init, add components, install react-hook-form, zod, @hookform/resolvers |
| 2 | Configure globals.css | developer-fast | Design tokens, color palette, typography, shadcn/ui theme, animation import |
| 3 | Create lib/utils.ts | developer-fast | cn() utility |
| 4 | Create types | developer-fast | All type definitions in src/types/ |
| 5 | Create data files | developer-fast | All content data in src/data/ (services, values, process steps, industries, testimonials placeholder, site config) |
| 6 | Create lib/constants.ts | developer-fast | Site-wide constants |
| 7 | Create .env.example | developer-fast | Environment variable template |
| 8 | Create lib/validations/*.ts | developer-fast | Zod schemas for contact, inquiries, newsletter |

### Phase 2: Layout & Navigation (Tasks 9-12)

| # | Task | Agent Type | Details |
|---|---|---|---|
| 9 | Update root layout.tsx | developer-prime | Custom fonts (Inter), metadata, globals.css import, proper structure |
| 10 | Create Logo component | developer-fast | AssuranceMax wordmark/logo |
| 11 | Create Navbar + MobileNavigation | developer-prime | Sticky header, desktop nav with dropdown, mobile Sheet, CTA button, skip nav |
| 12 | Create Footer | developer-prime | 4-column footer, all links, placeholders marked, copyright |

### Phase 3: Homepage Sections (Tasks 13-25)

| # | Task | Agent Type | Details |
|---|---|---|---|
| 13 | Create SectionWrapper | developer-fast | Reusable section container with consistent padding/max-width |
| 14 | Create PageHeader | developer-fast | Reusable page header with title, description, breadcrumb |
| 15 | Create Hero section | developer-prime | Slogan, supporting copy, dual CTAs, professional visual treatment |
| 16 | Create TrustSection | developer-fast | 3-4 trust pillars with icons |
| 17 | Create ServiceCard | developer-fast | Card component for individual service |
| 18 | Create ServicesOverview | developer-prime | 7 service cards in responsive grid |
| 19 | Create WhyAssuranceMax | developer-prime | 6 reasons in 2x3 grid with icons |
| 20 | Create FinancialClarity | developer-prime | Visual flow narrative (6 steps) |
| 21 | Create ProcessSection | developer-prime | 5-step "How We Work" horizontal/vertical |
| 22 | Create VisionMission | developer-fast | Editorial layout with blockquotes |
| 23 | Create CoreValues | developer-fast | 7 values with icons and descriptions |
| 24 | Create IndustriesSection | developer-fast | Industry badges/cards grid |
| 25 | Create Testimonials | developer-fast | Placeholder-aware testimonials component |
| 26 | Create CTASection | developer-fast | Final CTA with benefits |
| 27 | Create ContactPreview | developer-fast | Contact info + mini form/link |
| 28 | Assemble homepage | developer-prime | Wire all sections into page.tsx with proper ordering |

### Phase 4: Inner Pages (Tasks 29-34)

| # | Task | Agent Type | Details |
|---|---|---|---|
| 29 | Create marketing layout | developer-fast | (marketing)/layout.tsx with Navbar + Footer |
| 30 | Create About page | developer-prime | Who we are, vision, mission, values, approach |
| 31 | Create Services overview page | developer-prime | Service list with links to individual pages |
| 32 | Create individual service page | developer-prime | Dynamic [slug] route with generateMetadata |
| 33 | Create Contact page | developer-prime | Form + info + FAQ accordion |
| 34 | Create Privacy + Terms pages | developer-fast | Placeholder pages with professional structure |

### Phase 5: Forms & API (Tasks 35-39)

| # | Task | Agent Type | Details |
|---|---|---|---|
| 35 | Create ContactForm component | developer-prime | React Hook Form + Zod, all states, accessible labels |
| 36 | Create NewsletterForm component | developer-fast | Simple email form with states |
| 37 | Create /api/v1/contact/route.ts | developer-fast | POST handler with Zod validation, typed response |
| 38 | Create /api/v1/inquiries/route.ts | developer-fast | POST handler with Zod validation |
| 39 | Create /api/v1/newsletter/route.ts | developer-fast | POST handler with Zod validation |

### Phase 6: SEO & Polish (Tasks 40-44)

| # | Task | Agent Type | Details |
|---|---|---|---|
| 40 | Implement robots.ts | developer-fast | Allow all public, disallow /api/ |
| 41 | Implement sitemap.ts | developer-fast | All public routes |
| 42 | Add structured data (JSON-LD) | developer-fast | Organization, ProfessionalService, WebSite, BreadcrumbList |
| 43 | Create error.tsx, global-error.tsx, not-found.tsx | developer-fast | Error boundaries with user-safe messages |
| 44 | Final QA pass | test-engineer | Desktop, tablet, mobile, forms, API, accessibility, SEO, build |

---

## 9. Testing Strategy

### Manual QA Checklist

| Category | Tests |
|---|---|
| **Navigation** | Desktop nav works, mobile sheet opens/closes, focus trap in mobile menu, CTA links correct |
| **Homepage** | All sections render, no horizontal overflow, responsive at 320/375/768/1024/1280/1440px |
| **Inner pages** | /about, /services, /services/[slug] (all 7), /contact, /privacy, /terms render correctly |
| **Forms** | Contact form: idle → fill → submit → loading → success. Validation errors display. Keyboard accessible |
| **API** | POST /api/v1/contact with valid data → 200. Invalid data → 400. Missing fields → 400 |
| **SEO** | Title tags correct per page, meta descriptions present, Open Graph tags, sitemap.xml accessible, robots.txt accessible |
| **Accessibility** | Tab through all interactive elements, skip nav works, headings sequential, form labels present, color contrast sufficient |
| **Performance** | Lighthouse performance > 90, no layout shift, images lazy-loaded below fold |
| **Error handling** | not-found page renders, error boundaries catch crashes |

### Build Verification
```bash
npm run lint        # Biome check — zero errors
npm run typecheck   # TypeScript — zero errors (add script if missing)
npm run build       # Next.js build — success
```

---

## 10. Migration Path

This is a greenfield build on a fresh scaffold. No migration concerns.

For future CMS migration:
- All content lives in `src/data/*.ts` as typed constants
- Replace data file imports with API calls to CMS
- Components remain unchanged; only data source changes

---

## 11. Rollout Plan

1. Complete all implementation tasks
2. Run `npm run lint` — fix any Biome errors
3. Run `npm run typecheck` — fix any TypeScript errors
4. Run `npm run build` — ensure successful build
5. Run `npm run dev` — verify all pages render correctly
6. Manual QA across all breakpoints
7. Test all forms end-to-end
8. Test all API routes
9. Verify SEO (title, meta, OG, sitemap, robots)
10. Verify accessibility (keyboard nav, screen reader, contrast)

---

## 12. Open Questions

1. **Font choice**: Inter or Geist? Both are professional. Geist is already scaffolded. Recommendation: keep Geist for consistency with Next.js defaults, unless client has a preference.
2. **Logo**: No logo file provided. Will use text-based wordmark "AssuranceMax" with styled typography. Client can replace with actual logo later.
3. **Contact details**: No verified email, phone, or address provided. Will use clearly marked placeholders: `[your-email@assurancemax.com]`, `[+254 XXX XXX XXX]`, `[Your Office Address]`.
4. **Images**: No imagery provided. Will use CSS gradients, patterns, and subtle visual treatments for hero/sections. Stock images can be added later via `next/image`.
5. **Social media links**: No verified social profiles. Will use placeholder URLs marked for replacement.
6. **Domain**: No production domain specified. `NEXT_PUBLIC_SITE_URL` defaults to `http://localhost:3000` in .env.example.
7. **Testimonials**: None provided. Component will be built but will render a clearly marked placeholder state rather than fabricated quotes.

---

## 13. File Creation Summary

### New Files to Create (~55 files)

**Configuration:**
- `.env.example`

**Types (7 files):**
- `src/types/service.ts`
- `src/types/core-value.ts`
- `src/types/testimonial.ts`
- `src/types/process-step.ts`
- `src/types/industry.ts`
- `src/types/api.ts`
- `src/types/form.ts`

**Data (6 files):**
- `src/data/services.ts`
- `src/data/core-values.ts`
- `src/data/testimonials.ts`
- `src/data/process-steps.ts`
- `src/data/industries.ts`
- `src/data/site.ts`

**Lib (5 files):**
- `src/lib/utils.ts`
- `src/lib/constants.ts`
- `src/lib/validations/contact.ts`
- `src/lib/validations/inquiries.ts`
- `src/lib/validations/newsletter.ts`
- `src/lib/api/responses.ts`

**UI Components (~14 files):** via shadcn/ui CLI

**Layout Components (4 files):**
- `src/components/layout/navbar.tsx`
- `src/components/layout/mobile-navigation.tsx`
- `src/components/layout/footer.tsx`
- `src/components/layout/logo.tsx`

**Marketing Components (14 files):**
- `src/components/marketing/hero.tsx`
- `src/components/marketing/trust-section.tsx`
- `src/components/marketing/services-overview.tsx`
- `src/components/marketing/service-card.tsx`
- `src/components/marketing/why-assurancemax.tsx`
- `src/components/marketing/financial-clarity.tsx`
- `src/components/marketing/process-section.tsx`
- `src/components/marketing/vision-mission.tsx`
- `src/components/marketing/core-values.tsx`
- `src/components/marketing/industries-section.tsx`
- `src/components/marketing/testimonials.tsx`
- `src/components/marketing/cta-section.tsx`
- `src/components/marketing/contact-preview.tsx`

**Section Components (2 files):**
- `src/components/sections/page-header.tsx`
- `src/components/sections/section-wrapper.tsx`

**Form Components (2 files):**
- `src/components/forms/contact-form.tsx`
- `src/components/forms/newsletter-form.tsx`

**Pages (8 files):**
- `src/app/(marketing)/layout.tsx`
- `src/app/(marketing)/page.tsx`
- `src/app/(marketing)/about/page.tsx`
- `src/app/(marketing)/services/page.tsx`
- `src/app/(marketing)/services/[slug]/page.tsx`
- `src/app/(marketing)/contact/page.tsx`
- `src/app/(marketing)/privacy/page.tsx`
- `src/app/(marketing)/terms/page.tsx`

**API Routes (3 files):**
- `src/app/api/v1/contact/route.ts`
- `src/app/api/v1/inquiries/route.ts`
- `src/app/api/v1/newsletter/route.ts`

**Special Files (5 files):**
- `src/app/layout.tsx` (modify existing)
- `src/app/globals.css` (modify existing)
- `src/app/error.tsx`
- `src/app/global-error.tsx`
- `src/app/not-found.tsx`
- `src/app/robots.ts`
- `src/app/sitemap.ts`

### Files to Modify (2 files)
- `src/app/layout.tsx` — Custom fonts, metadata, proper structure
- `src/app/globals.css` — Design tokens, shadcn/ui theme, Tailwind v4 tokens

### Files to Delete (5 files)
- `src/app/page.tsx` (replaced by `(marketing)/page.tsx`)
- `public/next.svg`
- `public/vercel.svg`
- `public/globe.svg`
- `public/file.svg`
- `public/window.svg`
