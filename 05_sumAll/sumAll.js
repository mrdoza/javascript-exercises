const sumAll = function (a, b) {
  let sum = 0;
  if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
    return "ERROR";
  } else {
    if (a > b) {
      while (b <= a) {
        sum += b++;
      }
      return sum;
    } else {
      while (a <= b) {
        sum += a++;
      }
      return sum;
    }
  }
};

//const result = sumAll(3, -1);
//console.log(result);
// Do not edit below this line
module.exports = sumAll;
