'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "1d59b28f82720eb6e87651ce866bfa19",
"index.html": "74167e08e375baebc8e5899c5c9d20a8",
"/": "74167e08e375baebc8e5899c5c9d20a8",
"main.dart.js": "da63a235da05c60f29e638728016da2a",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "af9918bd18b0a8795b275ea19e6cf4fa",
"assets/AssetManifest.json": "dc99646cd08d9f3cd0c91610104371cf",
"assets/NOTICES": "b4347bed916a8b6fc74731dde6456c75",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/products/Products18.jpg": "b25ea64158bfe00e2be6f10bf7498afc",
"assets/assets/products/Products9.png": "85784db4514070c30f5b8b345a0607a5",
"assets/assets/products/Products8.png": "6083cd1d786edf3af545e16a3bf5b9c8",
"assets/assets/products/Products13.jpg": "3590e75a778daaebc633029eaf0996bf",
"assets/assets/products/Products5.png": "4e53f11e18c9981f1808106cb14a00b5",
"assets/assets/products/Products4.png": "087d73641ee542bf2f83128439212bc8",
"assets/assets/products/Products12.jpg": "6ee9b31ce1026b4f51941f59749c85ce",
"assets/assets/products/Products10.png": "a9e8e3a34c1097ec16a0aeb3a9aa7e7b",
"assets/assets/products/Products6.png": "201e8812e078f0073e329841f7ae3a24",
"assets/assets/products/Products7.png": "a1d91d727509f6125af668c2e129ae6f",
"assets/assets/products/Products11.png": "9396834c43527d437a1e9d5f01309847",
"assets/assets/products/Products15.png": "21966228df353942d2131a72367d4613",
"assets/assets/products/Products3.png": "ed307e79609bf347cac57195b1e8229f",
"assets/assets/products/Products2.png": "50b9c45708a357c2c84628a55c498a14",
"assets/assets/products/Products14.jpg": "ad358ff5ce0894a4565aa4d8b5c85aca",
"assets/assets/products/Products16.jpg": "be606840a39f6d39a4f74480fed69ef6",
"assets/assets/products/Products1.png": "f9a4487e49299dca3eb2c5e84c55d570",
"assets/assets/products/Products17.jpg": "c3f13b84674c11f64272f8ae78500dc3",
"assets/assets/Services.png": "f0a02df44b31acae68153f03ac508954",
"assets/assets/TopRibbon8.png": "7ac989e2fd4a66e0f900114605ae7ab0",
"assets/assets/HomeBackground.png": "7f1e962ead133a37ffa032e48f6d8d12",
"assets/assets/PlaceHolder.png": "0ffef780e1cfc9fe528954bb8cc0bab3",
"assets/assets/TopRibbon3.png": "4448960410351e2336533f8a39d8f215",
"assets/assets/Artboard1.png": "701f4444bc23b08faaec4f9b1c5b23d5",
"assets/assets/TopRibbon2.png": "3aed3d9b2bcfca907832075364785a0d",
"assets/assets/Artboard3.png": "fdcc94d9d01f3e7d2cb3dfadaf04545d",
"assets/assets/TopRibbon1.png": "a08c4db09ed11c37da6db53ebe0e00ff",
"assets/assets/Artboard2.png": "d2dcf99221792b110bc99d12a3d33bf4",
"assets/assets/ArtboardS.png": "b48e92b6c91f1b154a66a0d91f5e2469",
"assets/assets/Artboard.png": "9fd243c8451288d25b501a2f603dcd5f",
"assets/assets/Artboard6.png": "df55b9492fc26473b330fccf9def715f",
"assets/assets/TopRibbon5.png": "bfa23ec6c8d8557dacc9c47d41e3359e",
"assets/assets/TopRibbon4.png": "9f1458490f4c7737d0d5b9a2b2d4fd28",
"assets/assets/TopRibbon6.png": "043ac3a9da42ab8866bf6695980e198b",
"assets/assets/Artboard5.png": "431074ea781a493436bd30229c773d6f",
"assets/assets/TopRibbon7.png": "cbcb47131b373daebd1337cab4a27502",
"assets/assets/Artboard4.png": "0ab2c6a2cf89adcefc88405706074d2f",
"assets/assets/ProductBackground.png": "406a4df273ec98a5bfddc4f16ba2a9b5",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
