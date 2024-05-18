const removeFromArray = function (workArray, ...elementsToRemove) {
  const newArray = workArray.filter(
    (element) => !elementsToRemove.includes(element)
  );
  return newArray;
};
//removeFromArray([1, 2, 3, 4], 3, 4);

// const result = removeFromArray([1, 2, 3, 4], 3, 4);
//console.log(result);

// .shift the first
//
// Do not edit below this line

module.exports = removeFromArray;
