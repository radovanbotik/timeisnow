/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "geo-media.beatport.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
