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
