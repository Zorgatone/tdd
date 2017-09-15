(function UMD_loader(root, factory) {
  'use strict';

  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define('myapp', ['App'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('App'));
  } else {
    // Browser globals (root is window)
    root.myapp = factory(root.myapp.App);
  }
}(this, function myappModule(App) {// Use lib in some fashion.
  'use strict';

  // Just return a value to define the module export.
  // This example returns an object, but the module
  // can return a function as the exported value.
  return {
    version: '1.0.0',
    App: App
  };
}));
