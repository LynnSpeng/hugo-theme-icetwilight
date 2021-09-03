module.exports = {
  plugins: [
    require("postcss-import")({
      path: ["."],
    }),
    require("tailwindcss")("tailwind.config.js"),
    require("autoprefixer")({
      browsers: ["last 2 versions", "ie >= 9"],
    }),
  ],
};
