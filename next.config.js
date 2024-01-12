/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  output: 'export'
}

module.exports = nextConfig
