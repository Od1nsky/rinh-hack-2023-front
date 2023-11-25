/* eslint no-param-reassign: 0 */

const path = require("path");
// eslint-disable-next-line import/no-extraneous-dependencies
const withBundleAnalyzer = require("@next/bundle-analyzer")({
   enabled: process.env.ANALYZE === "true",
});

/** @type {import("next").NextConfig} */
const nextConfig = {
   compress: true,
   reactStrictMode: false,
   webpack(config) {
      config.module.rules.push({
         test: /\.svg$/i,
         issuer: /\.[jt]sx?$/,
         use: ["@svgr/webpack"],
      });

      return config;
   },
   sassOptions: {
      includePaths: [path.join(__dirname, "src/global")],
      prependData: '@import "_variables.scss";',
      sourceMaps: true,
   },
};

module.exports = withBundleAnalyzer(nextConfig);
