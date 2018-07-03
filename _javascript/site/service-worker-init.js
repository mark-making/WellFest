if (navigator.serviceWorker.controller) {
  // A ServiceWorker controls the site on load and therefor can handle offline
  // fallbacks.
  debug(
    navigator.serviceWorker.controller.scriptURL + ' (onload)', 'controller'
  );
  debug(
    'An active service worker controller was found, ' + 'no need to register'
  );
} else {
  // Register the ServiceWorker
  navigator.serviceWorker.register('service-worker.js', {
    scope: './'
  }).then(function(reg) {
    debug(reg.scope, 'register');
    debug('Service worker change, registered the service worker');
  });
}
