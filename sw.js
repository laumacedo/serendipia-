const CACHE_NAME = 'gut-rub-v1';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './AUDIO-2026-06-11-22-35-47.mp3'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
