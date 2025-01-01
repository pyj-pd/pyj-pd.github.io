import { SITE_URL } from '@/constants/project'
import {
  internalRoutesList,
  type NavbarRouteId,
  navbarRouteList,
} from '@/constants/routes'
import type { WithContext, TechArticle } from 'schema-dts'
import { getPostList, getPostURL } from './blog/post'
import type { PostData, PostDate } from '@/types/post'
import { BLOG_AUTHORS } from '@/constants/metadata'
import { categoryList } from '@/constants/blog/categories'

/**
 * Generates content for `sitemap.xml` file.
 * @returns Content for `sitemap.xml` file with all pages and posts included, with `lastmod` property for posts too.
 */
export const generateSitemapXML = async (): Promise<string> => {
  const postList = await getPostList()

  const xmlLines: string[] = [
    // Headers
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',

    // Internal links
    ...(Object.keys(internalRoutesList) as NavbarRouteId[])
      .map((routeId) => SITE_URL + navbarRouteList[routeId].path)
      .map((site) => `<url><loc>${site}</loc></url>`),

    // Blog posts
    ...postList.map((post) => {
      const locString = `<loc>${SITE_URL + getPostURL(post.slug)}</loc>`

      const lastModDate = post.lastUpdateDate ?? post.date ?? null,
        lastModString = lastModDate ? `<lastmod>${lastModDate}</lastmod>` : ''

      return `<url>${locString}${lastModString}</url>`
    }),

    // Last line
    '</urlset>',
  ]

  return xmlLines.join('\n')
}

/**
 * Generates ISO 8601 date string from post date.
 * @param dateString Post date string
 * @returns ISO 8601 date string. Detailed time will be fixed to 8:00 (UTC+9).
 */
const convertToISO8601Date = (dateString: PostDate): string => {
  return `${dateString}T08:00:00+09:00`
}

/**
 * Generates JSON-LD data for posts.
 * @param postData Post data
 * @returns JSON-LD data in object
 */
export const generatePostJSONLD = (
  postData: PostData,
): WithContext<TechArticle> => {
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: postData.title,
    description: postData.description,

    genre: postData.categories.map((category) => categoryList[category].name),

    datePublished: postData.date
      ? convertToISO8601Date(postData.date)
      : undefined,
    dateModified: postData.lastUpdateDate
      ? convertToISO8601Date(postData.lastUpdateDate)
      : undefined,

    author: BLOG_AUTHORS,
  }
}
