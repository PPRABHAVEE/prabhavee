/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // 👈 This tells Next.js to generate a static site
  images: {
    unoptimized: true,  // required for static export if using <Image />
  },
};

export default nextConfig;
