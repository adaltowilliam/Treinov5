const CACHE = "treino-v1";
const ASSETS = [
  "/Treinov5/",
  "/Treinov5/index.html",
  "/Treinov5/manifest.json"
];
self.addEventListener("install", e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));
});
self.addEventListener("fetch", e=>{
  e.respondWith(caches.match(e.request).then(r=>r || fetch(e.request)));
});
