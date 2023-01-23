const numbers = [3, 13, 23, 33, 43, 54];

for (let i = 0; i < numbers.length; i += 1) {
  console.log(`Index ${i}, value ${numbers[i]}`);
}

console.log("=======forEach======");

numbers.forEach(function (number, index) {
  console.log(`Index ${index}, value ${number}`);
});
