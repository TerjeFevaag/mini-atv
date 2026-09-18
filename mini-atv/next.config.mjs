/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'mini-atv.vercel.app' }],
        destination: 'https://mini-atv.no/:path*',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
