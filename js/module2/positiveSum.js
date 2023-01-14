function positiveSum(arr) {
  let sum = 0;
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] > 0) {
      sum += arr[index];
    }
  }
  return sum;
}

console.log(positiveSum([1, 2, -34]));

function smallestOne(args) {
  let smallest = args[0];
  for (let index = 0; index < args.length; index += 1) {
    if (args[index] < smallest) {
      smallest = args[index];
    }
  }
  return smallest;
}

console.log(smallestOne([-2, -4, 1, 23, 4]));

// ===OR=====

function smallestOneV2(params) {
  return Math.min(...params);
}
console.log(smallestOneV2([-2, -54, 1, 23, 4]));
