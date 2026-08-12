# pixelSolutions — site

Astro static site.

## Develop
```
npm install
npm run dev
```

## Build & deploy
```
npm run build
```
Static output goes to `dist/` — upload as-is to any static host (Netlify, Vercel, S3+CloudFront, nginx, Apache). No server runtime needed.

## Content
All copy (ES/EN) and project data live in `src/data/content.js` — edit there.

Replace project screenshots: drop images into `public/images/` named `kumobi.jpg`, `draisa.jpg`, `project-3.jpg`, `project-4.jpg` (referenced in `content.js`). Until replaced, a placeholder panel shows.

Theme (light/dark) auto-switches by local time (6am–6pm = light). Language auto-detects from the browser, defaulting to Spanish. Both live in `src/scripts/app.js`.
