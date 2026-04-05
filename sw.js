const CACHE_NAME = "sda-costindex-v36";

const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "/icon-192.png"
];

// install
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// fetch (offline)
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
