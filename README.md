# Oskar Schiedewitz Personal Website

A production-ready, single-page portfolio built with Angular 22 and TypeScript. The design pairs a restrained editorial grid with a few original CSS pixel-art accents.

## Quick start

Requirements: Node.js 24 and pnpm 11.

```bash
pnpm install
pnpm start
```

Open `http://localhost:4200`.

## Edit the content

All personal copy, projects, social links, technologies, and experience entries live in one file:

```text
src/app/data/portfolio.data.ts
```

The interfaces in `src/app/models/portfolio.model.ts` make missing or misspelled fields fail at build time. Presentation is split into small standalone components under `src/app/components`.

## Verify a production build

```bash
pnpm check
```

The optimized output is written to `dist/personal-website/browser`.

## Publish with GitHub CLI

Create the repository once and push the initial version:

```bash
gh auth login
gh repo create personal-website --public --source=. --remote=origin --push
gh api --method POST repos/{owner}/personal-website/pages -f build_type=workflow
```

After that, every push to `main` builds and republishes the site automatically:

```bash
git add .
git commit -m "Update portfolio"
git push
```

The workflow is documented in `.github/workflows/deploy-pages.yml`. For the account currently configured in the portfolio, the default project URL is:

```text
https://naiylo.github.io/personal-website/
```

If the repository name changes, update `build:pages` in `package.json` so `--base-href` matches the new repository path.

## Design and accessibility notes

- Semantic landmarks and headings make the page easy to navigate.
- A keyboard-visible skip link and focus states are included.
- Motion is CSS-first and disabled by `prefers-reduced-motion`.
- Pixel art is original CSS, so there are no copyrighted game assets or heavy image downloads.
- The layout is fluid from small phones to large desktop screens.
