// Service Worker des MMBbS Teaching Assistant
// Liefert entpackte H5P-Aktivitäten und den H5P-Player aus dem Browser-Cache aus.
// Es wird nichts ins Netz geschickt, alle Dateien liegen nur in diesem Browser.
const CACHE = 'mmbbs-ta-h5p-v1';
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (url.origin !== location.origin || !url.pathname.includes('/__ta/')) return;
  e.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const hit = await cache.match(url.origin + url.pathname, { ignoreSearch: true });
    return hit || new Response('Nicht gefunden', { status: 404, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
  })());
});
