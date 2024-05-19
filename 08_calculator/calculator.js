const add = function(a,b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
	
};

const sum = function(array) {
  const total = array.reduce((acc, current) => acc + current, 0);
    return total;
};

const multiply = function(array) {
  const total = array.reduce((acc, current) => acc * current, 1);
    return total;

};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(a) {
  if (a === 0 ) {
    return 1;
  } else {
    let result = 1;
    for (let i  = a; i > 0; i--) {
      result *= i;
    }
    return result;
}};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
