(function UMD_loader(root, factory) {
  'use strict';

  if (typeof define === 'function' && define.amd) {
    define('App', [], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.myapp = root.myapp || {};
    root.myapp.App = factory();
  }
}(this, function AppProvider() {
  'use strict'

  // App Class
  var App = function App() {
    if (!(this instanceof App)) {
      throw new Error(
        'App should be instantiated with the "new" operator ' +
        'instead of being called directly!'
      );
    }

    this._init();
  };

  // App Methods
  App.prototype = {
    _init: function _init() {
      this.name = 'myapp';
    },
    start: function start() {
      console.log('App is starting...');
    },
    getHello: function getHello() {
      return 'Hello, World!';
    }
  };

  return App;
}));
