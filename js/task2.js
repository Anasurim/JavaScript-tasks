const valueA = "5";
console.log(Number(valueA));
console.log(typeof Number(valueA));

const valueB = "random string";
console.log(Number(valueB));
console.log(typeof Number(valueB));

console.log(Number.parseInt("5px"));
console.log(Number.parseInt("5sdf"));
console.log(Number.parseInt("5.3ddd"));
console.log(Number.parseInt("px"));

console.log(Number.parseFloat("4px"));
console.log(Number.parseFloat("7.3ddd"));
console.log(Number.parseFloat("6sdf"));
console.log(Number.parseFloat("px"));

const validNumber = Number("51");
console.log(Number.isNaN(validNumber));

const invalidNumber = Number("qwe");
console.log(Number.isNaN(invalidNumber));

console.log(0.12 + 0.23);
console.log((0.12 * 10 + 0.23 * 10) / 10);
console.log((0.12 + 0.23).toFixed(2));

console.log(Math.floor(2.7));

console.log(Math.round(2.7));

console.log(Math.max(2.7, 1.2, 4.3, 2, 1));
console.log(Math.min(2.7, 1.2, 4.3, 2, 1));

console.log(Math.pow(2, 27));

console.log(Math.random() * (10 - 1) + 1);

console.log(Math.floor(Math.random() * 11) + 1);
