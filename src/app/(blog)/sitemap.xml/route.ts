import { internalRoutesList, SITE_URL } from '@/constants/urls'
import { getPostURL, postList } from '@/utils/blog/post'

export const dynamic = 'force-static'

export async function GET() {
  const sites: string[] = [
    ...internalRoutesList.map((route) => SITE_URL + route.path),
    ...postList.map((post) => SITE_URL + getPostURL(post.slug)),
  ]

  const xmlLines: string[] = [
    // Headers
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',

    // Links
    ...sites.map((site) => `<url><loc>${site}</loc></url>`),

    // Last line
    '</urlset>',
  ]

  return new Response(xmlLines.join('\n'), {
    headers: {
      'Content-Type': 'text/xml',
    },
  })
}
