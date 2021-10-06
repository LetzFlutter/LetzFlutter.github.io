'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "7790208ad3da5e7b2509bfd7f494081d",
".git/config": "63913bf9705486d8f095a9fd0cdd7a21",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "25c1dfeb699980b14b76162a2da1f155",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8ef2d4210eebbbc2b842521a224eecf3",
".git/logs/refs/heads/main": "24739a9d9235cf5bfed20269183b3270",
".git/logs/refs/remotes/origin/main": "e56769188a5b4f559484f99aad9afb19",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0c/174e0aa75033d2a14071d063fea7aec82c531d": "1b8ca28ea782c7eed782f196155a7c01",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/14/2ae87902c867de3a8d592c604c7cf31c1ba255": "40992e1a4bc9ce9fc44f67f7277eb31a",
".git/objects/16/1bc2766e47f86226db7224ce7169663285df77": "28ac897f9ddd64898686479e98752504",
".git/objects/29/b3a556afa40ba168e3f58ab0d4f1dfcc78c63a": "1f9bdb72c800bb8e4d925c312f35daea",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2e/8fdb6c04cab4dd91c359c7439d9241bd581463": "9a01cf6aacb33a2bb53032a52b4a082f",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3a/d52e6fc7e37dfa1c84533aa2d683f3ac4d1813": "08246d4fb6b1e91fbbfe1ae2a2eb0eaf",
".git/objects/3b/e8f3979319ef0e5765417c619efe8f50ed8349": "cb4b20a6a2ed1d6d8bb1a427a32ed324",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/3f/6f161b6c0605377c049e7508931acb772adf95": "d978f3d551d4e2700f7a4ba18f464631",
".git/objects/40/36cd13aebf3447bb6fd98c2e6c0ce22e62e1ce": "960457137ea7d882e3a6035c10abeaae",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/baeecae5919728a5d6e9da369dd30ba0f6d4c6": "f7f3f20e1d18188ea0b09189fe565072",
".git/objects/49/768bdb99c23a82463e90709ad48db8878feaaf": "d6d61a94cd0df3d09d48aafe7ff3bb0e",
".git/objects/54/1c8450a5e362501061d49f15717bee70b031b5": "94c181adb1d2627cb49f247457f54e83",
".git/objects/5c/476f32c08c2dd891b9de52f7647420746e1e1f": "e55d250940663259958651ef95cd0576",
".git/objects/5d/977130e01fc23cef52911983b2fe96fdc3eb63": "6611dd567eee399b7382b9f58825118f",
".git/objects/65/b384c04ef7ee9fb9b7582b77377280c5d64cd5": "88422bbb2bc42436f8f242eb59c23af7",
".git/objects/6a/e45e01eddba12447bab46f3bc1e9a2c5ccf421": "fb0f75b6fa36d22c6093bf87856a2c1b",
".git/objects/78/ae9fdc3e0b472bda98ec4184e0fe038bc3eba4": "81a87347f67af172222e125deefeb478",
".git/objects/79/7bf90b26f91a647586071c16a230bbb323c56c": "fe385effcf442589ce5b624811c9698f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/c11c672e8d8457c890d8398f5e87c8c7a145ce": "264193f9934755d072ae413eedeef150",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/29cd85b0909455c411c8c667a8f749f7acdcae": "ec9a8cd73ecefd4387c0bd3f85bbf719",
".git/objects/99/ec7b14bb009ab1ae66f413aaa56118e9a246e6": "3f0970de6d213f666bb59b0f57dfa237",
".git/objects/9b/b02a55ee23fd4b200672e50cf889970b7f4e25": "9e1ffa66caa1c7995f841f186dc1dd4a",
".git/objects/9c/8e11e01f5f12561fbb7388854492d959d91c30": "f7c453f6f17866b580187c665275f07c",
".git/objects/9f/ed3629fd4459625bfc8c007d2bda7a981f37b5": "2ad9b08de0cb1a8cacafbc0dde431737",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/c171e7941c343d249ca14e4b4458274eac5a12": "a956f7e881f4d326c7ae504e17aef7d5",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/b3/273366c3f8ee2448dac383e583ff7a35137430": "161a0feabcb1c9348ed8f6d95997f84d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/a6881627443e01ed630df81c9fb0e737883327": "cf28bf0b8be92fd354a7f30dfc0bdb65",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/622474f9467a2361bd635d3715736b03905bc7": "1780d82c383ef506d78eeb6a874d2dfa",
".git/objects/db/88ca9b65aaeb3e5dc4ab7a61972e9f1af2087a": "85dbd80e7477a73edd9c75a0f75d6c06",
".git/objects/dd/992815daf524fd02b5d3864545567d298f1a26": "517cab6da333df52de2859cff2bab0cb",
".git/objects/df/1f57276301a61d0fbb0e6835bbe8e095881e75": "cae71d0a97f5d40dfdf433f40de103ec",
".git/objects/e3/5c42369a312aa50a949043f63d30dd44b4a8c7": "0c204533b4b8016e9a24f0e3acc49cc1",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/dc41af1aec8de63b5faa5c1b52458102ee2b29": "b09cb6f049ae7b76ad9c3adcf7535ab0",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/c703e82ddf92b936d9280a3264e12137655f93": "06315ba622209c39068fbb5e8843f8c6",
".git/refs/heads/main": "e5d40b0254844bee396030bcb75ea5bc",
".git/refs/remotes/origin/main": "e5d40b0254844bee396030bcb75ea5bc",
"assets/AssetManifest.json": "222bc785bdb07236eb8746bafcb02592",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "f7d35f6191919ed8680ebe85d1e8eddb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7c3d0eacbac0bbed8495a2c495462bb1",
"/": "7c3d0eacbac0bbed8495a2c495462bb1",
"main.dart.js": "8f6bfe9bcdde669df82c305d2197dd44",
"manifest.json": "3f871eaf5db0046ca1581fc78f5221ad",
"version.json": "6805328e007c3b7df01ee03833a2bc87"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
