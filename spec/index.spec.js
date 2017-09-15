var root = this;

describe('myapp module', function myappTests() {
  'use strict';

  it('should be defined', function appDefinedTest() {
    expect(root.myapp).toBeDefined();
  });

  it('should be an object', function appPropertyTest() {
    expect(root.myapp).toEqual(jasmine.any(Object));
  });

  it('should have version property', function versionStringTest() {
    expect(root.myapp.version).toBeDefined();
  });

  it('version property should be a string', function versionPropertyTest() {
    expect(root.myapp.version).toEqual(jasmine.any(String));
  });

  it('should follow version formatting', function versionPropertyTest() {
    expect(/\d+\.\d+\.\d+/.test(root.myapp.version)).toBe(true);
  });

  it('should be version 1.0.0', function versionTest() {
    expect(root.myapp.version).toBe("1.0.0");
  });

  it('should have app property', function appDefinedTest() {
    expect(root.myapp.App).toBeDefined();
  });

  it('app property should be a function', function appFunctionTest() {
    expect(root.myapp.App).toEqual(jasmine.any(Function));
  });
});
