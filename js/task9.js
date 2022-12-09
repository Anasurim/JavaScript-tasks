// for (let i = 100; i > 2; i -= 2) {
//   console.log(i);
// }

function numberToString(num) {
  // Return a string of the number here!

  return num.toString();
}

console.log(typeof numberToString(5));

function checkedPassword(password) {
  const ADMIN_PASS = "1111";
  let message;

  if (password === null) {
    message = "cancelled!";
  } else if (password === ADMIN_PASS) {
    message = "welcome";
  } else {
    message = "access denied";
  }

  console.log(message);
}
let x = checkedPassword("1111");
console.log(x);

// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//   if (message.length >= maxLength) {
//     result = message.slice(message, maxLength) + "...";
//   } else {
//     result = message;
//   }
//   /// Change code above this line
//   return result;
// }

// let b = formatMessage("hello, world!", 22);
// console.log(b);

function checkForSpam(message) {
  let result;
  // Change code below this line
  // result = message.toLowerCase();
  if (message.includes("spam") || message.includes("sale")) {
    result = true;
  } else {
    result = false;
  }
  // Change code above this line
  return result;
}
const y = checkForSpam("[SPAM] dhdhdhd");
console.log(y);
