//! СТРАТЕГИИ КЕШИРОВАНИЯ

//* CACHE ONLY - все запросы направляются в кэш. Если не найдены, то запрос падает
// event.respondWith(caches.match(event.request))

//* NETWORK ONLY - все запросы направляются в сеть
// event.respondWith(fetch(event.request))

//* CACHE FALLING BACK TO NETWORK - сначала в кэш, если неудачно, то в сеть (для offline first)
// event.respondWith(
//   caches.match(event.request).then((response) => {
//     return response || fetch(event.request)
//   }),
// )

//* NETWORK FALLING BACK TO CACHE - сначала в сеть, если удачно, то кладется в кэш. Если неудачно, то берется из кэша
// event.respondWith(
//  fetch(event.request).catch(() => {
//    return caches.match(event.request)
//  }),
// )

//* GENERIC FALLBACK (Резерв) - если запрос к сети и запрос к кэшу дают сбой, то берется резервный
// event.respondWith(
//  caches
//    .match(event.request)
//    .then((response) => {
//      return response || fetch(event.request)
//    })
//    .catch(() => {
//      return caches.match('/offline-html')
//    }),
// )

const CACHE_KEY = 'cache-v1'

self.addEventListener('install', async () => {
  await self.skipWaiting()
})

self.addEventListener('activate', async (event) => {
  const keys = await caches.keys()
  const oldKeys = keys.filter((key) => key !== CACHE_KEY)
  const updatedCache = Promise.all(oldKeys.map((key) => caches.delete(key)))

  event.waitUntil(updatedCache)
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    (async () => {
      try {
        // Попытка выполнить запрос в сеть
        const networkResponse = await fetch(event.request)

        // Клонирование ответа для кеширования
        const responseClone = networkResponse.clone()

        // Открытие кэша и сохранение копии ответа
        const cache = await caches.open(CACHE_KEY)
        await cache.put(event.request, responseClone)

        // Возвращение оригинального ответа
        return networkResponse
      } catch (error) {
        // Если сетевой запрос не удался, ищем ответ в кэше
        const cachedResponse = await caches.match(event.request)
        if (cachedResponse) {
          return cachedResponse
        }

        // Опционально: можно вернуть стандартный ответ или страницу для случаев, когда нет кэшированной копии
        return new Response('Network error occurred and no cached data available.', {
          status: 404,
          statusText: 'Network error',
        })
      }
    })(),
  )
})
