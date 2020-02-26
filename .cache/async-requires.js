// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-index-tsx": () => import("./../src/pages/404/index.tsx" /* webpackChunkName: "component---src-pages-404-index-tsx" */),
  "component---src-pages-index-tsx": () => import("./../src/pages/index.tsx" /* webpackChunkName: "component---src-pages-index-tsx" */),
  "component---src-pages-page-2-index-tsx": () => import("./../src/pages/page-2/index.tsx" /* webpackChunkName: "component---src-pages-page-2-index-tsx" */)
}

