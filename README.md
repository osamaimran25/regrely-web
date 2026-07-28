# RegRely Web

Marketing site for [RegRely](https://regrely.com/), GDPR compliance software
for growing businesses.

## Stack

- Astro
- Bootstrap
- Custom CSS and JavaScript

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
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open the local URL printed by Astro.

## Build

```bash
npm run build
npm run preview
```

## Notes

- Production output is generated in `dist/`.
- Canonical site URLs use trailing slashes.
- Legacy `.html` paths are retained as redirect pages.
