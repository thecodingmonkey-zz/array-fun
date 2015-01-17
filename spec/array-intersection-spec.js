var arrayfun = require('../arrayfun');

describe("arrayfun", function() {
  it("intersection() function must exist", function() {
    expect( arrayfun.intersection ).toBeDefined();
  });
  
  it("intersection() should return intersection of arrays", function() {
    expect( arrayfun.intersection([1,2,3],[5,2,1,4],[2,1] )).toEqual([1,2]);
    expect( arrayfun.intersection([2,3,4],[5,2])).toEqual([2]);
  });

});