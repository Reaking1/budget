const staticCachename = "pwa";


self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open(staticCachename).then(function (cache) {
      return cache.addAll(["/"]);
    })
  );
});


self.addEventListener("fecth", function (event) {
  console.log(event.request.url);

});