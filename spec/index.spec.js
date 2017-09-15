var root = this;

(function UMD_loader(root, factory) {
  'use strict';

  if (typeof define === 'function' && define.amd) {
    define('myappTests', ['myapp', 'App', 'ToDoList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    factory(
      require('../src/index'),
      require('../src/App'),
      require('../src/ToDoList')
    );
  } else {
    factory(root.myapp, root.myapp.App, root.myapp.ToDoList);
  }
}(this, function testsProvider(myapp, App, ToDoList) {
  describe('myapp module', function myappTests() {
    'use strict';

    it('should be defined', function appDefinedTest() {
      expect(myapp).toBeDefined();
    });

    it('should be an object', function appPropertyTest() {
      expect(myapp).toEqual(jasmine.any(Object));
    });

    it('should have version property', function versionStringTest() {
      expect(myapp.version).toBeDefined();
    });

    it('version property should be a string', function versionPropertyTest() {
      expect(myapp.version).toEqual(jasmine.any(String));
    });

    it('should follow version formatting', function versionPropertyTest() {
      expect(/\d+\.\d+\.\d+/.test(myapp.version)).toBe(true);
    });

    it('should be version 1.0.0', function versionTest() {
      expect(myapp.version).toBe("1.0.0");
    });

    it('should have "App" property', function appDefinedTest() {
      expect(App).toBeDefined();
      expect(myapp.App).toBeDefined();
      expect(App).toBe(myapp.App);
    });

    it('"App" property should be a function', function appFunctionTest() {
      expect(App).toEqual(jasmine.any(Function));
    });

    it('should have "ToDoList" property', function todoPropertyTest() {
      expect(ToDoList).toBeDefined();
      expect(myapp.ToDoList).toBeDefined();
      expect(ToDoList).toBe(myapp.ToDoList);
    });

    it('"ToDoList" property should be a function', function todoFunctionTest() {
      expect(ToDoList).toEqual(jasmine.any(Function));
    });

    it('should have a "bootstrap" property', function bootPropertyTest() {
      expect(myapp.bootstrap).toBeDefined();
    });

    it('"bootstrap" property should be a function', function bootFunctionTest() {
      expect(myapp.bootstrap).toEqual(jasmine.any(Function));
    });

    it('"bootstrap" should create the app', function bootAppTest() {
      var old = App.prototype._init;
      var init = App.prototype._init = jasmine.createSpy('_init');
      myapp.bootstrap.apply({});
      expect(init).toHaveBeenCalled();
      expect(init).toHaveBeenCalledTimes(1);
      App.prototype._init = old;
      var that = {};
      myapp.bootstrap.apply(that);
      expect(that.app).toBeDefined();
      expect(that.app).toEqual(jasmine.any(Object));
      expect(that.app).toEqual(jasmine.any(App));
      expect(myapp.app).not.toBeDefined();
    });
  });
}));
