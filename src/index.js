(function strictClosure(root) {
  'use strict';

  (function UMD_loader(factory) {
    if (typeof define === 'function' && define.amd) {
      // AMD. Register as an anonymous module.
      define('myapp', ['App', 'ToDoList'], factory);
    } else if (typeof module === 'object' && module.exports) {
      // Node. Does not work with strict CommonJS, but
      // only CommonJS-like environments that support module.exports,
      // like Node.
      module.exports = factory(
        require('./App'),
        require('./ToDoList')
      );
    } else {
      // Browser globals (root is window)
      root.myapp = factory(root.myapp.App, root.myapp.ToDoList);
    }
  }(function myappModule(App, ToDoList) {// Use lib in some fashion.
    'use strict';

    // Just return a value to define the module export.
    // This example returns an object, but the module
    // can return a function as the exported value.
    return {
      version: '1.0.0',
      bootstrap: function bootstrap() {
        var app = new App();
        app.start();
        this.app = app;
      },
      App: App,
      ToDoList: ToDoList
    };
  }));
}(this));
