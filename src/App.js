(function UMD_loader(root, factory) {
  'use strict';

  if (typeof define === 'function' && define.amd) {
    define('App', ['ToDoList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('./ToDoList'));
  } else {
    root.myapp.App = factory(root.myapp.ToDoList);
  }
}(this, function AppProvider(ToDoList) {
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
      this.todos = new ToDoList();
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
