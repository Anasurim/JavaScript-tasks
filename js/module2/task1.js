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
