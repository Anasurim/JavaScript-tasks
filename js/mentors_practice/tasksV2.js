console.log("===========Task 1==============");

//Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt та викликає callback функцію
//greet(name) - коллбек, що приймає ім'я і логірує в консоль
//Рядок "Привіт <name>"
//Реалізуй перевірку, що prompt не порожній

// letMeSeeYourName(callback) - запитує ім'я користувача

const letMeSeeYourName = (callback) => {
  const inputName = prompt("Write your name");
  if (!inputName) {
    console.log("Incorrect input, write your name!!!");
    return;
  }
  callback(inputName);
};

//greet(name) - коллбек, що приймає ім'я і логірує в консоль

const greet = (name) => {
  console.log(`Hi, ${name}`);
};

// letMeSeeYourName(greet);

console.log("===========Task 2==============");

//Напишіть дві функції
//makeProduct(name, price, callback) - приймає
//ім'я та ціну товару, а також callback.
//Функція створює об'єкт товару, додаючи йому унікальний
//ідентифікатор як id і викликає callback
//Передаючи йому створений об'єкт.
//showProduct(product) - коллбек приймаючий об'єкт
//продукту і логірующий їх у консоль

const makeProduct = (name, price, callback) => {
  const product = {
    name,
    price,
    id: Math.random(),
  };

  callback(product);
};

const showProduct = (product) => {
  console.log(product);
};

makeProduct("Iphone", 4599, showProduct);

console.log("==========Task 3==========");

//Виконай рефакторинг makeDish так, щоб не потрібно було
// Щоразу передавати ім'я шефа.
//Напишіть функцію makeShef(shefName), яка повертає функцію
//makeDish(dish), що пам'ятає ім'я шефа під час її виклику

// const makeDish = function (shefName, dish) {
// console.log(`${shefName} is cooking ${dish}`);
//};

const makeShef = (shefName) => {
  return function makeDish(dish) {
    console.log(`${shefName} is cooking ${dish}`);
  };
};

const roman = makeShef("Roman");
roman("Pelmenis");

const vehicles = [
  {
    make: "Honda",
    model: "CR-V",
    type: "suv",
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: "Honda",
    model: "Accord",
    type: "sedan",
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: "Mazda",
    model: "Mazda 6",
    type: "sedan",
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: "Mazda",
    model: "CX-9",
    type: "suv",
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: "Toyota",
    model: "4Runner",
    type: "suv",
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Sequoia",
    type: "suv",
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Tacoma",
    type: "truck",
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: "Ford",
    model: "F-150",
    type: "truck",
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Fusion",
    type: "sedan",
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Explorer",
    type: "suv",
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

const modelArr = vehicles.map(({ model }) => model);
// const {model}= vehicle

console.log(modelArr);

const pricesTotalValue = vehicles.reduce((total, element) => {
  return (total += element.price);
}, 0);

console.log(pricesTotalValue);

const typesArr = vehicles.reduce((acc, car) => {
  //   console.log(acc);
  //   return acc.push(car.type);  //erron not a function

  acc.push(car.type);
  return acc;
}, []);

console.log(typesArr);
