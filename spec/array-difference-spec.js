var arrayfun = require('../arrayfun');

describe("arrayfun", function() {
  it("difference() function must exist", function() {
    expect( arrayfun.difference ).toBeDefined();
  });
  
  it("difference() should return difference of arrays", function() {
    expect( arrayfun.difference([1,2,3,4,5],[5,2,10] )).toEqual([1,3,4]);
  });

});