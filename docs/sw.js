importScripts('/paddy/_nuxt/workbox.42554690.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/paddy/_nuxt/app.6d6e5b299f0b3458282f.js",
    "revision": "5279d43a2f43cc056a669185b2610822"
  },
  {
    "url": "/paddy/_nuxt/layouts/default.6c944e592b493016e215.js",
    "revision": "2c694c9e00f547bc5a0cf01eead9e305"
  },
  {
    "url": "/paddy/_nuxt/manifest.dae5d83f4beff88fdf15.js",
    "revision": "be695c7d16b803045014f7ae34f4b941"
  },
  {
    "url": "/paddy/_nuxt/pages/index.bfa2b537c42cde42afc6.js",
    "revision": "ea1bd54eef89f152bd96e8e5c8ea663b"
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





