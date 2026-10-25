/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.21st.dev"
      }
    ]
  }
};

export default nextConfig;
