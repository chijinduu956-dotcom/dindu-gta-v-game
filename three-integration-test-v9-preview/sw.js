const CACHE = "dindu-gta-pwa-v1";
const base = self.registration.scope;
const shell = [
  new URL("./", base).href,
  new URL("./index.html", base).href,
  new URL("./manifest.webmanifest", base).href,
  new URL("./assets/dindu-gta-icon.svg", base).href,
  new URL("./assets/dindu-gta-startup.jpg", base).href
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(shell))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(key => key.startsWith("dindu-gta-pwa-") && key !== CACHE)
            .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET" || event.request.mode !== "navigate") return;
  const page = new URL("./index.html", base).href;
  event.respondWith(
    fetch(event.request).then(response => {
      if (response.ok) {
        const copy = response.clone();
        caches.open(CACHE).then(cache => cache.put(page, copy));
      }
      return response;
    }).catch(() => caches.match(page))
  );
});
