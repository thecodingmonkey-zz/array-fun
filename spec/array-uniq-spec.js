var arrayfun = require('../arrayfun');

describe("arrayfun", function() {
  it("uniq() function must exist", function() {
    expect( arrayfun.uniq ).toBeDefined();
  });
  
  it("uniq() should return uniq items of array", function() {
    expect( arrayfun.uniq([1,2,1,3,1] )).toEqual([1,2,3]);
  });

  it("uniq() should return uniq items of array", function() {
    expect( arrayfun.uniq([1,1,2,2,3] )).toEqual([1,2,3]);
  });


});