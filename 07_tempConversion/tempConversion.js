const convertToCelsius = function (fDeg) {
  let cel = (fDeg - 32) * 5 / 9;
  const roundedNum = Math.round(cel * 10) / 10;
  return roundedNum;
};

const convertToFahrenheit = function (cDeg) {
  let feh = (cDeg * 9) / 5 + 32;
  const roundedNum = Math.round(feh * 10) / 10;
  return roundedNum;
};

const result = convertToCelsius(100);
console.log(result);


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};

