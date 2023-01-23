// function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// }

function registerGuest(name, callback) {
  console.log(`Реєструємо гостя ${name}.`);
  callback(name);
}

registerGuest("Roman", function greet(name) {
  console.log(`Ласкаво просимо ${name}.`);
});

registerGuest("Полі", function notify(name) {
  console.log(`Шановний(а) ${name}, ваш номер буде готовий за 30 хвилин.`);
});

// const isReceipmentAvailible = Math.random() > 0.5;
// console.log(isReceipmentAvailible);
// console.log(!isReceipmentAvailible);

console.log("========Callback========");

function processCall(recipient, isAvailable, isNotAvailable) {
  const isRecipientAvailable = Math.random() > 0.5;

  if (!isRecipientAvailable) {
    isNotAvailable(recipient);
    return;
  }
  isAvailable(recipient);
}

function takeCall(name) {
  console.log(`З'єднуємо з ${name}, очікуйте...`);
}

function activateAnsweringMachine(name) {
  console.log(`Абонент ${name} недоступний, залиште повідомлення.`);
}

processCall("Roman", takeCall, activateAnsweringMachine);

console.log("=========Abstraction=======");

function repeatLog(n) {
  for (let i = 0; i < n; i += 1) {
    console.log(i);
  }
}

repeatLog(6);

console.log("=========AbstractionV2=======");

function printValue(value) {
  console.log(value);
}

function prettyPrint(value) {
  console.log("Logging value: ", value);
}

prettyPrint(4);

function repeat(n, action) {
  for (let i = 0; i < n; i += 1) {
    action(i);
  }
}

repeat(4, printValue);
repeat(4, prettyPrint);
