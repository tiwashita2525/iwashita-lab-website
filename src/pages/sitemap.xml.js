import {contentPages, supportedLanguages} from '../data/seo.js';

const escapeXml = value => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&apos;');

export const GET = ({site}) => {
  const base = import.meta.env.BASE_URL;
  const urls = supportedLanguages.flatMap(lang => contentPages.map(page => {
    const pagePath = page === 'home' ? '' : `${page}/`;
    return new URL(`${base}${lang}/${pagePath}`, site).toString();
  }));
  const entries = urls.map(url => `  <url><loc>${escapeXml(url)}</loc></url>`).join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;

  return new Response(body, {
    headers: {'Content-Type': 'application/xml; charset=utf-8'},
  });
};
