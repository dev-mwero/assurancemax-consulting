# SEO Audit Analysis — assurancemax.co.ke

- **Tool:** `seo-engine` (AI-native SEO/GEO/AEO engine), `audit` command
- **Date:** 2026-08-29
- **Pages audited:** Home, About, Services, Contact, Service detail (`/services/bookkeeping`)
- **Domain:** `assurancemax.co.ke` (confirmed by owner).

## Re-audit (2026-08-29 14:33) — and a critical bug found

The re-run confirmed the homepage still reports a **critical "Missing title tag"**, **Missing OpenGraph title**, **Missing Twitter title**. Investigation of the live HTML + local build proved this is a **real code bug, not just a stale deploy**:

- The homepage `<head>` had **no `<title>` element at all** (verified via `curl` on the live `www.` site and in `.next` prerender — `grep -c "<title"` = 0), while `/about` correctly rendered `<title>About | AssuranceMax Consulting Ltd</title>`.
- Root cause: the SEO commit (`c5f2d8a`) added `export const metadata = buildMetadata({ path: "/" })` to the **home page** with no `title` argument. `buildMetadata` returned `title: undefined`, which **overrides** the root layout's `title.default` and wipes the tag (per Next.js docs: a child that sets `title: undefined` clears the parent default).
- **Fix applied locally (not yet deployed):** `buildMetadata` now supports an `absolute` option; the home page passes its full brand title with `absolute: true`, so the template isn't double-applied. Local build now renders `<title>`, `og:title`, and `twitter:title` correctly.

The remaining "No structured data terminology" finding is a **likely false positive** — the live HTML contains 4 `application/ld+json` blocks (Organization, WebSite, etc.); the tool apparently scans body text for schema.org vocabulary rather than `<script>` tags. Verify with Google Rich Results / Schema.org validator.

**Action required:** deploy the title fix, then re-run the audit to confirm the homepage critical clears. Content-quality findings below are independent of this and remain valid.

### ⚠️ Preview-URL re-run was INVALID (2026-08-29 14:52)

