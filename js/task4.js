const message = "Mango " + "is " + "happy";
console.log(message);

console.log(1 + "2");
console.log(1 + "2" + 4);
console.log(1 + 2 + "2");

const guestName = "Mango";
const roomNumber = "207";
// const greeting = "Welcome ${guestName}, your room number is ${roomNumber}";
// const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
const greeting = `Welcome ${guestName}, your room is ${roomNumber}`;
console.log(greeting);

console.log(greeting.length);
console.log(greeting.toUpperCase());

const BRAND_NAME = "SAMSUNG";
const userInput = "samSunG";
const normalizedToUpperCaseInput = userInput.toUpperCase();

console.log(userInput);
console.log(userInput === BRAND_NAME);
console.log(normalizedToUpperCaseInput);
console.log(normalizedToUpperCaseInput === BRAND_NAME);

const jsFileName = "script.js";
console.log(jsFileName.endsWith(".css"));

const minifiedJsFile = jsFileName.replace(".js", ".min.js");
console.log(minifiedJsFile);

const cssFileNames = "styles.css, about.css, portfolio.css";
const minifiedCssFile = cssFileNames.replaceAll("css", "min.css");
console.log(minifiedCssFile);

const productName = "Repair Droid";
console.log(productName.slice(0, 4));
console.log(productName.slice(3, 4));
console.log(productName.slice(7, productName.length));
