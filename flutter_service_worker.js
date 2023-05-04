'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "45f3f5e74caa3b80e58432ec3155b185",
"index.html": "611c83a96a149f6103deb8ecb048f84c",
"/": "611c83a96a149f6103deb8ecb048f84c",
"main.dart.js": "21341e06f3eadf4e3f9ee789b30a2897",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "910977e15e942f64bc2a75a7796b39a6",
".git/ORIG_HEAD": "7e399d3df08d4a799650c1a68e1aad10",
".git/config": "9b9056e58e63c646bff538f8d68f8ead",
".git/objects/59/96d47a3cfba09b2cc04b8f02720dae2e21cd75": "36052720cc0c26895b6d8f8ca1d6bf7e",
".git/objects/57/c4a17894becaefe540ff3e6b674ec03fdf397a": "ae78975b9a2c53f01e13df9a9d39066e",
".git/objects/6f/9509c88bed7080d496fc5e1d87a9315e30549d": "c02716d7aaed30ce1c5697a2fb40d317",
".git/objects/6f/9f3c1e989edf5ee8f2f0d5447b9e003453f724": "27f51c828f66becc3c486664fc9ebd4e",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/3c/fc416bbb35005784eab0d5bb8565c8b0cf7a32": "63aa6dbdf925e7527098e6645c6d7384",
".git/objects/60/baf7dea69108fc935350594c282c987e1da21f": "33b22705844384f8d5f594d4ad0fcab6",
".git/objects/60/23ebcd30c5ac5e438989104d16c728fb7009fc": "a78931d55ec15eaa60a6678f6912884b",
".git/objects/5f/c3cedb82520495df7cb6a7c9c7ffb5777d2249": "bc8e3dcd91fb0950f34dd1952fce3889",
".git/objects/33/eba8b192384487f04951539f13bf1f8dd9f9cb": "8b147483b254a82db0bcaf9f71cd7f6b",
".git/objects/a4/a924f9bd1b28c44981ac4ece2fb625a60c2da3": "10b5e6f90793b8aec98f6e70ffa19227",
".git/objects/ad/569a6a5b259b87c457fb86c5b715ff33531338": "0eb0717185722dc6d89cde5e576eef7c",
".git/objects/be/121cc7c416729817b180a93cfe38470e3844ca": "434c8103bad75fd6299eb4239d7fb665",
".git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
".git/objects/d6/975d2c436b6d75ab40f6f5fc224a610b98af28": "2b9957c20e69beacb9856a0583de47b2",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/9b1ef7988061cdff81485da39746d2695f534f": "d05603f8c3ee0ea1f050924264b41307",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/c0ccfb0fb6cfe05a924aedc37fa567fffdf17a": "b11930133ac5d3dec54af64068160f75",
".git/objects/fd/3d754122547d82f8b53bfb3c41ed579a98b92f": "da04703edb6dbde7a85cd59d044b866f",
".git/objects/cf/52c7c08cea357f21cbd81e80409196154e676c": "e47f8919b2f3e8be0b991be330d5e0dc",
".git/objects/fe/ca22a73770d22ffdd8500e16fb3ed580067ecc": "c1ad7e70edb57ba63a388f60ac71fa72",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/73/c0da6b9fb297fc6fa00513a32ba3ee13dce2ec": "97f66b580412d7777810f81b1ecd98cc",
".git/objects/8a/480256a00ca393b07c0980016623bec2367e7a": "9aaee600428c8f93b3d69704a5c9054f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/fc7d7f1a97b85c6bbbb7f0b7d19b139d08f658": "d3b7da0b12422bcf51246d40d052d1c4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/36/df1d2a789e297984f68e22f6a06193765f4ddb": "ba8167c8f882b6fbce0d28ba5948d953",
".git/objects/5c/fca445e866c1cd4f1764f01bf389f626008e3c": "0cd0332cbc0345ecffbb3ed381fd205b",
".git/objects/09/4d8b2d773cebc0f25a2a067e1f886ad6491398": "f053150ef8ec3c9245714b27fdad4482",
".git/objects/37/95bbd656e83684db812859fa3848b4d3668c8f": "a923eede5006c962018ea1b6777d6eeb",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/0f/71a9e50f90401e4c8037346e69ca9c9c207904": "93d33c651dc4790f5f126d760d884f40",
".git/objects/64/50044bf437a14c97258bac40a666f6260b7b61": "288e7751f93b66661795e7bed8042d1f",
".git/objects/d4/009c99434f2d56d4d5f3d9b49a8e45cf2d3a28": "ad18f10d955ebbfca548a849fd674ca1",
".git/objects/ba/3100b40ca9a1735d08832b333716edc49d10e0": "5598a91d1cd1b47651cea8a875b8a275",
".git/objects/aa/4d53323987728842be1dbf54165259cb8a4cf4": "bbfca018ab834e9b10df32934db0fc4b",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/0e3c654fd51e481de4c072ae8ec3c9ab25c82b": "c6b1286ba4fbd0e431c6de398133b9b0",
".git/objects/46/a1802f6398d71e0bef30408ea7c871e5db0e73": "7a1086c7281d2e2f6a099d2bbef9e2cf",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/71/896e7c9d0459d24a0fe78eeaab79bc1f538a3e": "7e6d16c0f9387f03cf8f2fc56a44fe74",
".git/objects/40/1fdb359ae8d906827e2c6ab48ee7369642b2dc": "f7f8e21d98a857f05783636c73e1c1a4",
".git/objects/8b/2608a329c1bc91bf837c458f3d84c51bf0d496": "cbfa08a43d1cb98cdd040e9500b01989",
".git/objects/13/b48e507aa9e676bd169f147468db9194a826d6": "3cfa1570cf9af015db518970519649a0",
".git/objects/7f/969e9c5e5277548ad15f1e2c58b3765500c38c": "676436dd0901f92b95fe87f60b5b1149",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a1de42c084b3731a77105a5a7780e76c",
".git/logs/refs/heads/main": "113ae12c2193cf4582669efc26730400",
".git/logs/refs/remotes/remote-web/HEAD": "71b53d5af9e4996a630c411fe070cdb8",
".git/logs/refs/remotes/remote-web/main": "f9d9eeddc33c42dff1f511d0cd0563a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "1eb1f93c9a1c6a463d4972a8a3af9e18",
".git/refs/remotes/remote-web/HEAD": "0e872ef8c99c3a7dbee4f3e5e2d81ea4",
".git/refs/remotes/remote-web/main": "1eb1f93c9a1c6a463d4972a8a3af9e18",
".git/index": "321aefe44f9ae1ac076c000ccb60c15e",
".git/COMMIT_EDITMSG": "568b4671a9db81e565b1eb44664ef356",
".git/FETCH_HEAD": "3cb911a9b69374f7fa9333f463dda35d",
"assets/AssetManifest.json": "a9f56b84b98043a3aec99c4d4bd649a2",
"assets/NOTICES": "c6e3ca384e256c27542ea92a314654ed",
"assets/FontManifest.json": "3b81d8fa0dabc490dbd982a55fc8fe3f",
"assets/assets/imgs/techbrands/flutter2.png": "0bf2c1c25083a68b30d6f8bfd645e4cb",
"assets/assets/imgs/techbrands/mongodb1.png": "412ac40ddc318adfd0e09d200581960c",
"assets/assets/imgs/techbrands/docker1.png": "dc4b519362b6c85096dc820c90120eae",
"assets/assets/imgs/techbrands/aws1.png": "c7401f520e568a2994f0269e6c537f1d",
"assets/assets/imgs/techbrands/firebase1.png": "190e1a13d919c5510ae4367d5baaa4d2",
"assets/assets/imgs/techbrands/graphql1.png": "10e30fd15ebd459e710a11b9a51a05c8",
"assets/assets/imgs/sync2.png": "d0222ee5e18dbfd694a897392d6bea64",
"assets/assets/imgs/elearning1.png": "91ae1b31b336d076f8ad26c32d3a47b0",
"assets/assets/imgs/underhood2.png": "ac438fe73e07605500999e1f2a89786b",
"assets/assets/imgs/bsystems1.png": "e07af927f1a2c486a0a8253df5b6e6e3",
"assets/assets/imgs/devices2.png": "fcd93cf799404fa22b0a3c73fed4ac33",
"assets/assets/imgs/hero2.png": "29e2274bcfa90ce2b39e503afff68e9d",
"assets/assets/fonts/Lato-Black.ttf": "e631d2735799aa943d93d301abf423d2",
"assets/assets/fonts/Lato-Regular.ttf": "2d36b1a925432bae7f3c53a340868c6e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
