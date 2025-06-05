'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "5d1cd93f213228b8e6fa97d2b7cf8e4e",
"version.json": "7c7d3eea9d903695d87890be8fa0ee00",
"index.html": "3d2c73739c1e4a4e7bff4dc9812705f8",
"/": "3d2c73739c1e4a4e7bff4dc9812705f8",
"main.dart.js": "a15d952185ca51308343acd5e4378aaa",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "28afe7b6f0ad22a8449eb58c3af010d5",
"assets/AssetManifest.json": "fe2818f404bcb180a6bb008253421c64",
"assets/NOTICES": "ad422d7f16a8c485fe73435de6c99a16",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "24e2a3b5fb62eed19bda78aef24a67fc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/flutter_deck/assets/header.png": "7b35f3749eb44d6d99f8621da7ba71a5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "f9e17702be3bf2817af14963edc25f54",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/generative-ui-overview.png": "fa1d249d4440bca2a6b936f08c560558",
"assets/assets/intercom.png": "a06ac5570c6214864d82f8fcb9b7a4da",
"assets/assets/revenue-cat-paywall.png": "8297adba91ecdbee6532055dc768001e",
"assets/assets/notion.png": "49b71c3fc6cd6d9e241fd3a99ee52116",
"assets/assets/flutter-architecture-simplified.png": "fafccfbb5b5589cd87a7eed992267308",
"assets/assets/dante-divine-comedy-cover.png": "ea7af315ff2a6bd8effd039917d606bd",
"assets/assets/code-push.png": "03cb5827a92f40c6f550315b23eb980b",
"assets/assets/dante-inferno.png": "4d190d8a776605ea361f5d5877e8b0f0",
"assets/assets/rfw-architecture.png": "a821208aa759f7193320391b553fc5c2",
"assets/assets/design-trends.png": "bd0a0dd2cbabea502ac6706ea936a375",
"assets/assets/code-push-relevance.png": "037b404cfc1c2a77fc7ba0a98a5ed241",
"assets/assets/feature-flag-progressive.png": "1e93e61e4c3adab89dd9cf97db67d5fc",
"assets/assets/feature-flags.png": "d26d8e327911376f895b46d4da64cf9e",
"assets/assets/over-the-air-update.png": "ac1e0664f42c026f5c5436264d83fa56",
"assets/assets/reading-more-resolution.png": "9b61df4a2fc9ebe3ecd576563f254d1f",
"assets/assets/firebase-remote-config-logo.png": "ec0c8869e1000c13fd324be4359f43d3",
"assets/assets/feature-flag.png": "42f24fe962fa05a8b8f8baaa35813df0",
"assets/assets/flutter-architecture-shorebird.png": "fe0eabe744cab933c50ab743bb2685c9",
"assets/assets/shorebird.png": "a707f85f18fa672c1b55898303183901",
"assets/assets/ab-test.png": "6f2b3aef842ed402c80004284ccbd496",
"assets/assets/personalized-config.png": "35de061dfaaa95adb629e938e4bd0433",
"assets/assets/crowdin.png": "399f4bb79a7ac9b5354608fdd635746a",
"assets/assets/dark/generative-ui-overview.png": "1719b1f4fa3fad25d244190baf702ad9",
"assets/assets/dark/flutter-architecture-simplified.png": "e61b06611874d0b0ac69c516a92edca2",
"assets/assets/dark/rfw-architecture.png": "4d28da71cc7eb2ae54a8e655b2e4ee3d",
"assets/assets/dark/design-trends.png": "4c71e728f4e1075fde765baaf8b0df0c",
"assets/assets/dark/feature-flag-progressive.png": "181cf0402071ca359daaf9a888f8ffdc",
"assets/assets/dark/feature-flag.png": "2c96ec206d801415bdcdbc4fe1a22ac7",
"assets/assets/dark/flutter-architecture-shorebird.png": "fa5b89d03e49cf06fbe5ae47c02dbf20",
"assets/assets/dark/ab-test.png": "b6052ebcd76a6b0b8afa826b82eab446",
"assets/assets/dark/personalized-config.png": "6f39a82c8226faef30cca60968bea59c",
"assets/assets/dark/generative-ui-chart.png": "cfb0a41c3b98bfc5e3efff10bfef49f2",
"assets/assets/webview-demo.png": "285ab5c467716d3a85e1556e3088084e",
"assets/assets/new-year.png": "df63df2ec3800e93e267dadf2b160db5",
"assets/assets/generative-ui-chart.png": "467381931f02968a0a7f3cf954cffbe1",
"assets/assets/speaker.png": "68d459494804e9a204d80a43fd0bc14c",
"assets/assets/app-update-rejected.png": "35529e418a0aeb188bd92aa2441acf21",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
