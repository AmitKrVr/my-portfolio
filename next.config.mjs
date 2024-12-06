/** @type {import('next').NextConfig} */
import nextMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypePrism from "@mapbox/rehype-prism";

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**.unsplash.com",
            },
            {
                protocol: "https",
                hostname: "**.cloudinary.com",
            },
        ],
    },
    experimental: {
        mdxRs: true,
    },
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

const withMDX = nextMDX({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypePrism],
    },
});

export default withMDX(nextConfig);
