!function(){"use strict";var s="/X-Sound/",e=[s,"/X-Sound/index.html","/X-Sound/favicon.ico","/X-Sound/lib/css/jquery-ui/jquery-ui-1.10.3.custom.min.css","/X-Sound/lib/css/colorbox/colorbox.css","/X-Sound/lib/js/select2/select2.css","/X-Sound/lib/js/angularjs/angular.min.js","/X-Sound/lib/js/jquery/jquery-2.1.1.min.js","/X-Sound/lib/js/jquery-ui/jquery-ui-1.9.2.custom.min.js","/X-Sound/lib/js/colorbox/jquery.colorbox-min.js","/X-Sound/lib/js/select2/select2.min.js","/X-Sound/lib/js/jquery-socialbutton/jquery.socialbutton-1.9.1.min.js","/X-Sound/stylesheets/css/mac.css","/X-Sound/stylesheets/css/noscript.css","/X-Sound/stylesheets/css/ie.css","/X-Sound/javascripts/xsound.js","/X-Sound/javascripts/xsound.js.map","/X-Sound/javascripts/controller.min.js","/X-Sound/register-service-worker.js"];self.addEventListener("install",function(s){s.waitUntil(self.skipWaiting())},!1),self.addEventListener("fetch",function(s){(e.some(function(e){return-1!==s.request.url.indexOf(e)})||s.request.url.endsWith(".wav")||s.request.url.endsWith(".mp3")||s.request.url.endsWith(".png")||s.request.url.endsWith(".txt"))&&s.respondWith(caches.match(s.request).then(function(e){if(e)return e;var n=s.request.clone();return fetch(n).then(function(e){var n=e.clone();return caches.open("x-sound-cache-v2.1.8").then(function(e){e.put(s.request,n)}),e})}))},!1),self.addEventListener("activate",function(s){s.waitUntil(caches.keys().then(function(s){return Promise.all(s.filter(function(s){return"x-sound-cache-v2.1.8"!==s}).map(function(s){return caches.delete(s)}))}))},!1)}();