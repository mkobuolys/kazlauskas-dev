'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "55968153f8b26894aa09e22a43fbc2cc",
"version.json": "a4d4794d1917b00a7e5046cadbc702f6",
"index.html": "98fd781d5025c7a896958f22815df0b6",
"/": "98fd781d5025c7a896958f22815df0b6",
"main.dart.js": "d5559eb6f914aea75f4b829f3be0407c",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ba214560bf5efb1ca4ad813612754f3f",
"assets/AssetManifest.json": "f3edb24ae66f77c77896c504d2117d9e",
"assets/NOTICES": "0de0259576ceb5c7ac5bee0ccafb6b7a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "abcde1c0e9fe990fc864f3db2b4c87f3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_deck/assets/header.png": "7b35f3749eb44d6d99f8621da7ba71a5",
"assets/packages/gskinner_example/assets/images/circular_menu/icon-bacon.png": "ed6fe6e3f0d5945073bf5e72ac46757f",
"assets/packages/gskinner_example/assets/images/circular_menu/bun.png": "9c320a7f60fb939a3109a560a7844b6b",
"assets/packages/gskinner_example/assets/images/circular_menu/tomatoes.png": "615b99ef85abe00b8bb6ee4d93b11c2b",
"assets/packages/gskinner_example/assets/images/circular_menu/onions.png": "a4835ec12f879e574f6e4ebe60409a8e",
"assets/packages/gskinner_example/assets/images/circular_menu/icon-onions.png": "38cf32a3f6e819582c9f455978f520bf",
"assets/packages/gskinner_example/assets/images/circular_menu/sauce.png": "31e9018089f78f3e67a9b2c9e643ccc6",
"assets/packages/gskinner_example/assets/images/circular_menu/icon-egg.png": "8b175b902d08d923d6aa793d8b9090fe",
"assets/packages/gskinner_example/assets/images/circular_menu/icon-mustard.png": "7543e472d8a8745335009ecca72a65ab",
"assets/packages/gskinner_example/assets/images/circular_menu/icon-ketchup.png": "e0949702e86e213dc648a7cd9f6a9f79",
"assets/packages/gskinner_example/assets/images/circular_menu/icon-lettuce.png": "dae68d666ce3dca11e8f577902dd0d90",
"assets/packages/gskinner_example/assets/images/circular_menu/cheese.png": "c21794ad1596f5a407f2142d9e1af6dc",
"assets/packages/gskinner_example/assets/images/circular_menu/icon-pickles.png": "87cec767f116a27adea434ef55cb93c2",
"assets/packages/gskinner_example/assets/images/circular_menu/icon-sauce.png": "950aa6a50694b514583b25ececddccb0",
"assets/packages/gskinner_example/assets/images/circular_menu/icon-tomatoes.png": "b52e083c910787ca3b61fc288b61a6be",
"assets/packages/gskinner_example/assets/images/circular_menu/icon-cheese.png": "9f61f922b9c7e3e01abbad7a37b1e43d",
"assets/packages/gskinner_example/assets/images/circular_menu/bacon.png": "5136b389150b8967b9555c66b69a9d3d",
"assets/packages/gskinner_example/assets/images/circular_menu/ketchup.png": "9b04b510644bfa5b4ce701876eb011d6",
"assets/packages/gskinner_example/assets/images/circular_menu/mustard.png": "d580d7027880a3d16fa1392e0df2a7cf",
"assets/packages/gskinner_example/assets/images/circular_menu/egg.png": "9de93879e5a70ebe757431f9dd7472a6",
"assets/packages/gskinner_example/assets/images/circular_menu/lettuce.png": "5befcf594e12018bc4ea7682b572ac40",
"assets/packages/gskinner_example/assets/images/circular_menu/burger.png": "eb147e78b6fbb9c07c5f3a0e43ed92a7",
"assets/packages/gskinner_example/assets/images/circular_menu/pickles.png": "4c648a2ebd028fbff975a58ac338e90d",
"assets/packages/gskinner_example/assets/images/home/card-deck.png": "4503303d30a943b8fd4a8429524e39a3",
"assets/packages/gskinner_example/assets/images/home/circular-menu.png": "591cd70d3a1ef1afc242ef77448288c3",
"assets/packages/gskinner_example/assets/images/home/record-box.png": "9f827372849a40ca7aa9e20dcf6b6558",
"assets/packages/gskinner_example/assets/images/home/cover-slider.png": "d0b06e0991b0379b0a6785f3e6d00a63",
"assets/packages/gskinner_example/assets/images/home/digital-wallet.png": "54580af8371087e1a210c4c946ac736e",
"assets/packages/gskinner_example/assets/images/home/icon-chevron-right.svg": "70a97413ff8f641c69824e9ae7250083",
"assets/packages/gskinner_example/assets/images/digital_wallet/wallet-1.jpg": "3a31c2f2f7566227ca698045870893da",
"assets/packages/gskinner_example/assets/images/digital_wallet/wallet-3.jpg": "af6c75a44c1e50b8a545b6a52b3a95d3",
"assets/packages/gskinner_example/assets/images/digital_wallet/wallet-2.jpg": "9d60643f0c07065300df2a81e5d66857",
"assets/packages/gskinner_example/assets/images/digital_wallet/wallet-5.jpg": "7a4bf3b7b3969c401e0432b744b1be03",
"assets/packages/gskinner_example/assets/images/digital_wallet/wallet-4.jpg": "baad32bca0f55eeba6983c036c3c053c",
"assets/packages/gskinner_example/assets/images/digital_wallet/logo-2.png": "deb5104dad4e792efd5d253132305dae",
"assets/packages/gskinner_example/assets/images/digital_wallet/logo-3.png": "922750d8e2f20e525173db55f8cf4ff1",
"assets/packages/gskinner_example/assets/images/digital_wallet/logo-1.png": "9aae67f8cbb64bee220ed0f495511abf",
"assets/packages/gskinner_example/assets/images/card_deck/card-8.jpg": "d9334ea8fd758dd151359e48183a5f1e",
"assets/packages/gskinner_example/assets/images/card_deck/card-9.jpg": "acf400d317c5ae061927e57a683babf7",
"assets/packages/gskinner_example/assets/images/card_deck/background.jpg": "3e5ee092b83c672210c2b0df63cf85a2",
"assets/packages/gskinner_example/assets/images/card_deck/card-11.jpg": "46e126584db6ac70671ae4d41665f42c",
"assets/packages/gskinner_example/assets/images/card_deck/card-10.jpg": "4ed05d3a3c0c0f09daf707c34e1bd93d",
"assets/packages/gskinner_example/assets/images/card_deck/card-12.jpg": "76dcc4b9e9ccd616f9affce896125ce4",
"assets/packages/gskinner_example/assets/images/card_deck/card-13.jpg": "b0b815f86e8988ca2234ae94ed484da1",
"assets/packages/gskinner_example/assets/images/card_deck/card-1.jpg": "c434aea0b3555c9a5bb4d9c77695d15f",
"assets/packages/gskinner_example/assets/images/card_deck/card-0.jpg": "d76205bf079dbbd386ee6b4ac89c3144",
"assets/packages/gskinner_example/assets/images/card_deck/card-2.jpg": "34c8cff781da4558ed81802bf30c9342",
"assets/packages/gskinner_example/assets/images/card_deck/card-3.jpg": "ebeb96893599441b541c9f420341e627",
"assets/packages/gskinner_example/assets/images/card_deck/card-7.jpg": "a6e7d897fd76ca36c4dcd6703033378d",
"assets/packages/gskinner_example/assets/images/card_deck/card-6.jpg": "11546ad3b0b855a69ac3c9ce4c228d6c",
"assets/packages/gskinner_example/assets/images/card_deck/card-4.jpg": "1d7affa879aa19ea867d0e6faa6eaf04",
"assets/packages/gskinner_example/assets/images/card_deck/card-5.jpg": "45a5363b415913a52cb13da18da2db27",
"assets/packages/gskinner_example/assets/images/cover_slider/food-b-9.jpg": "92772c9096b96df00c14e0d0756161ec",
"assets/packages/gskinner_example/assets/images/cover_slider/food-b-8.jpg": "227550a5d1678a26009398a35697a947",
"assets/packages/gskinner_example/assets/images/cover_slider/food-a-2.jpg": "26dc8447324ec97a05847c16e9a4eda5",
"assets/packages/gskinner_example/assets/images/cover_slider/food-c-1.jpg": "105d58ae78c0f75c0aaf84d241f7b134",
"assets/packages/gskinner_example/assets/images/cover_slider/food-a-3.jpg": "8c90cdc7baeb1056f8f481b24f6858cb",
"assets/packages/gskinner_example/assets/images/cover_slider/food-a-1.jpg": "7d03898549bab0b5c933d55c927922e1",
"assets/packages/gskinner_example/assets/images/cover_slider/food-c-3.jpg": "066f595a3e4b0405f2a4e736a3e1d156",
"assets/packages/gskinner_example/assets/images/cover_slider/food-c-2.jpg": "4a91cfb4bf3f6abbaea895455fc6fb5c",
"assets/packages/gskinner_example/assets/images/cover_slider/food-a-4.jpg": "58eb1de852007a72aaebd61662413834",
"assets/packages/gskinner_example/assets/images/cover_slider/food-c-6.jpg": "5766f757b464c40bc4926fb77a75bced",
"assets/packages/gskinner_example/assets/images/cover_slider/food-a-5.jpg": "8119677cc03cd753cd1433ddc00abeeb",
"assets/packages/gskinner_example/assets/images/cover_slider/food-c-5.jpg": "e30acd702b2526f06914647cec9ef65e",
"assets/packages/gskinner_example/assets/images/cover_slider/food-c-4.jpg": "b8ff2e67e289b396f635ceb5590439c2",
"assets/packages/gskinner_example/assets/images/cover_slider/food-a-6.jpg": "07c2570e25af654466e5c94b39566322",
"assets/packages/gskinner_example/assets/images/cover_slider/food-b-3.jpg": "ca61bb0345dad126325305b1bda65cbf",
"assets/packages/gskinner_example/assets/images/cover_slider/food-b-10.jpg": "ed351c0b1ec76960859b522f7cbd96c0",
"assets/packages/gskinner_example/assets/images/cover_slider/food-b-2.jpg": "c264285966238ca227902d0b5d63e2d5",
"assets/packages/gskinner_example/assets/images/cover_slider/food-b-1.jpg": "ab20282a8e9d1a6e755a7bf6d3fe16fb",
"assets/packages/gskinner_example/assets/images/cover_slider/food-b-5.jpg": "f79da6a18c3df882889e25ac2550871c",
"assets/packages/gskinner_example/assets/images/cover_slider/food-b-4.jpg": "1a360566cb8678fb2786fff4525a1f34",
"assets/packages/gskinner_example/assets/images/cover_slider/food-b-6.jpg": "3d508c7480d4972c8cafe6b7319d731a",
"assets/packages/gskinner_example/assets/images/cover_slider/food-b-7.jpg": "28554d6e94e97ca63eb6c7c58a9b0167",
"assets/packages/gskinner_example/assets/images/record_box/album-9.jpg": "50076d988e0e282df31c0fa40837700f",
"assets/packages/gskinner_example/assets/images/record_box/album-8.jpg": "a287b8267fca61956a6e96f96e839d85",
"assets/packages/gskinner_example/assets/images/record_box/album-14.jpg": "052114d779723068b87149fbcd6e203d",
"assets/packages/gskinner_example/assets/images/record_box/album-10.jpg": "0e19d99cc6da8e145d8a59eb3261b641",
"assets/packages/gskinner_example/assets/images/record_box/album-11.jpg": "01b99281f8b786b661cf2851898f9b1b",
"assets/packages/gskinner_example/assets/images/record_box/album-13.jpg": "282fd08635a25a9300334971f4357091",
"assets/packages/gskinner_example/assets/images/record_box/album-12.jpg": "043b48a1ce441327f418f7b71919d9b1",
"assets/packages/gskinner_example/assets/images/record_box/album-5.jpg": "b5c64dac2bde3ce0ae14c2deb1e180f8",
"assets/packages/gskinner_example/assets/images/record_box/album-4.jpg": "34f9ffe0a841d61d4b0305bacc3f6e9b",
"assets/packages/gskinner_example/assets/images/record_box/album-6.jpg": "5e9490344a30793b17e206ae7ba7a24f",
"assets/packages/gskinner_example/assets/images/record_box/album-7.jpg": "4007568c329c150d45a14fd77f1599a9",
"assets/packages/gskinner_example/assets/images/record_box/album-3.jpg": "716fe7dd1e30a27b83806937d7e64ebd",
"assets/packages/gskinner_example/assets/images/record_box/album-2.jpg": "32f38549483134dde5d8211f25ad8c3f",
"assets/packages/gskinner_example/assets/images/record_box/album-0.jpg": "0395e9043ce9cfc0be6fe668a4268f30",
"assets/packages/gskinner_example/assets/images/record_box/album-1.jpg": "725782b1e8870bfd0398d45eb5514cf5",
"assets/packages/expression_ui_example/assets/app.riv": "1069dd66c2fdcdd3e8596567dce17092",
"assets/packages/expression_ui_example/assets/expressionui.riv": "4db56fe2eedc7a84e6639521a9f8f74d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "dce82802897fc07e902dccb9aa64a469",
"assets/fonts/MaterialIcons-Regular.otf": "783e3949ab8c300beb861be7d5fe06a9",
"assets/assets/spaghetti-method.png": "a469040484ec8acab1a9d91653042274",
"assets/assets/fake-door-view-code.png": "dccd9bb45cb156980fdaabf8314e10ce",
"assets/assets/sign-up-no-name.png": "9e33d2032210e7878a1f8ef1591d99cd",
"assets/assets/cat-developer.png": "e9f113b0f949ab880e46b1054c6d558a",
"assets/assets/sign-in-with-apple-second.png": "51d074e955269dac89705cc728935d68",
"assets/assets/sign-in-with-apple.png": "4c290b24b31105c26caca911d0a53aad",
"assets/assets/fake-door-button-code.png": "1f1ce3bf432d3cd539dece3b8337b7f2",
"assets/assets/new-feature-meme.png": "a2a1bc5da977919475c243910dc018c0",
"assets/assets/slow-app-review.png": "b92ac8bb28295c157c6b3c95bab8b228",
"assets/assets/zoom-availability.png": "f9093b7c9e9942aee17d26bebdd446b0",
"assets/assets/state-management-optimistic.png": "dcb4a9802a8e1f7c006ed3135cf2b06c",
"assets/assets/fake-door-config.png": "d603df2374c407461da857025cfcd6fb",
"assets/assets/bad-at-math.png": "aa50a3973df53553f8826586b1abb3c4",
"assets/assets/sign-in-with-apple-problem-explained.png": "35cf86389c422d476bab79e3534e184c",
"assets/assets/state-management-basic.png": "8b5679eb41d3dd8dc77430e35ea1b60e",
"assets/assets/feature-flags.png": "d26d8e327911376f895b46d4da64cf9e",
"assets/assets/next-app-version-condition.png": "04b08a209f6c0f4e6e4d838aa9cc77da",
"assets/assets/gskinner-logo.png": "1dfdc1406cafe4faaac121f00eb50fcf",
"assets/assets/responsive-portfolio-init-code.png": "6717d2f4d465f4510f04a2bc6b70ffd9",
"assets/assets/basic-favorite-button-cubit.png": "ee48efd49c663fd35d9a9dec393fabb9",
"assets/assets/submission-successful.png": "81ba4eb9237141d1f35fa6c964ccdd63",
"assets/assets/rive/responsive-website.riv": "55b16204923c2c1788922bea7a9d161f",
"assets/assets/rive/flappy-bird.riv": "f503980634fc0e13348f2ca078e22074",
"assets/assets/rive/expressionui.riv": "4db56fe2eedc7a84e6639521a9f8f74d",
"assets/assets/flappy-bird-code.png": "035df295b01b95f738a29cd6d6ff69a9",
"assets/assets/firebase-remote-config-logo.png": "e6eb3d9c7bdf784c6cb07f35f25a59cb",
"assets/assets/fry-futurama.gif": "582fb7b2ad3438f56f8b7d894d3fb4e4",
"assets/assets/optimistic-favorite-button-cubit.png": "1d398440c8e1261f444a71d4a59a9d5f",
"assets/assets/background.png": "9670e59bc809dc82905bb4c754f15d55",
"assets/assets/session-replay.png": "7f1006cddf6c387549a199776d21cd7a",
"assets/assets/sign-up-name.png": "b1bb70565936e5c7dbb126952045c307",
"assets/assets/app-submission-problems.png": "01aa22421f4f670fc68399d541318884",
"assets/assets/rive-slogan.png": "52ce31456c83de545f5bf6fff6482b38",
"assets/assets/basic-todo-cubit.png": "9565c75b4ffd0e4a8a71595ca78d74f4",
"assets/assets/aws-availability.png": "66684edfa2f02cbe38ef470b5be1906c",
"assets/assets/hehe-cat.png": "8d2499cbb73792200b9292c70ebe6b6b",
"assets/assets/responsive-portfolio-build-code.png": "44751705ae673fe271a3ee32fdbaaeff",
"assets/assets/optimistic-todo-cubit.png": "718378a329ae754d5089f0a6e5d24b79",
"assets/assets/fake-door-explained.png": "b09183454862e0f702ddeacfbde9eda1",
"assets/assets/unicorn-developer.png": "0dff20bc706288cd8199efaebee06b03",
"assets/assets/rive-editor.png": "5765c3073490f61785ea00033d37a8f1",
"assets/assets/hide-name-fields-feature-flag.png": "c8481c277b0c8c898da3df22240c02b7",
"assets/assets/fake-door-meme.png": "e5be620e487b33e6324c83269978c117",
"assets/assets/am-i-a-joke-to-you.png": "0d1a3be6a86400a08abf79fa645b9d90",
"assets/assets/feedback-qr-code.png": "e73dbdde68d911151ff6d984b8811c4f",
"assets/assets/sign-up-name-empty.png": "af74a0b8d32acc7eb4570ecb6b3e8bea",
"assets/assets/speaker.png": "68d459494804e9a204d80a43fd0bc14c",
"assets/assets/react-use-optimistic.png": "299c815d50304b97f674ec0939fb17cc",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
