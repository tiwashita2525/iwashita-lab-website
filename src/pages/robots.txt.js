export const GET = ({site}) => {
  const sitemapUrl = new URL(`${import.meta.env.BASE_URL}sitemap.xml`, site).toString();
  const body = `User-agent: *\nAllow: /\nSitemap: ${sitemapUrl}\n`;

  return new Response(body, {
    headers: {'Content-Type': 'text/plain; charset=utf-8'},
  });
};
