module.exports = ({ env }) => ({
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": {},
    tailwindcss: {},
    autoprefixer: {},
    cssnano:
      env === "production"
        ? {
            preset: ["default", { discardComments: { removeAll: true } }],
          }
        : false,
  },
});
