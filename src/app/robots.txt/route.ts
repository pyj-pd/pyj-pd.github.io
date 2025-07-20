import { SITE_URL } from "@/constants/project"

export const dynamic = 'force-static'

const robotsData: { [key: string]: string }[] = [
  {
    'User-agent': '*',
    Disallow: '',
  },
  {
    Sitemap: `${SITE_URL}/sitemap.xml`,
  },
]

const LINE_BREAK = '\n'

export async function GET() {
  const robotsText = robotsData
    .map((section) =>
      Object.keys(section)
        .map((key) => `${key}: ${section[key]}`) // Pair keys and data
        .join(LINE_BREAK),
    )
    .join(LINE_BREAK.repeat(2)) // Extra line break between sections

  return new Response(robotsText, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
