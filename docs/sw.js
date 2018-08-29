importScripts('/paddy/_nuxt/workbox.42554690.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/paddy/_nuxt/app.db26b0468bdf6b259f4c.js",
    "revision": "379abbdc299ab0106ac4311627f05c3b"
  },
  {
    "url": "/paddy/_nuxt/layouts/default.29938c2e37f01627f174.js",
    "revision": "26106f589dab16e15d7e1529b49beab2"
  },
  {
    "url": "/paddy/_nuxt/manifest.9831afbcf4626e1f8bf8.js",
    "revision": "2730612dff889041adf2534698dce194"
  },
  {
    "url": "/paddy/_nuxt/pages/index.55157e3f095a5ec27e8e.js",
    "revision": "e48f70772a5c18fff7398cf00d7db7a8"
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





