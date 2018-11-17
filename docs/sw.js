/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-bd56682e72aee2dc85be.js"
  },
  {
    "url": "app-2730aa2ac960051ace17.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-66f77fc309a8a35157b1.js"
  },
  {
    "url": "index.html",
    "revision": "192afe7f05277ab4249d3b31cd473262"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "c614e06cdc38bf2a4033c821e16eb041"
  },
  {
    "url": "0-555b3e51084d936a9c9b.js"
  },
  {
    "url": "component---src-pages-index-js-afaa0e409d2220b943f3.js"
  },
  {
    "url": "static/d/804/path---index-6a9-YPzpvTOqm8g6RdihzxqJhVR8Q.json",
    "revision": "c078d5a41522c7bb1e2271aadcde4c04"
  },
  {
    "url": "component---src-pages-404-js-126e20d22743bc34295b.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "86ccbfa808a1c4425ecf3c5fb625723d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/study-english/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
