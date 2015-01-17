var arrayfun = require('../arrayfun');

describe("arrayfun", function() {
  it("contains() function must exist", function() {
    expect( arrayfun.contains ).toBeDefined();
  });
  
  it("contains() should return contains items of array", function() {
    expect( arrayfun.contains([1,2,3], 1 )).toBe(true);
  });

  it("contains() should return contains items of array", function() {
    expect( arrayfun.contains([1,2,3], 1, 2 )).toBe(false);
  });


});