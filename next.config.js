const nextConfig = {
    env: {
        REACT_APP_API_KEY: process.env.REACT_APP_API_KEY,
    },
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: "/old-blog/:path*",
                destination: "/about",
                permanent: false,
            },
        ];
    },
    async rewrites() {
        return [
            {
                source: "/api/movies",
                destination: `https://api.themoviedb.org/3/movie/popular?api_key=e31e85c418f741a72b23f35bc0289a41`,
            },
        ];
    },
};

module.exports = nextConfig;
