# RegRely Web (Next.js 14)

Marketing site for RegRely built with Next.js 14 App Router, Tailwind CSS, and shadcn-style UI components.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Radix UI primitives (Tabs, Accordion)
- lucide-react icons

## Routes

- `/` landing page with smooth-scroll sections
- `/pricing` launch pricing and comparison
- `/privacy` placeholder
- `/terms` placeholder
- `/contact` UI form with mailto fallback

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run dev server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```

## Notes

- Navbar links to section IDs on `/` (`#features`, `#domains`, `#security`, `#reports`, `#early`).
- Early Access modal is client-side only (no backend submission).
- Contact form validates required fields and opens a mailto draft.
