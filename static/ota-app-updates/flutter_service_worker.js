'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "3005c3a17775976ef807e73cca4a18e4",
"version.json": "7c7d3eea9d903695d87890be8fa0ee00",
"index.html": "3d2c73739c1e4a4e7bff4dc9812705f8",
"/": "3d2c73739c1e4a4e7bff4dc9812705f8",
"main.dart.js": "71fd16b356311c462646b68704bfaeb1",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.mjs": "7cd2e6993ae215a48d4acd77a5354841",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "28afe7b6f0ad22a8449eb58c3af010d5",
"main.dart.wasm": "8d06c859dc53e72e73ae7e49cd058e0d",
"assets/AssetManifest.json": "3c5cf3bd22793fcf99c709de59e963f5",
"assets/NOTICES": "917b21033afe6e1199392491941c9d87",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "a24a542befe883fe27e0c191dca2c947",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/flutter_deck/assets/header.png": "7b35f3749eb44d6d99f8621da7ba71a5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "42e5eded4c81daae2689504a32735291",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/cat-product-manager.png": "ff750123704230fbdb9919a53228a708",
"assets/assets/generative-ui-overview.png": "fa1d249d4440bca2a6b936f08c560558",
"assets/assets/intercom.png": "a06ac5570c6214864d82f8fcb9b7a4da",
"assets/assets/sign-up-no-name.png": "9e33d2032210e7878a1f8ef1591d99cd",
"assets/assets/revenue-cat-paywall.png": "8297adba91ecdbee6532055dc768001e",
"assets/assets/sign-in-with-apple-second.png": "51d074e955269dac89705cc728935d68",
"assets/assets/notion.png": "49b71c3fc6cd6d9e241fd3a99ee52116",
"assets/assets/code-push.png": "03cb5827a92f40c6f550315b23eb980b",
"assets/assets/traditional-vs-server-driven-ui.png": "a52e815c6428dde3ece17ae7ec8bd3d1",
"assets/assets/sign-in-with-apple.png": "4c290b24b31105c26caca911d0a53aad",
"assets/assets/slow-app-review.png": "b92ac8bb28295c157c6b3c95bab8b228",
"assets/assets/cats-high-five.png": "ce7c1859d99a59f93f075c9e20f1b43b",
"assets/assets/sign-in-with-apple-problem-explained.png": "35cf86389c422d476bab79e3534e184c",
"assets/assets/december-4th.png": "0f61cf50ab94662e649d269fe7f79b0c",
"assets/assets/server-driven-ui.png": "754d35b8a1a09439e631387b1ea32062",
"assets/assets/next-app-version-condition.png": "04b08a209f6c0f4e6e4d838aa9cc77da",
"assets/assets/over-the-air-update.png": "3ff6566c8cefe04f69edc5ff3a7af9e0",
"assets/assets/december-25th.png": "597e9975e865a9bd40e08a26aac393e8",
"assets/assets/submission-successful.png": "81ba4eb9237141d1f35fa6c964ccdd63",
"assets/assets/firebase-remote-config-logo.png": "ec0c8869e1000c13fd324be4359f43d3",
"assets/assets/cross-platform-architecture.png": "35425e79c90976d535b8033eaaa5fa5d",
"assets/assets/server-driven-ui-and-ai.png": "f639c38e37765adeaf36ded63e3921d7",
"assets/assets/web-dev-confused.png": "e9fd9d0f757c76d74f9551ed7a57f839",
"assets/assets/session-replay.png": "7f1006cddf6c387549a199776d21cd7a",
"assets/assets/sign-up-name.png": "b1bb70565936e5c7dbb126952045c307",
"assets/assets/december-12th.png": "969a52316296f744af7786f65dd8adb3",
"assets/assets/app-update-pending.png": "170103877266ecd27df2de04473394ec",
"assets/assets/app-submission-problems.png": "01aa22421f4f670fc68399d541318884",
"assets/assets/server-driven-ui-architecture.png": "a08f9adc0d919cac8266da5384191cad",
"assets/assets/eas.png": "0e822bb972af02d0179583f238de133d",
"assets/assets/hehe-cat.png": "8d2499cbb73792200b9292c70ebe6b6b",
"assets/assets/coding-under-deadline.png": "7b97489729a7c457526bb2c4bc338dce",
"assets/assets/bonus-story.png": "4d2dcfeb47c588d032cb91910d561833",
"assets/assets/shorebird.png": "a707f85f18fa672c1b55898303183901",
"assets/assets/crowdin.png": "399f4bb79a7ac9b5354608fdd635746a",
"assets/assets/hide-name-fields-feature-flag.png": "c8481c277b0c8c898da3df22240c02b7",
"assets/assets/dark/generative-ui-overview.png": "1719b1f4fa3fad25d244190baf702ad9",
"assets/assets/dark/traditional-vs-server-driven-ui.png": "7c3421e38289bdc2081767da3b1d442c",
"assets/assets/dark/cross-platform-architecture.png": "f2dd025c8ab0273e03c168049ae22878",
"assets/assets/dark/server-driven-ui-and-ai.png": "bd5c1a8ea09f56f5a55d4332d0648a2e",
"assets/assets/dark/server-driven-ui-architecture.png": "115c7b7a554c628cc762858605ee5913",
"assets/assets/dark/generative-ui-chart.png": "c5f3afff65e0a06ec67d16ff2af28c67",
"assets/assets/dark/code-push-architecture.png": "3713a0e0b30070acd0098c16553214c1",
"assets/assets/webview-demo.png": "285ab5c467716d3a85e1556e3088084e",
"assets/assets/summary.png": "bc7fd688a6fa591e35f98bb3a03c5c60",
"assets/assets/cat-annoyed.png": "4eed391f20c3363f39b9fefa71ece465",
"assets/assets/generative-ui-chart.png": "5594dea892dece9496195f40b2d99db0",
"assets/assets/sign-up-name-empty.png": "af74a0b8d32acc7eb4570ecb6b3e8bea",
"assets/assets/code-push-architecture.png": "13c9c2ffe62b9491903feeb54c09daed",
"assets/assets/speaker.png": "68d459494804e9a204d80a43fd0bc14c",
"assets/assets/code-push-update-process.png": "0ee13f26b426ecdf243573fcffb3ea88",
"assets/assets/aws-wrapped.png": "6e26a05d99d0db7fa9f5b6aa4de15424",
"assets/assets/story-time.png": "e87225a34f0d52bfd342ac507f756d65",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
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
