var arrayfun = require('../arrayfun');

describe("arrayfun", function() {
  it("max() function must exist", function() {
    expect( arrayfun.max ).toBeDefined();
  });
  
  it("max() should return largest element of array", function() {
    var test_array = [4, 2, 8, 6];

    expect( arrayfun.max(test_array) ).toBe(8);
  });

});