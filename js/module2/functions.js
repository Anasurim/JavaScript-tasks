function multiply(x, y, z) {
  console.log("code before return");
  return x * y * z;
}

let result = multiply(3, 4, 5);
console.log(result);

console.log("===============");

function count(countFrom = 0, countTo = 10, step = 1) {
  console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);
  for (let i = countFrom; i < countTo; i += step) {
    console.log(i);
  }
}
count(0, 28);

console.log("===============");

// ====

function mulzi() {
  let total = 1;
  for (const argument of arguments) {
    total *= argument;
  }
  return total;
}
console.log(mulzi(1, 2, 34, 5));

console.log("===============");

function fnA() {
  console.log("Лог всередині функції fnA до виклику fnB");
  fnB();
  console.log("Лог всередині функції fnA після виклику fnB");
}

function fnB() {
  console.log("Лог всередині функції fnB");
}

console.log("Лог до виклику fnA");
fnA();
console.log("Лог після виклику fnA");

console.log("==================");

function bar() {
  console.log("bar");
}

function baz() {
  console.log("baz");
}

function foo() {
  console.log("foo");
  bar();
  baz();
}

foo();
