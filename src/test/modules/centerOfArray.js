const centerOfArray = function(arr) {
  let theAnswer = null;
  for (let i = 1; i < arr.length - 1; i += 1) {
    if (leftSum(arr, i) === rightSum(arr, i)) {
      theAnswer = i;
    }
  }
  return theAnswer;
};

const reducer = (accumulator, currentValue) => accumulator + currentValue;

const leftSum = function(arry, index) {
  const result = [];
  for (let i = 0; i < index; i += 1) {
    result.push(arry[i]);
  }
  return result.reduce(reducer);
};

const rightSum = function(arry, index) {
  const result = [];
  for (let i = index + 1; i < arry.length; i += 1) {
    result.push(arry[i]);
  }
  return result.reduce(reducer);
};

module.exports = {
  centerOfArray,
  leftSum,
  rightSum
};