Attempted to re-run the audit against the Vercel **preview** URL
`assurancemax-consulting-8vc1dc38m-abdallas-projects-3d7f1625.vercel.app`.
It returned uniformly low scores (74/100, "all images missing alt", "no
structured data found", "missing OG description/URL"). Investigation showed the
preview is **behind Vercel authentication** — both `curl` and the tool were
redirected to `https://vercel.com/login`, so the audit analyzed Vercel's login
page, not the site. **Those reports were discarded.**

Valid audit targets require a publicly reachable URL. Options:
- Deploy `feat/seo-audit` to the **production** domain (`assurancemax.co.ke`) and re-audit that.
- Or disable Vercel **Deployment Protection** on the preview (Project → Settings → Deployment Protection) so the tool can fetch it, then re-run against the preview link.

### ✅ Validated production audit (2026-08-29 15:03)

Re-ran against the public production domain `https://assurancemax.co.ke` (after
deploying `feat/seo-audit` there). **All critical issues are resolved** — the
homepage missing-title bug is gone, confirmed both by the audit and by a direct
`curl` (the live `<head>` now contains `<title>`, `og:title`, `twitter:title`,
and 4 `application/ld+json` blocks).

| Page | Overall | Critical | High | Medium | Low |
|------|--------:|---------:|-----:|-------:|----:|
| Home (`/`) | 84 | 0 | 0 | 15 | 1 |
| About (`/about`) | 84 | 0 | 1 | 14 | 1 |
| Services (`/services`) | 84 | 0 | 1 | 13 | 1 |
| Contact (`/contact`) | 87 | 0 | 1 | 11 | 1 |
| Service detail (`/services/bookkeeping`) | 85 | 0 | 0 | 15 | 2 |

**Phase 1 status — DONE in code, validated live:**
- Homepage `<title>` / `og:title` / `twitter:title` restored (commit `ac1db7f`).
- CTA background image descriptive alt added (commit `edb17d1`) — verified live; no empty `alt` remains.
- The lingering "1 image missing alt" per page is an inline `<svg>` icon (the known `noSvgWithoutTitle` item), not an `<img>` — low priority.
- "No structured data terminology" remains a tool false positive (JSON-LD is present and valid).

**Phase 2 — DONE (implemented, pending deploy + re-audit):**
- Added `faqJsonLd()` builder to `src/lib/seo.ts` (FAQPage schema).
- Added `src/data/faqs.ts` with `homeFaqs`, `servicesFaqs`, `serviceFaqs` (Kenya-specific Q&A).
- Added `FaqSection` component (Accordion with `hiddenUntilFound` so answers stay in the DOM for crawlers + FAQPage JSON-LD).
- Rendered on Home, Services, and service detail pages. Build confirms `FAQPage` JSON-LD on all three.

**Phase 3 — DONE (implemented, pending deploy + re-audit):**
- Rewrote primary marketing copy (Hero, Trust, WhyAssuranceMax, ServicesOverview, VisionMission, FinancialClarity) and the About/Services page prose for shorter sentences and direct language.
- Removed AI-typical words ("empower", "robust") and added Kenya-specific specifics (KRA, statutory obligations, "businesses across Kenya").
- This targets the audit's readability (35/100) and low-specificity (high severity) findings.

**Remaining work (Phase 4):** improve GEO signals — question-driven H2/H3, list/definition answer blocks, and add citations/references (KRA, ICPAK, statutory frameworks) to lift chunkability, answer density, and citation readiness. Re-audit after deploy to confirm readability/specificity gains.

## Score summary

| Page | Overall | Critical | High | Medium | Low | Technical | Semantic | Geo | Anti-slop | Content |
|------|--------:|---------:|-----:|-------:|----:|----------:|---------:|----:|----------:|--------:|
| Home (`/`) | 81 | 1 | 0 | 16 | 2 | 77 | 97 | 65 | 90 | 75 |
| About (`/about`) | 84 | 0 | 1 | 14 | 1 | 95 | 97 | 65 | 88 | 75 |
| Services (`/services`) | 87 | 0 | 1 | 11 | 1 | 95 | 97 | 75 | 93 | 75 |
| Contact (`/contact`) | 84 | 0 | 0 | 15 | 2 | 92 | 97 | 65 | 95 | 70 |
| Service detail (`/services/bookkeeping`) | 85 | 0 | 1 | 13 | 1 | 95 | 97 | 65 | 93 | 75 |

Room to reach ~90+ on every page is realistic.

## Cross-cutting issues (by theme)

### 1. Metadata & technical
- **Homepage title (FIXED locally, pending deploy):** was missing `<title>`/`og:title`/`twitter:title` due to the bug above. Now fixed via `absolute` title in `buildMetadata`.
- "No structured data terminology" on every page → likely tool false positive (JSON-LD is present in `<head>`). Verify with external validator.
- One image (`/images/cta-handshake.jpg` in `CTASection`) uses `alt=""` (decorative background) — the audit counts empty alt as missing. Low priority; could give it a descriptive alt or move to CSS background.
- `robots.txt` already disallows `/api` and `/private`; sitemap already referenced.

### 2. Structured data gaps (real, code-level)
- No **FAQPage** schema anywhere. The GEO/Content agents repeatedly recommend FAQPage JSON-LD to win AI Overviews and featured snippets. Our pages have no FAQ sections.
- BreadcrumbList exists on marketing/service pages (local) — good; confirm after deploy.

### 3. Content quality (real, needs editing)
- **Readability 35/100 on every page.** Sentences too long, vocabulary too complex. Needs simpler language, shorter sentences, broken-up paragraphs.
- **Low specificity (high severity):** About 29, Services 19, Service detail 28, Contact unflagged but same pattern. Content lacks concrete details — specific numbers, services scope, deliverables, Kenya-specific context, client outcomes.
- **AI-slop vocabulary (home only, score 39):** 12 AI-typical phrases ("delve", "tapestry", "navigate", etc.) detected in homepage/section copy — likely marketing section text. Other pages read human (14–30), so the issue is concentrated in a few components.
- **Chunkability 30/100, Answer density 30/100, FAQ readiness 30/100, Featured-snippet potential 45/100, FAQ extractability 20/100** on home. Thin answer-led sections; few list/definition/direct-answer blocks.

### 4. GEO / AI-retrieval readiness (moderate, 58–75)
- Heading hierarchy and question-driven H2/H3 are underused.
- Low factual density (65) and citation readiness (65) — add stats, references, credentials.

## Step-by-step improvement plan

**Phase 0 — Confirm baseline after title fix (DONE in code, needs deploy)**
1. Deploy the title fix to `assurancemax.co.ke`.
2. Re-run `seo-engine audit` on all 5 URLs; confirm the homepage critical (missing title) clears. Expect Home to jump from 81 toward ~90.

**Phase 1 — Fix remaining real technical defects (quick wins)**
3. (Homepage title — DONE locally; deploy to validate.) 
4. Address `cta-handshake.jpg` alt (give descriptive alt or move to CSS background).
5. Validate structured data with Google Rich Results Test / Schema.org validator to confirm JSON-LD is detected (tool's "no structured data" is likely a false positive).

**Phase 2 — Structured data (FAQPage)**
5. Add an FAQ section (5–7 Q&A pairs) to Home, Services, and key service detail pages using natural-language queries ("What does bookkeeping include?", "How much do consulting services cost in Kenya?", etc.).
6. Add `FAQPage` JSON-LD (extend `src/lib/seo.ts` with a `faqJsonLd` builder + render via `JsonLd`).

**Phase 3 — Content readability & specificity (highest impact)**
7. Rewrite marketing section copy with shorter sentences and simpler words; target readability > 60/100.
8. Replace AI-typical phrases in homepage/section components (grep for "delve", "tapestry", "navigate", "in today's", "landscape") with direct language.
9. Add concrete specifics site-wide: service scope, deliverables, typical engagement steps, Kenya-specific context (KRA, statutory filings), and any measurable outcomes. Raises specificity and factual density.

**Phase 4 — GEO / answer optimization**
10. Lead each section with a direct answer to a likely question; add question-driven H2/H3 headings.
11. Convert suitable blocks to lists/definitions to lift featured-snippet potential and chunkability.
12. Add credentials/references (cite KRA, ICPAK, statutory frameworks) to improve citation readiness.

**Phase 5 — Re-audit & monitor**
13. Re-run audits after each phase; track Technical → 95+, Geo → 80+, Readability → 60+, FAQ readiness → 80+.
14. Consider `seo-engine autopilot` on the home URL for an end-to-end pass once Phases 1–4 land.

## Confirmed facts
- Production domain is `assurancemax.co.ke` (owner-confirmed).
- The live site was deployed from the **commit before** the SEO work (`c5f2d8a`). Therefore the homepage's "missing title / og:title / twitter:title / no structured data" findings are **deploy lag, not code gaps** — those were added locally and verified in the prerender. They must be re-audited after deploy.
- Content-quality findings (readability, specificity, AI-slop, GEO) are independent of the deploy and are valid now.

## Open question for you
- Do you want FAQ content authored as real, Kenya-specific copy, or generated placeholder for now?
