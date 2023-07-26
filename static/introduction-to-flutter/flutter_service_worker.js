'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "9ca6b398ba481e8e94d98d5ae5c61222",
"index.html": "474a5e167f89a7f697c6971b409c91f1",
"/": "474a5e167f89a7f697c6971b409c91f1",
"main.dart.js": "561f28983c3c8b59615f6788deeba6b0",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "767857fe6ff522469f4d47aeb603cda8",
"assets/AssetManifest.json": "c8da72914051cf994ddcc0a6a9de262b",
"assets/NOTICES": "379e5cf3565ad2f7ad15443943705c1f",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/shaders/water.glsl": "2d41f4e32a3814778094e2aa60569689",
"assets/AssetManifest.bin": "99d1c2f4b206f683ebcb0475d6f1f009",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/assets/images/flutter-trees.png": "8045896175aff96011dd33c76ed6f58d",
"assets/assets/images/platform-channels.png": "92649921567980fde25dcf397f1864e0",
"assets/assets/images/platforms/mobile.jpeg": "39bcb4ff561874ae7121c3bdbd7cf34d",
"assets/assets/images/platforms/embedded.jpeg": "de965cbb3e260c146766cb5858ecf06e",
"assets/assets/images/platforms/desktop.jpeg": "a3fbe9d10196537bd10515d0ffeba99c",
"assets/assets/images/platforms/web.jpeg": "3e366c66c96f08df150e5139eda1e1b2",
"assets/assets/images/add-to-app.gif": "410ef3cc7b6647040be3f81fdb6749a8",
"assets/assets/images/reactive-ui.gif": "902f31813b03552a1936de690e6f7e0f",
"assets/assets/images/kits/news-kit.png": "585de6c9486f9c9085b4c4dc5bff5637",
"assets/assets/images/kits/games-kit.png": "ed3991b093a0acfa2ad21b9f1faab1c0",
"assets/assets/images/devices.png": "535b941830ae879c12ba53375b0b571c",
"assets/assets/images/dart-meme.gif": "0f9f13aa788e85e8a7efe7b65239577d",
"assets/assets/images/flutter-pillars.png": "a90c89cc95267a5d0c70619442132b54",
"assets/assets/images/case-studies/philips.png": "42d3e899e6e65e47ffa03db2af522bbb",
"assets/assets/images/case-studies/betterment.png": "635e407302040f7412c94bb7715a35aa",
"assets/assets/images/case-studies/burger-king.png": "8b6938474d06b411bfa64d918754157f",
"assets/assets/images/case-studies/ca-24.png": "9d13e98c2201934c8aa51d604b40f25a",
"assets/assets/images/case-studies/reflectly.png": "20d45432fa35982e7a8173f5b6c82393",
"assets/assets/images/case-studies/bmw.png": "2c6c0542f13e6df65eda0386142ab24b",
"assets/assets/images/case-studies/google-pay.png": "b22381d0533f105fb89a65d6c88040c1",
"assets/assets/images/flutter-for-android-devs.png": "23eab5d544381895c915f5e30b985eaa",
"assets/assets/images/realtor/realtor-cash-rewards.gif": "cb4b735ef0ae4503da05241b1c2e2196",
"assets/assets/images/realtor/realtor-details.gif": "9570990cc1835cc94f780e369d831bd2",
"assets/assets/images/realtor/realtor-schedule.jpeg": "71fa356d051487de0d0be8532ff0b992",
"assets/assets/images/realtor/realtor-chat.png": "a54a0141b6ff2a9308a602fc655ab941",
"assets/assets/images/me/me.jpg": "9f4a808546ab6aecf6a37c743cf875fd",
"assets/assets/images/me/avatar.png": "6ceb67d5d3a7db2c587a47cebe04e92d",
"assets/assets/images/history/2023-feb.png": "d6683aabd63cbe1d29a4aec3d37da7cc",
"assets/assets/images/history/2018-dec.jpeg": "2a2009d7181255420fc042623a91b843",
"assets/assets/images/history/2021-mar.png": "7f73f22998c5ebfa86b84274340bad24",
"assets/assets/images/history/2015.jpeg": "ebd0dbebde781516878e126ad605062c",
"assets/assets/images/history/2023-may.jpeg": "362b759ecd2efa11ff1ca3db95376e54",
"assets/assets/images/history/2022-may.png": "985440283ca82b6def053acec15a2df1",
"assets/assets/images/history/2019-feb.png": "683128ff10588159cdeddab322ef43e3",
"assets/assets/images/history/2022-feb.jpeg": "1689275670bc822125a34b7f55b8568e",
"assets/assets/images/flutter-community.png": "8a989fd7ff9cc210b066a50660a7db4b",
"assets/assets/images/impostor.png": "3403b10ea827d6bb4cbfca49cf91ddf8",
"assets/assets/images/architecture.png": "4fe0390f41e04c19d6b09fa9d51a03a0",
"assets/assets/images/restart.jpeg": "37f9492f2a2ed437f9e096b31cf7956f",
"assets/assets/rive/teddy.riv": "90e989ba9730ea86dc8cbb59411507bb",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
