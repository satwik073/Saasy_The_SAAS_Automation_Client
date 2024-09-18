import path from 'path';
import { fileURLToPath } from 'url';

/** @type {import('next').NextConfig} */

// Simulate __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ['images.unsplash.com', 'assets.aceternity.com'],
  },

  webpack: (config) => {
    // Alias to resolve paths starting with @/
    config.resolve.alias['@'] = path.resolve(__dirname, './src');

    // Return the modified config
    return config;
  },
};

export default nextConfig;
