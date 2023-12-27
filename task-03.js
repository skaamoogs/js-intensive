// function declaration
function makeCounter1() {
  let count = 0;

  return function () {
    return count++;
  };
}

// function expression
const makeCounter2 = function () {
  let count = 0;

  return function () {
    return count++;
  };
};

// named function expression
const makeCounter3 = function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
};

// arrow function
const makeCounter4 = () => {
  let count = 0;

  return function () {
    return count++;
  };
};

// with new Function
const makeCounter5 = new Function("return function () { return count++ };");
