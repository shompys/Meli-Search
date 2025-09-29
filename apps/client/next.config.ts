import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	sassOptions: {},
	images: {
		remotePatterns: [new URL("https://http2.mlstatic.com/**")],
	},
};

export default nextConfig;
