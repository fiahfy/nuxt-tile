importScripts('/paddy/_nuxt/workbox.42554690.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/paddy/_nuxt/app.9033199dcf743326a3c0.js",
    "revision": "581b346d5b7e6f62fb378374adfbd2f8"
  },
  {
    "url": "/paddy/_nuxt/layouts/default.4f96021910ad4be83589.js",
    "revision": "3775d7cede86965dae76ea49cdc68fc2"
  },
  {
    "url": "/paddy/_nuxt/manifest.618df280e2da8cea513e.js",
    "revision": "51c4abe8cc4718d35b572f29a2e4770a"
  },
  {
    "url": "/paddy/_nuxt/pages/index.f64a87ba3e4d17ce89ed.js",
    "revision": "070e7d41d3cad9eea78e9841321397a3"
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





