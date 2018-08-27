importScripts('/paddy/_nuxt/workbox.42554690.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/paddy/_nuxt/app.96222084a69dbea0a739.js",
    "revision": "801d29a475bd52efbc6e43b7296412d6"
  },
  {
    "url": "/paddy/_nuxt/layouts/default.c8eb7bade69068cd39f6.js",
    "revision": "9030ddafac935a7acae4e25ad6aa9ab8"
  },
  {
    "url": "/paddy/_nuxt/manifest.1871cc21b0c44ff21300.js",
    "revision": "74cbba889fffb093f4a03318caa7ffea"
  },
  {
    "url": "/paddy/_nuxt/pages/index.d6e60fdb996141841419.js",
    "revision": "a58af0c9ac7c83349ab23f4192bf5c8a"
  },
  {
    "url": "/paddy/_nuxt/vendor.5b7692fda854139761e0.js",
    "revision": "515d4905c0d62933fc1a52de8e5d742f"
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





