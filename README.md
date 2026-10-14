# TI Lab — Bilingual Astro Website

## Quick start

```bash
npm install
npm run dev
```

Open the URL shown in Terminal (usually http://localhost:4321/iwashita-lab-website/). The main language URLs are `/iwashita-lab-website/ja/` and `/iwashita-lab-website/en/`.

The production site is configured for:

- Repository: `tiwashita2525/iwashita-lab-website`
- URL: `https://tiwashita2525.github.io/iwashita-lab-website/`

## Before publishing

1. In GitHub repository Settings > Pages, choose **GitHub Actions** as the build/deployment source.
2. Confirm responsiveness, accessibility, outgoing links, image reuse permissions, and university branding rules.
3. Commit and push reviewed changes to `main`.
4. Run the `Deploy Astro to GitHub Pages` workflow manually from the Actions tab. Pushes do not trigger deployment automatically.

The workflow sets `SITE_URL` and `SITE_BASE` from the repository. The defaults in `astro.config.mjs` point to the same production URL. For a custom domain or a root `username.github.io` repository, update both the defaults and workflow environment variables.

`npm run build` runs a prebuild cleanup that removes Finder `.DS_Store` metadata from `public` before Astro copies static assets. It does not remove research images or other site assets.

## Where to edit

- `src/data/content.js`: Japanese/English labels, research overview, and research cards.
- `src/pages/[lang]/index.astro`: homepage.
- `src/pages/[lang]/[page].astro`: remaining sections.
- `src/styles/global.css`: visual styles.
- `src/data/seo.js`: page-specific meta descriptions and sitemap route definitions.
- `src/layouts/Base.astro`: canonical URLs, language alternates, and Open Graph metadata.
- `.github/workflows/deploy.yml`: manual GitHub Pages deployment workflow.
