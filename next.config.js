/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... other config options
  output: 'standalone',
  experimental: {
    // Add this to prevent static generation errors
    workerThreads: false,
    cpus: 1
  },
  // Add this to prevent static generation of these pages
  unstable_runtimeJS: true,
  unstable_JsPreload: false
}

module.exports = nextConfig 