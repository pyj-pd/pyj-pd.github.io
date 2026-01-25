import { SITEMAP_URL } from '@/constants/info'

export const dynamic = 'force-static'

const robotsData: { [key: string]: string }[] = [
  {
    'User-agent': '*',
    Allow: '/',
  },
  {
    Sitemap: SITEMAP_URL,
  },
]

const LINE_BREAK = '\n'

export async function GET() {
  const robotsText = robotsData
    .map((section) =>
      Object.keys(section)
        .map((key) => `${key}: ${section[key]}`.trim()) // Pair keys and data
        .join(LINE_BREAK),
    )
    .join(LINE_BREAK.repeat(2)) // Extra line break between sections

  return new Response(robotsText, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
