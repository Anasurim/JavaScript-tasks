function filterArray(numbers, value) {
  const filteredNumbers = [];

  numbers.forEach((number) => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });
  //   for (let i = 0; i < numbers.length; i += 1) {
  //     if (numbers[i] > value) {
  //       filteredNumbers.push(numbers[i]);
  //     }
  //   }

  return filteredNumbers;
}

console.log(filterArray([3, 4, 5, 6, 7, 8], 5));

console.log("=========common elements=================");

function getCommonElements(firstArray, secondArray) {
  const commonElements = [];

  firstArray.forEach((item) => {
    if (secondArray.includes(item)) {
      commonElements.push(item);
    }
  });
  //   for (let i = 0; i < firstArray.length; i += 1) {
  //     if (secondArray.includes(firstArray[i])) {
  //       commonElements.push(firstArray[i]);
  //     }
  //   }

  return commonElements;
}
console.log(getCommonElements([1, 2, 3, 4, 5, 6], [3, 5, 6, 7]));
