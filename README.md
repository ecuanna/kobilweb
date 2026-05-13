# KOBIL Ventures - Next.js

This project is a Next.js implementation of the provided Figma Ventures page.

## Tech stack

- Next.js 14 App Router
- React 18
- TypeScript
- Plain CSS in `app/globals.css`

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm start
```

## Notes

The Figma MCP returned image URLs, so the first version uses those URLs directly in `app/page.tsx`. For a production repository, download the image assets into `public/assets` and replace the URLs with local paths.
