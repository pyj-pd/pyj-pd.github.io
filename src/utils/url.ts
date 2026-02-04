import { SITE_URL } from '@/constants/info'

export const joinUrlPaths = (...paths: string[]): string => {
  const joined = []

  for (const path of paths) {
    if (path === '') continue // Skip empty paths

    let trimmedPath = path

    // Remove starting slash if not the first path
    if (joined.length > 0 && trimmedPath.startsWith('/')) {
      trimmedPath = trimmedPath.slice(1)
    }

    // Remove ending slash
    if (trimmedPath.endsWith('/')) {
      trimmedPath = trimmedPath.slice(0, -1)
    }

    joined.push(trimmedPath)
  }

  return addTrailingSlash(joined.join('/'))
}

export const addTrailingSlash = (url: string): string => {
  return url.endsWith('/') ? url : url + '/'
}

const INTERNAL_LINK_PREFIX = [SITE_URL, '/', '#']

export const checkIfInternalLink = (url: string): boolean =>
  INTERNAL_LINK_PREFIX.some((prefix) => url.startsWith(prefix))
