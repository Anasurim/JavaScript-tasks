const name = "Roman";
console.log(name.split(""));
console.log(name.split(" "));

const message = "Roman likes Javascript";
console.log(message.split(" "));
console.log(message.split("s"));

const words = ["Roman", "is", "cool"];
console.log(words.join(""));
console.log(words.join(" "));
console.log(words.join("-"));

const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.indexOf("Kiwi"));
console.log(clients.indexOf("Kuzt"));

console.log(clients.includes("Kiwi"));
console.log(clients.includes("Kiss"));

const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
const fruit = "cherry";
const hasFruit = redFruits.includes(fruit);

if (hasFruit) {
  console.log(`${fruit} is red fruit`);
} else {
  console.log(`${fruit} is not a red fruit`);
}
