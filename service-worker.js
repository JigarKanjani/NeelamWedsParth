const CACHE_NAME = 'neelamwedsparth-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/images/WA Profile Pic.png',
  // Add more images as needed
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
      .catch(() => caches.match('/index.html'))
  );
}); 