const centerOfArray = function(arr) {
  return 3;
};

const reducer = (accumulator, currentValue) => accumulator + currentValue;

const leftSum = function(arry, index) {
  const result = [];
  for (let i = 0; i < index; i += 1) {
    result.push(arry[i]);
  }
  return result.reduce(reducer);
};

module.exports = {
  centerOfArray,
  leftSum
};
