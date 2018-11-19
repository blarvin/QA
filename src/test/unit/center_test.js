const expect = require("chai").expect;
const center = require("../modules/centerOfArray");

const arr1 = [1, 1, 2, 7, 4];
const arr2 = [133, 60, 23, 92, 6, 7, 168, 16, 19];
const arr3 = [30, 43, 29, 10, 50, 40, 99, 51, 12];

describe("An algorithm module", function() {
  it("Will return 3", function() {
    expect(center.centerOfArray(arr1)).to.equal(3);
  });

  it("Will sum the values to left of a given index", function() {
    expect(center.leftSum(arr1, 3)).to.equal(4);
  });
});
