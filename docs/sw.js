importScripts('/paddy/_nuxt/workbox.42554690.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/paddy/_nuxt/app.4a35ef1e484765945528.js",
    "revision": "ea7c2a245dfbd7c4fa758bca5f276f46"
  },
  {
    "url": "/paddy/_nuxt/layouts/default.8688aa4789d1beb525d0.js",
    "revision": "41c25cbe8f9ee5cdc9a8abdba15a705b"
  },
  {
    "url": "/paddy/_nuxt/manifest.a9ef1d1087fa3568e204.js",
    "revision": "12eba7ba5b6b42ae7e47dcbd0f703af0"
  },
  {
    "url": "/paddy/_nuxt/pages/index.f78099a22e52dcff3fc8.js",
    "revision": "fbb9826770f74cb4c2ea270d33c8b55a"
  },
  {
    "url": "/paddy/_nuxt/vendor.d40deb72c48669d56b7e.js",
    "revision": "d4e6d62ec2c385da62f6eb221a3bcd33"
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





