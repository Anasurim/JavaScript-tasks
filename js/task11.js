// const clients = ["Poly", "Roman", "Nelya"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

const clients = ["Poly", "Roman", "Nelya"];

// for (const client of clients) {
//   console.log(client);
// }

const string = "Javascript";
for (const character of string) {
  console.log(character);
}

const nameToFind = "Roman";
let message = "Client was not found in Database";

for (const client of clients) {
  if (client === nameToFind) {
    message = "Client was found";

    break;
  }
}
console.log(message);

const numbers = [1, 2, 15, 6, 7, 8, 9, 23, 45, 76, 14];
const threshold = 15;

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < threshold) {
    continue;
  }
  console.log(`Numbers are bigger than ${threshold}: ${numbers[i]}`);
}
