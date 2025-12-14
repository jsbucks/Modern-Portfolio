# Jigish Modi Portfolio

A modern portfolio for front-end engineer Jigish Modi, rebuilt with the upcoming Next.js 16 release (via the canary channel) and Material UI. The site highlights IBM case studies, enterprise design system work, and product outcomes while remaining deployable to GitHub Pages via static export.

## Tech stack
- [Next.js 16 (canary)](https://nextjs.org/) App Router with static export
- [React 18](https://react.dev/)
- [Material UI](https://mui.com/) with a custom dark theme
- [TypeScript](https://www.typescriptlang.org/)
- [Emotion](https://emotion.sh/) for CSS-in-JS

## Local development
```bash
npm install
npm run dev
```

The development server runs at `http://localhost:3000`.

> **Note:** `package.json` pins Next.js to the `canary` dist tag so installs pull the latest Next.js 16 preview build. Switch the
> dependency back to `next@latest` if you need the most recent stable release instead.

## Build & deployment
The project statically exports to the `out/` directory. Use the deploy script to prepare artifacts for GitHub Pages:

```bash
npm run deploy
```

This command runs a production build, exports static HTML, and copies the `CNAME` file for the custom domain while creating the `.nojekyll` flag required by GitHub Pages.

Automate deployment by publishing the `out/` directory to a `gh-pages` branch (for example with [peaceiris/actions-gh-pages](https://github.com/peaceiris/actions-gh-pages)).

## Content updates
- Update featured projects in `src/data/projects.ts`
- Add or edit experience entries in `src/data/experience.ts`
- Maintain skill groups in `src/data/skills.ts`
- Replace `public/resume.pdf` with the latest résumé

Each page consumes this structured data, so edits automatically propagate across the site without touching layout code.
