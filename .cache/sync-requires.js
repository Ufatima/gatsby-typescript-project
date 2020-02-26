const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-index-tsx": hot(preferDefault(require("/home/fatima/Desktop/intergrify/Integrify training/gatsby/jamstack-typescript-boilerplate/src/pages/404/index.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/home/fatima/Desktop/intergrify/Integrify training/gatsby/jamstack-typescript-boilerplate/src/pages/index.tsx"))),
  "component---src-pages-page-2-index-tsx": hot(preferDefault(require("/home/fatima/Desktop/intergrify/Integrify training/gatsby/jamstack-typescript-boilerplate/src/pages/page-2/index.tsx")))
}

