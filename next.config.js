const nextConfig = {
  webpack(config) {
    // Exclude SVGs from being processed by default file loader
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/, // Apply only to JavaScript/TypeScript files
      use: ["@svgr/webpack"], // Use SVGR to handle SVGs as React components
    });

    return config;
  },
};

export default nextConfig;
