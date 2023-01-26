function changeEven(numbers, value) {
  let changedNumbers = [];

  numbers.forEach((number) => {
    if (number % 2 === 0) {
      changedNumbers.push(number + value);
    } else changedNumbers.push(number);
  });
  return changedNumbers;
}
const nums = [1, 2, 3, 4, 5];

console.log(changeEven(nums, 10));
