// Offline support. Bump VERSION whenever you deploy changed files.
const VERSION = 'dsa-v5';
const FILES = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "fonts/fonts.css",
  "fonts/atkinson-hyperlegible-latin-400-normal.woff2",
  "fonts/atkinson-hyperlegible-latin-700-normal.woff2",
  "fonts/jetbrains-mono-latin-400-normal.woff2",
  "fonts/jetbrains-mono-latin-600-normal.woff2",
  "icons/apple-touch-icon.png",
  "icons/favicon-32.png",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "labs/two-pointers.html",
  "labs/sliding-window.html",
  "labs/prefix-sums.html",
  "labs/arrays.html",
  "labs/hash.html",
  "labs/sort.html",
  "labs/binary-search.html",
  "labs/intervals.html",
  "labs/stack.html",
  "labs/linked-lists.html",
  "labs/backtracking.html",
  "labs/trees.html",
  "labs/heaps.html",
  "labs/graphs.html",
  "labs/greedy.html",
  "labs/dp.html",
  "labs/tries.html",
  "labs/bits-math.html"
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
// Serve from the cache first (instant and offline), and refresh the cache in the background.
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(caches.open(VERSION).then(async cache => {
    const hit = await cache.match(req, { ignoreSearch: true });
    const fresh = fetch(req).then(res => { if (res.ok) cache.put(req, res.clone()); return res; }).catch(() => hit);
    return hit || fresh;
  }));
});
