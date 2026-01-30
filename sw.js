const CACHE_NAME = 'ekantin-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './kasir.html' // Tambahkan nama file kasir bapak di sini jika namanya berbeda
];

// Proses Instalasi Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Logika agar aplikasi tetap bisa dibuka meski sinyal lemah
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});
