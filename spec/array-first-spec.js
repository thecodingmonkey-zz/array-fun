var arrayfun = require('../arrayfun');

describe("arrayfun", function() {
  it("first() function must exist", function() {
    expect( arrayfun.first ).toBeDefined();
  });
  
  it("first() should return first element of array", function() {
    var test_array = ['a','b','c'];

    expect( arrayfun.first(test_array) ).toBe('a');
    expect( arrayfun.first(test_array, 2)).toEqual(['a', 'b']);
  });

});