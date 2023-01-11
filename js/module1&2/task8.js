let counter = 0;

while (counter < 10) {
  console.log("counter: ", counter);
  counter += 1;
}

let clientCounter = 18;
const maxClients = 25;

while (clientCounter < maxClients) {
  console.log(clientCounter);
  clientCounter += 1;
}

let password = "";

// do {
//   password = prompt("Type password min 4 symbols", "");
// } while (password.length < 5);
// console.log("Typed password: ", password);

// for========================

// for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
// }

const target = 3;
let sum = 0;
for (let j = 0; j <= target; j += 1) {
  sum += j;
}

console.log(sum);

const max = 10;
for (let k = 0; k < max; k += 1) {
  console.log(`${max}%${k} = `, max % k);
}

// break

for (let i = 0; i <= 5; i += 1) {
  console.log(i);

  if (i === 3) {
    console.log("Number 3 found, breaking the reverse");
    break;
  }
}
console.log("After reverse log");

// continue

const number = 10;

for (let ik = 0; ik < number; ik += 1) {
  if (ik % 2 === 0) {
    continue;
  }
  console.log("Neparmoe i: ", ik);
}
