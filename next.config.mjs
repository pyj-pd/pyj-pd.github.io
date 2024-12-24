import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  transpilePackages: ['next-mdx-remote'],
  images: {
    unoptimized: true,
  },
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  },
  experimental: {
    dynamicIO: true,
  },
}

const withMDX = createMDX({})

export default withMDX(nextConfig)
