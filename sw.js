self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
// Network only: no cached application or private data.
self.addEventListener('fetch', event => { if (event.request.method === 'GET' && new URL(event.request.url).origin === self.location.origin) event.respondWith(fetch(event.request)); });
