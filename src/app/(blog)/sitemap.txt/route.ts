import { internalRoutesList, SITE_URL } from '@/constants/urls'
import { getPostURL, postList } from '@/utils/blog/post'

export const dynamic = 'force-static'

export async function GET() {
  const sites: string[] = [
    ...internalRoutesList.map((route) => SITE_URL + route.path),
    ...postList.map((post) => SITE_URL + getPostURL(post.slug)),
  ]

  const sitemapString = sites.join('\n')

  return new Response(sitemapString, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
