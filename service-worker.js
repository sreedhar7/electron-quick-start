console.log("Service worker startup.");

self.addEventListener('install', function(event) {
  console.log("Service worker installed.");
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  console.log("Service worker activated.");
});

self.addEventListener('fetch', function(event) {
  if (event.request.url.indexOf('get-sw-user-agent') != -1) {
    event.respondWith(new Response(navigator.userAgent));
  }
});
