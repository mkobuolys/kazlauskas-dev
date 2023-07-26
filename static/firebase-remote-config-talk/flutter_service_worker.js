'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "a54cc4c85e3ba1582aebc4f862a23f26",
"index.html": "fa642007539057ec7492d924a28a80da",
"/": "fa642007539057ec7492d924a28a80da",
"main.dart.js": "73615f7ac9d3d4f9c2523efccc17c65d",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3dcf122deeb1a33bbe17a90ee0753169",
"assets/AssetManifest.json": "2362ce417d69edf72306417b49b1b960",
"assets/NOTICES": "4671d9c4d6aa2b25b1fb9ff7c26b5b16",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "baaec0be102e1cb79db430965efe424a",
"assets/fonts/MaterialIcons-Regular.otf": "a33724aa24b8443f5e7223b2a7a2ccb1",
"assets/assets/images/ab-testing/create-ab-test-step-3.png": "a645fbcad700dafd66c04fff050a98b9",
"assets/assets/images/ab-testing/ab-testing.png": "5abc0b1a5f5ece8566bc6277bd6a9313",
"assets/assets/images/ab-testing/create-ab-test-step-2.png": "2725c26b211bf6782104ac06307ba34b",
"assets/assets/images/ab-testing/create-ab-test.png": "96b54870b0f99829535f43f8267c54b1",
"assets/assets/images/ab-testing/rating-type-parameter-with-experiment.png": "4b277e7bc548b703c4f7655450098490",
"assets/assets/images/ab-testing/pun-rating-experiment.png": "3452d32e408f5355179a8b2643a759ca",
"assets/assets/images/ab-testing/create-ab-test-step-1.png": "ee0280a05453a5d474dcb25b83225755",
"assets/assets/images/ab-testing/create-ab-test-step-5.png": "a1f7332edbb3f550dffe72d47285e14b",
"assets/assets/images/ab-testing/create-ab-test-step-4.png": "bd0885714b91d8520d2a98fdcd0a09d3",
"assets/assets/images/ab-testing/rating-type-usage.png": "a52d6a5c2e89c62abf81a3c98e617bb5",
"assets/assets/images/ab-testing/get-rating-type.png": "9fc5558a1562adbcba8572262c3ae36a",
"assets/assets/images/ab-testing/rating-type.png": "fe2c30731409b40d63718b50ef450df7",
"assets/assets/images/ab-testing/nose-exhale.png": "82939ec2218dfe413e86e140e810fd61",
"assets/assets/images/ab-testing/experiment-results.png": "0c1b32ac9ac183a6d3e664f18494397d",
"assets/assets/images/ab-testing/rating-type-parameter.png": "ff12066b2b815011e140602afba8cea1",
"assets/assets/images/ab-testing/rating-service.png": "64210eefb8b2ddeb8022070fcc3b01d5",
"assets/assets/images/firebase-logo.png": "0f92978abd56fff2c5c8afb5ffe633f7",
"assets/assets/images/punterest-logo.png": "637ff49ff9400af395f3294aa01b6e94",
"assets/assets/images/blog-post.png": "d8b0c80b33da4304f8c7e7072628a997",
"assets/assets/images/firebase-conditions/add-condition.png": "4e75724381bcb1b3e8712697bdd27fe8",
"assets/assets/images/firebase-conditions/use-android-condition.png": "60521305d928ee267396aa39b7847066",
"assets/assets/images/firebase-conditions/sloth-slow.gif": "b813673fa4d8f1700070134263df7ac5",
"assets/assets/images/firebase-conditions/splash-page.png": "affcee02aa27abdb0dd400f2589721b2",
"assets/assets/images/firebase-conditions/slow-app-review.png": "b92ac8bb28295c157c6b3c95bab8b228",
"assets/assets/images/firebase-conditions/app-update-service.png": "a325c1d73c5098dc601fd0787aeb2bd4",
"assets/assets/images/firebase-conditions/date-time-condition.png": "c2941055a17fd03311fb25ea1ead4861",
"assets/assets/images/firebase-conditions/language-condition.png": "5f9d2cbb800c2b20bcc4d5c851bc1ce4",
"assets/assets/images/firebase-conditions/get-app-version.png": "06922ca0a252def000851081c976f722",
"assets/assets/images/firebase-conditions/crashlytics.png": "53a3800a74be57d7f434d44a948b4016",
"assets/assets/images/firebase-conditions/android-condition.png": "53980d74c8de0280f43a4827ccdf4a91",
"assets/assets/images/firebase-conditions/first-app-open-condition.png": "dc459af6ca1f79f0e56ee61b68f30131",
"assets/assets/images/prank.png": "73abb481241c33bbe0d71ce451e0bcae",
"assets/assets/images/feature-flagging/laugh-meter.jpg": "3c877c9d02cf88755e12462cd8d71d71",
"assets/assets/images/feature-flagging/global-feature-flag.png": "34a4a93610fc6047b4f5543c3c63cd54",
"assets/assets/images/feature-flagging/rating-parameter-conditional.png": "afbfffb8889cc941d9d728b4d982f455",
"assets/assets/images/feature-flagging/get-rating-enabled.png": "07aa302f47b1c82aa18864f91dfe3c93",
"assets/assets/images/feature-flagging/analytics-service.png": "b08a9fd75e2d5c11da44e72a4b115362",
"assets/assets/images/feature-flagging/staged-rollout-condition.png": "b857cc5d0cde36ebd7e310af4982ba2b",
"assets/assets/images/feature-flagging/cross-platform-ptsd.jpeg": "066108558c58c5b2011da88a26d2d999",
"assets/assets/images/feature-flagging/percentage-rollout.png": "e4e07c1e98ad8e84c6dc6117201b8588",
"assets/assets/images/feature-flagging/audio-listener.png": "8c5d9dfa946f90e82d78e1e85877584c",
"assets/assets/images/feature-flagging/rating-service.png": "a9812ee2f16f4bbfbad54c22f8cfc82b",
"assets/assets/images/avatar.png": "6ceb67d5d3a7db2c587a47cebe04e92d",
"assets/assets/images/feedback-qr.png": "58bd9364efee0f370c8757ac3207be5a",
"assets/assets/images/firebase-parameters/parameter-types.png": "ba3590fd0a6e122cb97e8c348d6c058a",
"assets/assets/images/firebase-parameters/real-time-client-server.png": "454a9dd6a242c5a82f81bf984bf47b8c",
"assets/assets/images/firebase-parameters/daily-pun-service.png": "8265c09a141ab1dceecea070385cf1fc",
"assets/assets/images/firebase-parameters/remote-config-json.png": "7a0d872b941edad027f85783ebb0ca92",
"assets/assets/images/firebase-parameters/daily-pun-view.png": "a5695282eaf4467dffa839885248afd3",
"assets/assets/images/firebase-parameters/firebase-service-init.png": "2faed0ab5863f8d04d5414974d21ac8f",
"assets/assets/images/firebase-parameters/mr-bean-waiting.gif": "aa574640b0f3e2c22a4798233212e35d",
"assets/assets/images/firebase-parameters/daily-pun-updated.png": "1225b17343aff777646206e759ca6fcf",
"assets/assets/images/firebase-parameters/remote-config-settings.png": "473506612bf8b153912bf8ae0d7122e9",
"assets/assets/images/firebase-parameters/on-remote-config-update.png": "804fa7dca21c89a99a4a6f24aed73334",
"assets/assets/images/firebase-parameters/daily-pun-parameter.png": "9d8d4cdd7423e359afd775d5fc29711e",
"assets/assets/images/firebase-parameters/daily-pun-json.png": "5a7b3ac1b02eeb5d68592b9bca266223",
"assets/assets/images/firebase-setup/configure-ga.png": "239c58afd7aefeeb20a4183216206c08",
"assets/assets/images/firebase-setup/add-firebase.png": "29b6c5d1693319792ce8939e45badfac",
"assets/assets/images/firebase-setup/create-project.png": "b40f2be4ea092168e7417eadd51af0fc",
"assets/assets/images/firebase-setup/initialize-firebase.png": "ffb83762a9443be6d7e320f55ba468a9",
"assets/assets/images/firebase-setup/firebase-dependencies.png": "f5e6ea9a2041ab442151cce64f367474",
"assets/assets/images/firebase-setup/project-name.png": "2471a37f1d4d7f1ccf38852538c35245",
"assets/assets/images/firebase-setup/dashboard-empty.png": "a4628e2587724a786d301b99a7afe927",
"assets/assets/images/firebase-setup/enable-ga.png": "a13b995357b24028315e388f251d8c2a",
"assets/assets/images/firebase-setup/configure-firebase.png": "421b3f21f50cb176b699ead3fd1c8c69",
"assets/assets/images/forces/main-forces-final.png": "1a7fe32932a28e4238bb08a603e6beec",
"assets/assets/images/forces/main-forces.png": "532f676036bb09efb124e7016cd896cb",
"assets/assets/images/practical-joke.jpg": "9f4a808546ab6aecf6a37c743cf875fd",
"assets/assets/punterest-logo.png": "66789435c494a0b7d0cdca469220c11a",
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
