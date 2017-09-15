var root = this;

describe('myapp.App class', function appTests() {
  'use strict';

  it('should return a value', function appReturnTest() {
    expect(new root.myapp.App()).toBeDefined();
  });

  it('should return an object', function appObjectTest() {
    expect(new root.myapp.App()).toEqual(jasmine.any(Object));
  });

  it('should return an instance of myapp.App', function appInstanceTest() {
    expect(new root.myapp.App()).toEqual(jasmine.any(root.myapp.App));
  });

  it('should fail without the "new" operator', function appNewTest() {
    expect(function tryWithoutNew() {
      root.myapp.App();
    }).toThrow();
  });

  it('should throw message without using the "new" operator', function appThrowTest() {
    expect(function throwWithoutNew() {
      root.myapp.App();
    }).toThrowError(
      Error,
      'App should be instantiated with the "new" operator instead of being called directly!'
    );
  });

  it('should have name property', function appNamePropertyTest() {
    expect((new root.myapp.App()).name).toBeDefined();
  });

  it('name property should be a string', function appNameStringTest() {
    expect((new root.myapp.App()).name).toEqual(jasmine.any(String));
  });

  it('name property should be "myapp"', function appNameTest() {
    expect((new root.myapp.App()).name).toBe("myapp");
  });

  it('should call _init on creation', function appInitTest() {
    var init = root.myapp.App.prototype._init = jasmine.createSpy('_init');
    new root.myapp.App();
    expect(init).toHaveBeenCalled();
  });

  it('should call _init on creation only once', function appInitOnceTest() {
    var init = root.myapp.App.prototype._init = jasmine.createSpy('_init');
    new root.myapp.App();
    expect(init).toHaveBeenCalledTimes(1);
  });

  it('should have a getHello property', function appGetHelloPropertyTest() {
    expect((new root.myapp.App()).getHello).toBeDefined();
  });

  it('getHello should be a function', function appGetHelloFunctionTest() {
    expect((new root.myapp.App()).getHello).toEqual(jasmine.any(Function));
  });

  it('should have a getHello prototype property', function appGetHelloPrototypeTest() {
    expect(root.myapp.App.prototype.getHello).toBeDefined();
  });

  it('should have a getHello method', function appGetHelloMethodTest() {
    expect(root.myapp.App.prototype.getHello).toEqual(jasmine.any(Function));
  });

  it('getHello should not be overridden', function appGetHelloOverrideTest() {
    expect((new root.myapp.App()).getHello).toBe(root.myapp.App.prototype.getHello);
  });

  it('getHello should return a value', function appGetHelloReturnTest() {
    expect((new root.myapp.App()).getHello()).toBeDefined();
  });

  it('getHello should return a string', function appGetHelloStringTest() {
    expect((new root.myapp.App()).getHello()).toEqual(jasmine.any(String));
  });

  it('getHello should return "Hello, World!"', function appGetHelloValueTest() {
    expect((new root.myapp.App()).getHello()).toBe('Hello, World!');
  });

  it('should have a start prototype property', function appStartPrototypeTest() {
    expect(root.myapp.App.prototype.start).toBeDefined();
  });

  it('should have a start method', function appStartMethodTest() {
    expect(root.myapp.App.prototype.start).toEqual(jasmine.any(Function));
  });

  it('start should not be overridden', function appStartOverrideTest() {
    expect((new root.myapp.App()).start).toEqual(root.myapp.App.prototype.start);
  });

  it('start should return undefined', function appStartVoidTest() {
    expect((new root.myapp.App()).start()).not.toBeDefined();
  });

  it('start should call console.log()', function appStartConsoleTest() {
    console.log = jasmine.createSpy('log');
    (new root.myapp.App()).start();
    expect(console.log).toHaveBeenCalled();
  });

  it('start should call console.log() and print "App is starting..."', function appStartLogTest() {
    console.log = jasmine.createSpy('log');
    (new root.myapp.App()).start();
    expect(console.log).toHaveBeenCalledWith('App is starting...');
  });
});
