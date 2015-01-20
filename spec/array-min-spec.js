var arrayfun = require('../arrayfun');

describe("arrayfun", function() {
  it("min() function must exist", function() {
    expect( arrayfun.min ).toBeDefined();
  });
  
  it("min() should return smallest element of array", function() {
    var test_array = [4, 2, 8, 6];

    expect( arrayfun.min(test_array) ).toBe(2);
  });

  it("should return Infinity for empty/falsey values", function() {
    var test_array = [];
    expect( arrayfun.min(test_array) ).toBe(Infinity);

    test_array = false;
    expect( arrayfun.min(test_array) ).toBe(Infinity);



  });

});