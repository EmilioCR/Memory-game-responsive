importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "css/styles.css",
    "revision": "2687df70d178983b4f40aabe2cc3c2ff"
  },
  {
    "url": "img/adventure_time_avatar_pic_3_by_springtrappedfan-d98bgp5.jpg",
    "revision": "3b947180140c4963699a953e2269c225"
  },
  {
    "url": "img/adventure-time-wallpaper-fionna_the_human.jpg",
    "revision": "542b1ccc5e5942d473f48ba1ab7bb91b"
  },
  {
    "url": "img/back-card-small.jpg",
    "revision": "f9ee5e5cde4e0dbb6cb3528fbbffc20d"
  },
  {
    "url": "img/back-card.jpg",
    "revision": "80c90b2cc22b461d36e415ee827c6c17"
  },
  {
    "url": "img/beemo-card-small.jpg",
    "revision": "4bca80c7527af033d173c2019315590a"
  },
  {
    "url": "img/beemo-card.jpg",
    "revision": "6ae2c937a2668dad134a6426ceab1eb8"
  },
  {
    "url": "img/beemo-detective-card-small.jpg",
    "revision": "d14dd1ce1c4a47a713484e16e53feaa0"
  },
  {
    "url": "img/beemo-detective-card.jpg",
    "revision": "e657304b1896793d5432cebb29dd8534"
  },
  {
    "url": "img/finn-card-small.jpg",
    "revision": "2b4b130ae610bd6561a37ae85da32152"
  },
  {
    "url": "img/finn-card.jpg",
    "revision": "45a732b1fa318a30c3f6288d22d63fa2"
  },
  {
    "url": "img/fionna-card-small.jpg",
    "revision": "54fce7f88a7dc1ce5c0ed3624288224e"
  },
  {
    "url": "img/fionna-card.jpg",
    "revision": "4a72708f402133e7891d0cdf266ee3a3"
  },
  {
    "url": "img/fire-princess-card-small.jpg",
    "revision": "cadd62e68cf8a206daf6a624fe85b871"
  },
  {
    "url": "img/fire-princess-card.jpg",
    "revision": "60f7b3e6d14a5cd06d30077bc40dd4ac"
  },
  {
    "url": "img/grumosa-card-small.jpg",
    "revision": "7e38cb347399f805751510a7638b1144"
  },
  {
    "url": "img/grumosa-card.jpg",
    "revision": "ddb5f99b5b45998ca97be27948ac700d"
  },
  {
    "url": "img/jake-angry-card-small.jpg",
    "revision": "3144fc39bd60c3a7e3b07a2ceba3fc7d"
  },
  {
    "url": "img/jake-angry-card.jpg",
    "revision": "423cbff1b0ff7a7b0541b35dd3965b5a"
  },
  {
    "url": "img/lemon-card-small.jpg",
    "revision": "9718db6b7e568b34027a2e2bb5e7cc47"
  },
  {
    "url": "img/lemon-card.jpg",
    "revision": "9eee74188bb70ade7d71ef778f4e5423"
  },
  {
    "url": "img/marceline-card-small.jpg",
    "revision": "6015157416674e1c3fab23aee0e513b2"
  },
  {
    "url": "img/marceline-card.jpg",
    "revision": "c35bfa5e84078073d8007a7ae7377edf"
  },
  {
    "url": "img/pingu-card-small.jpg",
    "revision": "cabf9da69156c8a975b0c5d72de5d4d4"
  },
  {
    "url": "img/pingu-card.jpg",
    "revision": "ddd34cc5f4ffd937f0480057ea60fe70"
  },
  {
    "url": "index.html",
    "revision": "0286813592e13a1c23945c740fc639b6"
  },
  {
    "url": "js/script.js",
    "revision": "696fad563a2e9679abe38387ac2eba89"
  },
  {
    "url": "manifest.json",
    "revision": "61ddeb8f27f0a7fdca159ea9cd6d2ba1"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
