/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io", "via.placeholder.com"],
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
