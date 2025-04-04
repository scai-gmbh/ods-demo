/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",

    experimental: {
        typedRoutes: true,
    },

    eslint: {
        ignoreDuringBuilds: true,
    },

    poweredByHeader: false,

    rewrites: async () => [
    ],


    headers: async () => [
        {
            source: "/:path*",
            headers: [
                { key: "X-Content-Type-Options", value: "nosniff" },
                { key: "X-Frame-Options", value: "SAMEORIGIN" },
            ],
        },
    ],
};

export default nextConfig;
