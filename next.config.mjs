import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'out',
  transpilePackages: ['next-mdx-remote'],
}

const withMDX = createMDX({})

export default withMDX(nextConfig)
