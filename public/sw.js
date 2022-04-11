const CACHE_STATIC = 'static-cache-v0';

self.addEventListener('install', async event => {
    self.skipWaiting();
    const cache = await caches.open(CACHE_STATIC);
    await cache.add("/");
    console.log('Service worker installed');
});
self.addEventListener('activate', async event => {
    const cachesKeys = await caches.keys();
    const checkKeys = cachesKeys.map(async key => {
        if (![CACHE_STATIC].includes(key)) {
        //if (!["bkjbs"].includes(key)) {
            await caches.delete(key);
        }
    });
    await Promise.all(checkKeys);
    console.log('Service worker activated');
});
self.addEventListener('fetch', event => {
    return
    event.respondWith(event.request)
});