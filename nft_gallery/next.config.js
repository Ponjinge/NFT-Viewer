/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        remotePatterns: [{hostname: "ipfs.io"}, {hostname: "utfs.io"}, {hostname: "uploadthing-prod-sea1.s3.us-west-2.amazonaws.com"}], 
    },


};

export default config;
