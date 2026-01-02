/** @type {import('next').NextConfig} */
const nextConfig = {
  // Retirer 'output: export' car on a besoin des API routes
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Exclure puppeteer-core et chromium du bundle webpack
      config.externals = [...(config.externals || []), 'puppeteer-core', '@sparticuz/chromium']
    }
    return config
  },
}

module.exports = nextConfig
