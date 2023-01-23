function classicAdd(a, b, c) {
  return a * b + c;
}

console.log(classicAdd(8, 7, 6));

console.log("==========arrowFunc==========");

const arrowAdd = (a, b, c) => {
  return a * b + c;
};

console.log(arrowAdd(3, 4, 9));

console.log("==========arrowFunc => rest==========");

const add = (...args) => {
  console.log(args);
};

add(1, 2, 3);

console.log("==========arrowFunc => callback==========");

const numbers = [2, 12, 22, 32, 42, 53];

numbers.forEach((number, index) => {
  console.log(`Index ${index}, value ${number}`);
});

console.log("======or as a variable======");

const logMessage = (number, index) => {
  console.log(`Index ${index}, value ${number}`);
};

numbers.forEach(logMessage);

console.log("===========declarative and Method filter===========");

const filteredNumbers = numbers.filter((value) => value > 20);

// try to explain me
// const filteredNumbers = [2, 12, 22, 32, 42, 53].filter(function (value) {
//   return value > 20;
// });

console.log(filteredNumbers);
