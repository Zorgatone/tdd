(function UMD_loader(root, factory) {
  'use strict';

  if (typeof define === 'function' && define.amd) {
    define('ToDoListSpecsProvider', ['ToDoList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    factory(require('../src/ToDoList'));
  } else {
    factory(root.myapp.ToDoList);
  }
}(this, function ToDoListSpecsProvider(ToDoList) {
  'use strict';

  describe('myapp.ToDoList class', function todoTests() {
    it('should be defined', function todoDefinedTest() {
      expect(ToDoList).toBeDefined();
    });

    it('should be a function', function todoFunctionTest() {
      expect(ToDoList).toEqual(jasmine.any(Function));
    });

    it('should return a value', function todoReturnTest() {
      expect(new ToDoList()).toBeDefined();
    });

    it('should return an object', function todoObjectTest() {
      expect(new ToDoList()).toEqual(jasmine.any(Object));
    });

    it('should return an instance of myapp.ToDoList', function todoInstanceTest() {
      expect(new ToDoList()).toEqual(jasmine.any(ToDoList));
    });

    it('should fail without the "new" operator', function todoNewTest() {
      expect(ToDoList).toThrow();
    });

    it('should throw message without using the "new" operator', function todoThrowTest() {
      expect(ToDoList).toThrowError(
        Error,
        'ToDoList should be instantiated with the "new" operator instead of being called directly!'
      );
    });

    it('should call _init on creation', function todoInitTest() {
      var old = ToDoList.prototype._init;
      var init = ToDoList.prototype._init = jasmine.createSpy('_init');
      new ToDoList();
      expect(init).toHaveBeenCalled();
      ToDoList.prototype._init = old;
    });

    it('should call _init on creation only once', function todoInitOnceTest() {
      var old = ToDoList.prototype._init;
      var init = ToDoList.prototype._init = jasmine.createSpy('_init');
      new ToDoList();
      expect(init).toHaveBeenCalledTimes(1);
      ToDoList.prototype._init = old;
    });

    it('should have _list property', function todoListPropertyTest() {
      expect((new ToDoList())._list).toBeDefined();
    });

    it('_list property should be an object', function todoListStringTest() {
      expect((new ToDoList())._list).toEqual(jasmine.any(Object));
    });

    it('_list property should not be null', function todoListNullTest() {
      expect((new ToDoList())._list).not.toBeNull();
    });

    it('_list property should have a length', function todoListLengthTest() {
      expect((new ToDoList())._list.length).toBeDefined();
    });

    it('_list property length should be a number', function todoListNumberTest() {
      expect((new ToDoList())._list.length).toEqual(jasmine.any(Number));
    });

    it('_list property length should start at zero', function todoListZeroTest() {
      expect((new ToDoList())._list.length).toBe(0);
    });

    it('_list property should be an Array', function ToDoListZeroTest() {
      var l = (new ToDoList())._list;
      expect(Array.isArray(l)).toBe(true);
      expect(l).toEqual(jasmine.any(Array));
    });
  });
}));
