// ========Task 1

//Напишіть код, який запитуватиме
//логін за допомогою prompt і логувати результат
//в консоль браузера

//Якщо відвідувач вводить "Адмін",
//то prompt запитує пароль.
//Якщо нічого не ввели або натиснута клавіша Esc
//Вивести стороку "Скасовано"
// Інакше вивести рядок "Я вас не знаю"

//Пароль перевіряти так:
//Якщо введено пароль "Я головний",
//то вивести рядок "Добрий день!"
//інакше виводити рядок "Невірний пароль!"

const checkLogin = function () {
  //логін за допомогою prompt

  const login = prompt("Введіть логін: ");

  if (login === "Адмін") {
    const password = prompt("Введіть пароль: ");

    if (password === "Я головний") {
      console.log("Добрий день!");
    } else {
      console.log("Невірний пароль!");
    }
  } else if (!login) {
    console.log("Скасовано");
  } else {
    console.log("Я вас не знаю");
  }
};

// checkLogin();

// ========== task 2

function min(a, b) {
  const result = Math.min(a, b);
  return result;
}
console.log(min(4, 12));
