const clients = ["Roman", "Nataliia", "Nelya"];

for (let i = 0; i < clients.length; i += 1) {
  console.log(clients[i]);
}

for (const client of clients) {
  console.log(client);
}

const string = "What a fuck";
for (const character of string) {
  console.log(character);
}

let a = 5;
let b = a;
console.log(a);
console.log(b);

a = 10;
console.log(a);
console.log(b);
