# Iwashita Laboratory — Bilingual Astro Starter

## Quick start

```bash
npm install
npm run dev
```

Open the URL shown in Terminal (usually http://localhost:4321/iwashita-lab/). The main language URLs are `/iwashita-lab/ja/` and `/iwashita-lab/en/`.

## Before publishing

1. Confirm the official lab name, department, supervisor name, contact address, affiliations, and publication metadata.
2. Replace the abstract CSS illustration with approved experimental or simulation images.
3. Populate Publications, Members, News, and Contact. Obtain consent for portrait images/names.
4. In GitHub repository Settings > Pages, choose **GitHub Actions** as build/deployment source.
5. Put this entire directory into a GitHub repository (suggested name: `iwashita-lab`) and push to `main`.
6. Workflow automatically sets `SITE_URL` and `SITE_BASE` based on the repository for a GitHub project page. For a custom domain or `username.github.io` root repository, adjust the build environment accordingly.
7. Check responsiveness, accessibility, outgoing links, and university branding rules before announcing the website.

## Where to edit

- `src/data/content.js`: Japanese/English labels, research overview, and research cards.
- `src/pages/[lang]/index.astro`: homepage.
- `src/pages/[lang]/[page].astro`: remaining sections.
- `src/styles/global.css`: visual styles.

**Draft status:** All research text is provisional; no publication, member, or contact details have been invented.
