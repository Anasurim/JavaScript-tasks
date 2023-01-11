// slice

const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.slice(1, 3));

console.log(clients.slice());

console.log(clients.slice(1));

console.log(clients.slice(-1));

// splice

const scores = [1, 2, 3, 4, 5];
const deletedScores = scores.splice(0, 3);
console.log(scores);
console.log(deletedScores);

const colors = ["red", "blue", "green"];
colors.splice(0, 0, "purple");
console.log(colors);

// concat

const clientsNew = ["Mango", "Ajax", "Poly", "Kiwi"];
const clientsOld = ["red", "blue", "green"];

const allClients = clientsNew.concat(clientsOld);
console.log(allClients);

const oldFirst = clientsOld.concat(clientsNew);
console.log(oldFirst);
