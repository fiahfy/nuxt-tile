importScripts('/paddy/_nuxt/workbox.42554690.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/paddy/_nuxt/app.5face34d526d13729b10.js",
    "revision": "22fa236212b6b13c05e0b5b7214e09fe"
  },
  {
    "url": "/paddy/_nuxt/layouts/default.72664e4fce8b913fbaea.js",
    "revision": "4f5144a00ab3047ed5efd6e2a434ad22"
  },
  {
    "url": "/paddy/_nuxt/manifest.a149edf47a7f8ae313fc.js",
    "revision": "1d8d1fc20de2d8f56310120bc1981c00"
  },
  {
    "url": "/paddy/_nuxt/pages/index.68e19f40d4e67db2e726.js",
    "revision": "0b4f1df0918c8c96373c1b18add0007f"
  },
  {
    "url": "/paddy/_nuxt/vendor.18bd60f526087518c094.js",
    "revision": "465686305345e9e700bd8010af4105a9"
  }
], {
  "cacheId": "paddy",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/paddy/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/paddy/.*'), workbox.strategies.networkFirst({}), 'GET')





