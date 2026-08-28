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

## Deployment

Deployed on [Vercel](https://vercel.com). Set environment variables in the Vercel dashboard.

## License

Proprietary — AssuranceMax Consulting Ltd

---

Developed under the supervision of [Mwero Abdalla](http://github.com/mwero-abdalla) at [Mwenaro Labs](http://github.com/mwenaro-labs)
