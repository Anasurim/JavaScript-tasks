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
let message;

for (const client of clients) {
  if (client === nameToFind) {
    message = "Client was found";

    break;
  }
  message = "Client was not found";
}
console.log(message);
