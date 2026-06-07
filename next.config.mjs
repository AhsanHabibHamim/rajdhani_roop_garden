/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ['vm-73pe7yika620s3ys2d0ploi2.vusercontent.net'],
}

export default nextConfig
