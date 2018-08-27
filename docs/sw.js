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
    "url": "/paddy/_nuxt/manifest.a443e53a378cdce8c771.js",
    "revision": "8f0b0bc6adf3defe5a140ea59e106fd1"
  },
  {
    "url": "/paddy/_nuxt/pages/index.4b0a182b44964ba7192d.js",
    "revision": "f24aafacb1a4dd25330425d7c674bce8"
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





