// function multiply(...args) {
//   console.log(args);
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

function multiply(firstNumber, secondNumber, ...otherArgs) {
  console.log(firstNumber);
  console.log(secondNumber);
  console.log(otherArgs);
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);
// multiply(1, 2, 3, 4);
