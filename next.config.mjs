/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io", "via.placeholder.com", "f4.bcbits.com"],
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
