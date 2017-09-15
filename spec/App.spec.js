(function UMD_loader(root, factory) {
  'use strict';

  if (typeof define === 'function' && define.amd) {
    define('AppSpecsProvider', ['myapp','App','ToDoList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    factory(
      require('../src/index'),
      require('../src/App'),
      require('../src/ToDoList')
    );
  } else {
    factory(root.myapp, root.myapp.App, root.myapp.ToDoList);
  }
}(this, function AppSpecsProvider(myapp, App, ToDoList) {
  'use strict';

  describe('myapp.App class', function appTests() {
    it('should be defined', function todoDefinedTest() {
      expect(App).toBeDefined();
    });

    it('should be a function', function todoDefinedTest() {
      expect(App).toEqual(jasmine.any(Function));
    });

    it('should return a value', function appReturnTest() {
      expect(new App()).toBeDefined();
    });

    it('should return an object', function appObjectTest() {
      expect(new App()).toEqual(jasmine.any(Object));
    });

    it('should return an instance of myapp.App', function appInstanceTest() {
      expect(new App()).toEqual(jasmine.any(App));
    });

    it('should fail without the "new" operator', function appNewTest() {
      expect(App).toThrow();
    });

    it('should throw message without using the "new" operator', function appThrowTest() {
      expect(App).toThrowError(
        Error,
        'App should be instantiated with the "new" operator instead of being called directly!'
      );
    });

    it('should call _init on creation', function appInitTest() {
      var old = App.prototype._init;
      var init = App.prototype._init = jasmine.createSpy('_init');
      new App();
      expect(init).toHaveBeenCalled();
      App.prototype._init = old;
    });

    it('should call _init on creation only once', function appInitOnceTest() {
      var old = App.prototype._init;
      var init = App.prototype._init = jasmine.createSpy('_init');
      new App();
      expect(init).toHaveBeenCalledTimes(1);
      App.prototype._init = old;
    });

    it('_init should call ToDoList', function appInitToDoTest() {
      var old = ToDoList.prototype._init;
      var fn = ToDoList.prototype._init = jasmine.createSpy('ToDoList');
      new App();
      expect(fn).toHaveBeenCalled();
      ToDoList.prototype._init = old;
    });

    it('should have name property', function appNamePropertyTest() {
      expect((new App()).name).toBeDefined();
    });

    it('name property should be a string', function appNameStringTest() {
      expect((new App()).name).toEqual(jasmine.any(String));
    });

    it('name property should be "myapp"', function appNameTest() {
      expect((new App()).name).toBe("myapp");
    });

    it('should have a todos property', function appListPropertyTest() {
      expect((new App()).todos).toBeDefined();
    });

    it('should have a getHello property', function appGetHelloPropertyTest() {
      expect((new App()).getHello).toBeDefined();
    });

    it('getHello should be a function', function appGetHelloFunctionTest() {
      expect((new App()).getHello).toEqual(jasmine.any(Function));
    });

    it('should have a getHello prototype property', function appGetHelloPrototypeTest() {
      expect(App.prototype.getHello).toBeDefined();
    });

    it('should have a getHello method', function appGetHelloMethodTest() {
      expect(App.prototype.getHello).toEqual(jasmine.any(Function));
    });

    it('getHello should not be overridden', function appGetHelloOverrideTest() {
      expect((new App()).getHello).toBe(App.prototype.getHello);
    });

    it('getHello should return a value', function appGetHelloReturnTest() {
      expect((new App()).getHello()).toBeDefined();
    });

    it('getHello should return a string', function appGetHelloStringTest() {
      expect((new App()).getHello()).toEqual(jasmine.any(String));
    });

    it('getHello should return "Hello, World!"', function appGetHelloValueTest() {
      expect((new App()).getHello()).toBe('Hello, World!');
    });

    it('should have a start prototype property', function appStartPrototypeTest() {
      expect(App.prototype.start).toBeDefined();
    });

    it('should have a start method', function appStartMethodTest() {
      expect(App.prototype.start).toEqual(jasmine.any(Function));
    });

    it('start should not be overridden', function appStartOverrideTest() {
      expect((new App()).start).toBe(App.prototype.start);
    });

    it('start should return undefined', function appStartVoidTest() {
      expect((new App()).start()).not.toBeDefined();
    });

    it('start should call console.log()', function appStartConsoleTest() {
      var old = console.log;
      console.log = jasmine.createSpy('log');
      (new App()).start();
      expect(console.log).toHaveBeenCalled();
      console.log = old;
    });

    it('start should call console.log() and print "App is starting..."', function appStartLogTest() {
      var old = console.log;
      console.log = jasmine.createSpy('log');
      (new App()).start();
      expect(console.log).toHaveBeenCalledWith('App is starting...');
      console.log = old;
    });
  });
}));
