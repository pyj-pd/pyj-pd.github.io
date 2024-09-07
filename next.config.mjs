import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'out',
}

const withMDX = createMDX({})

export default withMDX(nextConfig)
