var arrayfun = require('../arrayfun');

describe("arrayfun", function() {
  it("max() function must exist", function() {
    expect( arrayfun.max ).toBeDefined();
  });
  
  it("max() should return largest element of array", function() {
    var test_array = [4, 2, 8, 6];

    expect( arrayfun.max(test_array) ).toBe(8);
  });

  it("max() should return -Infinity for empty/falsey values", function() {
    var test_array = [];
    expect( arrayfun.max(test_array) ).toBe(-Infinity);

    test_array = false;
    expect( arrayfun.max(test_array) ).toBe(-Infinity);
  });

});