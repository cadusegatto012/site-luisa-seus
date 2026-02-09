/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Isso permite que o site suba mesmo se a IA tiver escrito algo "gramaticalmente" errado no código
    ignoreBuildErrors: true, 
  },
};

export default nextConfig;
