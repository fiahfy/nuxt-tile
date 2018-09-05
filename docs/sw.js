importScripts('/paddy/_nuxt/workbox.42554690.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/paddy/_nuxt/app.f1f337fd3d00cd43cd31.js",
    "revision": "cdf09994503efc515cf2cc1f9e735751"
  },
  {
    "url": "/paddy/_nuxt/layouts/default.eb4bdeaee874f4c0c170.js",
    "revision": "5141608d375d9208cdda412b8b572472"
  },
  {
    "url": "/paddy/_nuxt/manifest.2f5c74db5af9a0484162.js",
    "revision": "077a040929aea38469f82da729a39cc1"
  },
  {
    "url": "/paddy/_nuxt/pages/index.e1b56240ba5d02d45e15.js",
    "revision": "68fae676cf5ec1e0474b16469ee6db2f"
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





