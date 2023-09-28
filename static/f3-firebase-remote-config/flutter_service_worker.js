'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "13f1b5c4bd453165160e71438297a9b8",
"index.html": "5a435a93294f4ee9e2c88eb3963e05e8",
"/": "5a435a93294f4ee9e2c88eb3963e05e8",
"main.dart.js": "270c684e2c6fab61e9c1e0c7c04260eb",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "055f63ff430fb2fa95c4f7fbf9a4b112",
"assets/AssetManifest.json": "e58e160abd9a96e85eeb441d69c15bdc",
"assets/NOTICES": "8f28ccb4f5ca3e3cec714d015d44330b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/purrfect_match/assets/cat_video_call.gif": "9dc0f96b20b58938f62705ed5cd4d97c",
"assets/packages/purrfect_match/assets/cats/cat_13.jpeg": "96f31c34790925b5f5db7ff4bedd3941",
"assets/packages/purrfect_match/assets/cats/cat_6.jpeg": "91fd0ad30a54ead5ea4fd5c27ddedb66",
"assets/packages/purrfect_match/assets/cats/cat_7.jpeg": "46436076885de1617c906296369fb5cd",
"assets/packages/purrfect_match/assets/cats/cat_12.jpeg": "b8bd9d51f92e544cafe6948ed9ddfb61",
"assets/packages/purrfect_match/assets/cats/cat_15.jpeg": "715c15625eb5a5a1ae03d1745a31b3e7",
"assets/packages/purrfect_match/assets/cats/cat_14.jpeg": "dfc4cef9591e087e48449d0991a048b3",
"assets/packages/purrfect_match/assets/cats/cat_1.jpeg": "c2d27fe14e6d6251ab9ebba8ba8e043b",
"assets/packages/purrfect_match/assets/cats/cat_2.jpeg": "d8dda6c1a6fc7ee27215d4d3559acf8c",
"assets/packages/purrfect_match/assets/cats/cat_3.jpeg": "523f5ece4800bf75ea162898c7cbe52f",
"assets/packages/purrfect_match/assets/cats/cat_11.jpeg": "004365cbaf79b6a4c8f2774291907e23",
"assets/packages/purrfect_match/assets/cats/cat_8.jpeg": "09ac389ae4f7cfa8909fb5c9eab87196",
"assets/packages/purrfect_match/assets/cats/cat_4.jpeg": "a71638fc4cc0ddc5edfaac39411f9460",
"assets/packages/purrfect_match/assets/cats/cat_5.jpeg": "4ef7332437eb649bd7947163d8637968",
"assets/packages/purrfect_match/assets/cats/cat_9.jpeg": "2d8a815d3a9932d7a4bc1506bfe6cf71",
"assets/packages/purrfect_match/assets/cats/cat_10.jpeg": "079c2f19ff032ef06f2f3117c14341d2",
"assets/packages/purrfect_match/assets/blue_screen_of_death.png": "62a50d478a1524ff02cfc6773c4bc951",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "792f9e7d640d87febc04af038b0c9101",
"assets/fonts/MaterialIcons-Regular.otf": "d7c65f67c55348cfcd09c6b05459dea7",
"assets/assets/firebase-gauntlet.png": "e36e41c64a9d34c8f2a77c171304fba5",
"assets/assets/intro/money-meme.png": "13a78ef7b484cbbacc86ec06b9544a09",
"assets/assets/intro/mk-cat-shirt-2.jpeg": "221f85048060262646275805b0c3dc0f",
"assets/assets/intro/daria-and-cat-2.png": "e9a9a79e12ff337e3a51dc5443e1f552",
"assets/assets/intro/mk-cat-shirt-3.jpeg": "48447b3109240a3406e0798600ecdf70",
"assets/assets/intro/daria-and-cat-3.png": "95d1a987353f622ee81d7f18641f1482",
"assets/assets/intro/daria-and-cat-1.png": "ce9657e8ad6256b06e9721b3ca352d78",
"assets/assets/intro/firebase-logo.png": "d36406cc9850468fccdc756ac3329d78",
"assets/assets/intro/cat-with-owner-2.png": "6ffc5825ec7f7123a2bd70673895226e",
"assets/assets/intro/cat-with-owner-3.png": "3937d833197105e35237f76b536e158e",
"assets/assets/intro/cat-with-owner-1.png": "88b55380560fd9b82c3b019aa08af82c",
"assets/assets/intro/charlie-chaplin.png": "e84eb43ea9627191c542c398bbef4ca1",
"assets/assets/intro/flutter-logo.png": "39073cac8dcc80dfc03bd40f661e6a20",
"assets/assets/intro/cat-meme.png": "58007321c975b156893ee774976734fe",
"assets/assets/intro/charlie-chaplin-cat.jpg": "edd507dc44ec5c51b10d57d16b7981e0",
"assets/assets/intro/mk-cat-shirt-1.jpeg": "644eb240fed7e2619dfd89af7047bb72",
"assets/assets/intro/cat-people-study.png": "745d260269226402890ba0814271c4c7",
"assets/assets/ab-testing/personalization_step_one.png": "7aaf3a149ca12fbcc4a47e6df4159d1d",
"assets/assets/ab-testing/personalization_step_three.png": "11c4892daa22c24cf916d053e1ea8bdb",
"assets/assets/ab-testing/console_step_twelve.png": "0d388fafd2924be54618cc08de7d62d2",
"assets/assets/ab-testing/personalization_step_five.png": "3ffcbd8be15ac5f742b28b378481c1a3",
"assets/assets/ab-testing/console_step_five.png": "6653265659e242e3249195d944462a2c",
"assets/assets/ab-testing/personalization_vs_ab.png": "52fd2f4060798a6f3665f23ba31f87f0",
"assets/assets/ab-testing/personalization_console_overview.png": "19a6340c1941a41d3a246d73371df734",
"assets/assets/ab-testing/console_step_three.png": "a62c4cbb399510a87a660e4a0901bc93",
"assets/assets/ab-testing/console_step_one.png": "3c9fe76dee0dd8dc525cd79329007379",
"assets/assets/ab-testing/console_step_thirteen.png": "505181f89ae469a9a987ad9ee7e13e34",
"assets/assets/ab-testing/personalization_underperformance.jpg": "5cbfceeb44f2a2f3de2be5281f8bd143",
"assets/assets/ab-testing/testing_with_conditions.png": "3994576361eb36b41de90d1d2c9290c9",
"assets/assets/ab-testing/console_step_nine.png": "afb618e52e6884c721caa4947176b44a",
"assets/assets/ab-testing/console_step_six.png": "fb46af63d2af36e584f22b5cb72c16d0",
"assets/assets/ab-testing/console_step_two.png": "3f1293b4f4048a9de452aadc85eb555e",
"assets/assets/ab-testing/paywall_type_code.png": "658faa2d9dd2be03e6a8b19c013ee6ec",
"assets/assets/ab-testing/console_step_seven.png": "bb37024f21444ef7980ead43f11c4ec8",
"assets/assets/ab-testing/personalization_intro.png": "65188da1449bea73cada5cf7e8da4f10",
"assets/assets/ab-testing/console_step_eleven.png": "06a4650eb283147a5a59ff62d5d610bf",
"assets/assets/ab-testing/personalization_step_two.png": "266da3945206a576adcf2133c187e180",
"assets/assets/ab-testing/paywall_analytics_code.png": "a92193b6711a1e5a789847b194c7d185",
"assets/assets/ab-testing/personalization_results.png": "efca773b6c89b0f44798d9ecd6a39bdf",
"assets/assets/ab-testing/console_step_four.png": "d53e88414e3a504decbc0ac09b17ca87",
"assets/assets/ab-testing/personalization_step_four.png": "6c00d70d837a96ec7a2847a1de5582f5",
"assets/assets/ab-testing/console_step_ten.png": "5c10428897805a66cb328c1e8dfc7a11",
"assets/assets/ab-testing/console_step_eight.png": "e221a532d4d38b18a22ab05c925a0164",
"assets/assets/ab-testing/testing_with_ab.png": "874f5f640adbe46f325341874ec0bf81",
"assets/assets/f3_logo.png": "3554c6d180550eff1d2f062f469d4bca",
"assets/assets/feature-toggling/crashlytics-alerts.png": "3bba8735ed4818a351f8a8b76ada24c7",
"assets/assets/feature-toggling/video-call-enabled-conditional.png": "915e7f6353e7b2ebd06eb508a936b8ad",
"assets/assets/feature-toggling/crashlytics-setup.png": "f68f8c2f618ad123fca8a9b9c5434742",
"assets/assets/feature-toggling/feature-release-meme.jpeg": "8dd862c7a9b45b83bd6a5a9b44a8cad7",
"assets/assets/feature-toggling/app-monitoring.png": "97e95f28178f05b8b3c515b0fc3f1f47",
"assets/assets/feature-toggling/global-feature-flag.png": "34a4a93610fc6047b4f5543c3c63cd54",
"assets/assets/feature-toggling/ratings-and-reviews.png": "0928eda90b42970cbab88a8a65641f9a",
"assets/assets/feature-toggling/crashlytics-dashboard.png": "7140d2c0c0b231abf0699f018628c490",
"assets/assets/feature-toggling/staged-rollout-condition.png": "277f22bc710bdbffb05d0149474fad97",
"assets/assets/feature-toggling/coding.gif": "6c90288d7e10d46d18895f17f420a92c",
"assets/assets/feature-toggling/percentage-rollout.png": "e4e07c1e98ad8e84c6dc6117201b8588",
"assets/assets/feature-toggling/video-call-premium-feature.png": "b6222741519169ed1d4630befa870268",
"assets/assets/feature-toggling/video-call-code.png": "083ce9197b491acb1a0e838b0432ec5d",
"assets/assets/feature-toggling/avoiding-bugs.jpeg": "0102abb5318865994772144e4a17039d",
"assets/assets/app-configuration/firebase_analytics_step_four.png": "5c498e796f43ce41cbbf2e42f3cdc353",
"assets/assets/app-configuration/cat_index_param_step_four.png": "5f5a143c5527105fc8a54896890c4e44",
"assets/assets/app-configuration/after_onboarding_flow.png": "29d3c487bd6805c53bd433685131e28e",
"assets/assets/app-configuration/frc_param.png": "ab9bf0e65d58a7ee34dd4c078d277e1c",
"assets/assets/app-configuration/cat_index_param_step_two.png": "1c27e870b9a711293c872d2b74f9c260",
"assets/assets/app-configuration/cat_index_param_step_six.png": "56164114960b166e8c577e7ea87c165f",
"assets/assets/app-configuration/conditions_step_seven.png": "51f7d55b65f35b54799a1770f4c66aa4",
"assets/assets/app-configuration/frc_intro.png": "268bbb938033d775d4e22a375429b911",
"assets/assets/app-configuration/conditions_step_three_c.png": "48fe41176fa7c35573597dd870ff1e1e",
"assets/assets/app-configuration/conditions_step_eight.png": "34ba46bd066c94add8dfdca04570723d",
"assets/assets/app-configuration/cat_index_param_step_three.png": "7ef5c5562f18e21a3664b15717a7c0fb",
"assets/assets/app-configuration/conditions_step_three_b.png": "ef088a864bff0f3a21a225b6ac65588f",
"assets/assets/app-configuration/mangirdas_apple_app_review.png": "17c1201e013e2af099f094f833da91c2",
"assets/assets/app-configuration/google_analytics_logo.png": "be1210918fde47f57da75f75531130ba",
"assets/assets/app-configuration/conditions_step_three_a.png": "f53d90d67653d9124b3227298ea6b053",
"assets/assets/app-configuration/firebase_analytics_step_three.png": "8fb3f32f7841f289f37c8f2a9249e742",
"assets/assets/app-configuration/conditions_step_five.png": "cf8b26a2bc6e8c2a8433a6661617bc51",
"assets/assets/app-configuration/firebase_analytics_step_two.png": "0fb1ec61d7005b5062a1fe206ad762ac",
"assets/assets/app-configuration/frc_all_params.png": "67fcc7c493adf8c3406e169d76104625",
"assets/assets/app-configuration/cat_1.jpeg": "c2d27fe14e6d6251ab9ebba8ba8e043b",
"assets/assets/app-configuration/conditions_step_six.png": "fe349c6df228a2dccbe81279ccc80ef5",
"assets/assets/app-configuration/conditions_step_two.png": "fe17576d778433ba2443c48cda9ef6ff",
"assets/assets/app-configuration/firebase_analytics_auto_events.png": "ca8377c726191a71db4b8c2c5388f1c1",
"assets/assets/app-configuration/cat_index_param_demo.png": "62aa8057b7832749e0ffbd0f93429110",
"assets/assets/app-configuration/conditions_step_four.png": "e1c029bf0c3ebc9e4891fa22c1b039cb",
"assets/assets/app-configuration/cat_2.jpeg": "d8dda6c1a6fc7ee27215d4d3559acf8c",
"assets/assets/app-configuration/onboarding_test_option_frc.png": "c1fefdc6af5adb07edb0ddb555a07224",
"assets/assets/app-configuration/firebase_analytics_step_one.png": "e1242ef22a38300a6a32be7ad6a06c12",
"assets/assets/app-configuration/cat_index_param_step_seven.png": "6c88dfd8cb3e963d604eb9d90f831d62",
"assets/assets/app-configuration/frc_json.png": "e1ae5c185c4bf61305891eb7b211b28a",
"assets/assets/app-configuration/conditions_step_one.png": "1bd3840bfcfb58e979cdcfc42e68cead",
"assets/assets/app-configuration/cat_3.jpeg": "523f5ece4800bf75ea162898c7cbe52f",
"assets/assets/app-configuration/firebase_products_pyramid.png": "dde18058d2bcaa1e0dc7c7a6289e137c",
"assets/assets/app-configuration/cat_index_frc_demo_before.png": "19bfdceb827ebb2e822f11f36bc4e254",
"assets/assets/app-configuration/cat_index_param_step_five.png": "5588683bb504542df2aaddf7bd66a33d",
"assets/assets/app-configuration/cat_index_param_step_one.png": "93cac8531f85d9a82d56fa6b3087f35a",
"assets/assets/app-configuration/cat_4.jpeg": "a71638fc4cc0ddc5edfaac39411f9460",
"assets/assets/app-configuration/cat_5.jpeg": "4ef7332437eb649bd7947163d8637968",
"assets/assets/app-configuration/cat_index_frc_demo_after.png": "f6eadfdedd87690be41489a3f9b23bfb",
"assets/assets/speaker.png": "dbbd055c3c9393269178e7622250a2cd",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
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
