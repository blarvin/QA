const expect = require("chai").expect;
const center = require("../modules/centerOfArray");

describe("An algorithm module", function() {
  const arr1 = [1, 1, 2, 7, 4];
  const arr2 = [133, 60, 23, 92, 6, 7, 168, 16, 19];
  const arr3 = [304, 43, 29, 10, 50, 40, 99, 51, 12];
  const arr4 = [1, 2, 3, 1, 9, 7];

  it("Will find the center", function() {
    expect(center.centerOfArray(arr1)).to.equal(3);
    expect(center.centerOfArray(arr4)).to.equal(4);
    expect(center.centerOfArray(arr2)).to.equal(3);
  });

  it("Will return 'null' if no center", function() {
    expect(center.centerOfArray(arr3)).to.equal(null);
  });

  it("Will sum the values to LEFT of a given index", function() {
    expect(center.leftSum(arr1, 3)).to.equal(4);
  });

  it("Will sum the values to RIGHT of a given index", function() {
    expect(center.rightSum(arr1, 3)).to.equal(4);
  });
});
