const staticCacheName = 'static-cache-v1'
const dynamicCacheName = 'dynamic-cache-v1'

const assetsUrls = [
  'images/logo.svg',
  'images/transparent-logo.svg',
  'icons/console.svg',
  'icons/laptop.svg',
  'icons/minus.svg',
  'icons/plus.svg',
  'icons/smart-tv.svg',
  'icons/smartphone.svg',
  'icons/tablet.svg',
  'icons/vr.svg',
]

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const cacheFirst = async (request) => {
  const cached = await caches.match(request)
  return cached ?? (await fetch(request))
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const networkFirst = async (request) => {
  const cache = await caches.open(dynamicCacheName)
  try {
    const response = await fetch(request)
    await cache.put(request, response.clone())
    return response
  } catch (error) {
    // const cached = await cache.match(request)
    // return cached ?? (await caches.match('/offline.html'))
    console.log(error)
  }
}

self.addEventListener('install', async () => {
  const cache = await caches.open(staticCacheName)
  await cache.addAll(assetsUrls)
})

self.addEventListener('activate', async () => {
  const cacheNames = await caches.keys()

  await Promise.all(
    cacheNames
      .filter((name) => name !== staticCacheName || name !== dynamicCacheName)
      .map((name) => caches.delete(name)),
  )
})

self.addEventListener('fetch', (evt) => {
  const { request } = evt
  const url = new URL(request.url)

  if (url.origin === location.origin) {
    evt.respondWith(cacheFirst(request))
  } else {
    evt.respondWith(networkFirst(request))
  }
})
