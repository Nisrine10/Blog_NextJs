/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https", // Corrected typo here
                hostname: "bytegrad.com", // Corrected typo here
            }
        ]
    }
};

export default nextConfig;
