# AssuranceMax Consulting Ltd

Professional consulting services website — financial management, accounting, governance, compliance, business advisory, and business transformation.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Forms:** React Hook Form + Zod validation
- **Database:** MongoDB via Mongoose
- **Email:** Nodemailer (SMTP)
- **UI:** Base UI, Lucide icons, Sonner toasts

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB instance (local or [Atlas](https://www.mongodb.com/atlas))

### Setup

```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env
```

Edit `.env` with your values:

```env
MONGODB_URI=mongodb://localhost:27017/assurancemax

SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email
SMTP_PASS=your-password
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production

```bash
npm run build
npm run start
```

## Project Structure

```
src/
├── app/
│   ├── (marketing)/       # Public pages (home, about, contact, services)
│   └── api/v1/             # API routes (contact, newsletter, inquiries)
├── components/
│   ├── forms/              # Contact, newsletter, inquiry forms
│   ├── layout/             # Navbar, footer, logo
│   ├── marketing/          # Homepage sections
│   ├── sections/           # Shared wrappers
│   └── ui/                 # Reusable UI primitives
├── data/                   # Static data (services, testimonials)
├── lib/
│   ├── db.ts               # MongoDB connection
│   ├── models/             # Mongoose models (Contact, Inquiry, Subscriber)
│   ├── nodemailer.ts       # Email transport
│   ├── validations/        # Zod schemas
│   └── constants.ts        # Site config
└── types/                  # TypeScript types
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run lint` | Run Biome linter |
| `npm run typecheck` | TypeScript type checking |
| `npm run format` | Auto-format with Biome |
| `npm run email:test` | Verify SMTP connectivity and send a test email |

## Forms and email

All three forms (contact, quote request, newsletter) validate with Zod on the
client and the server, store the submission in MongoDB, then email
`info@assurancemax.co.ke`. The recipient is defined once, in
`src/lib/constants.ts`.

Mail is sent through `src/lib/nodemailer.ts`. Two behaviours matter when
operating it:

- A submission is stored first and emailed second. If SMTP fails, the visitor
  still sees a success message and the record is kept, because a failed send
  must not discard a captured lead. Failures are logged as `[email] ... failed`.
- If `SMTP_*` is missing or wrong, the routes log the reason and return 200. This
  is deliberate for the reasons above, so **a silent log means no mail is being
  sent.** Check the logs, not the response.

### Required environment variables

| Variable | Notes |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Public origin, used for canonical URLs and sitemap |
| `SMTP_HOST` | `mail.assurancemax.co.ke` |
| `SMTP_PORT` | `587` (STARTTLS) or `465` (implicit TLS). 25 and 2500 are not offered |
| `SMTP_SECURE` | `false` for 587, `true` for 465 |
| `SMTP_USER` | Full mailbox address, e.g. `info@assurancemax.co.ke`. The `@` is required; omitting it fails with `535 Incorrect authentication data` |
| `SMTP_PASS` | Mailbox password |
| `SMTP_FROM` | A real mailbox on this domain, e.g. `no-reply@assurancemax.co.ke`. Kept separate from `SMTP_USER` so form mail does not damage the reputation of the inbox that receives it |
| `MONGODB_URI` | MongoDB connection string |

Optional: `SEND_ACKNOWLEDGEMENT` (default `false`) emails the visitor a
confirmation, `FORM_RATE_LIMIT_WINDOW_MS` and `FORM_RATE_LIMIT_MAX` (default
5/hour per IP per form) tune the throttle.

Copy `.env.example` to `.env` for local defaults, and put real credentials in
`.env.local`, which Next loads first and which takes precedence.

### Abuse protection

Forms carry a hidden honeypot field and a per-IP throttle. The throttle is
in-memory, so it resets on deploy and is per-instance on Vercel, which means it
is abuse resistance rather than a security boundary. Add a CAPTCHA before the
site handles anything sensitive.

## Deployment

Deployed on [Vercel](https://vercel.com). Set the environment variables above in
the Vercel dashboard under Settings → Environment Variables for **all**
environments. They are not committed, and `.env` is ignored by git, so a
deploy without them will build and pass but send no email. Verify a production
deploy by submitting the contact form and checking the Vercel function logs for
`[email] ... delivered`.

## License

Proprietary — AssuranceMax Consulting Ltd

---

Developed under the supervision of [Mwero Abdalla](http://github.com/mwero-abdalla) at [Mwenaro Labs](http://github.com/mwenaro-labs)
