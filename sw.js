const CACHE_NAME = 'gut-rub-v5';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  './AUDIO-2026-06-11-22-35-47.mp3',
  './IMG_0024.jpeg',
  './IMG_0056.jpeg',
  './IMG_0062.jpeg',
  './IMG_0079.jpeg',
  './IMG_0096.jpeg',
  './IMG_0101.jpeg',
  './IMG_0128.jpeg',
  './IMG_0248.jpeg',
  './IMG_0270.jpeg',
  './IMG_0324.jpeg',
  './IMG_0354.jpeg',
  './IMG_0391.jpeg',
  './IMG_0396.jpeg',
  './IMG_0558.jpeg',
  './IMG_0592.jpeg',
  './IMG_0604.jpeg',
  './IMG_0608.jpeg',
  './IMG_0637.jpeg',
  './IMG_0641.jpeg',
  './IMG_0655.jpeg',
  './IMG_0662.jpeg',
  './IMG_0671.jpeg',
  './IMG_0674.jpeg',
  './IMG_0697.jpeg',
  './IMG_0724.jpeg',
  './IMG_0879.jpeg',
  './IMG_1190.jpeg',
  './IMG_1191.jpeg',
  './IMG_1296.jpeg',
  './IMG_1706.png',
  './IMG_1760.jpeg',
  './IMG_2159.jpeg',
  './IMG_2855.jpeg',
  './IMG_7888.jpeg',
  './IMG_8143.jpeg'
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
