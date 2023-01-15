function createArrayOfNumbers(min, max) {
  const numbers = [];

  for (let index = min; index <= max; index += 1) {
    numbers.push(index);
  }

  return numbers;
}
console.log(createArrayOfNumbers(3, 6));

// ========Filter array

function filterArray(numbers, value) {
  const newArray = [];
  for (const number of numbers) {
    if (number > value) {
      newArray.push(number);
    }
  }
  return newArray;
}

console.log(filterArray([1, 3, 4, 5, 6, 7, 8, 45, 56, 7, 8, 9], 6));
