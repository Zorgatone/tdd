(function UMD_loader(root, factory) {
  'use strict';

  if (typeof define === 'function' && define.amd) {
    define('ToDoList', [], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.myapp = root.myapp || {};
    root.myapp.ToDoList = factory();
  }
}(this, function ToDoListProvider() {
  'use strict'

  // ToDoList Class
  var ToDoList = function ToDoList() {
    if (!(this instanceof ToDoList)) {
      throw new Error(
        'ToDoList should be instantiated with the "new" operator ' +
        'instead of being called directly!'
      );
    }

    this._init();
  };

  // ToDoList Methods
  ToDoList.prototype = {
    _init: function _init() {
      this._list = [];
    }
  };

  return ToDoList;
}));
