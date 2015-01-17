var arrayfun = require('../arrayfun');

describe("arrayfun", function() {
  it("min() function must exist", function() {
    expect( arrayfun.min ).toBeDefined();
  });
  
  it("min() should return smallest element of array", function() {
    var test_array = [4, 2, 8, 6];

    expect( arrayfun.min(test_array) ).toBe(2);
  });

});