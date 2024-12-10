/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true, // Disables the Image Optimization API for static exports
    },
};

module.exports = nextConfig;
