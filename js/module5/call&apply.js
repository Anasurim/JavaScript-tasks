function greetGuest(greeting) {
  console.log(`${greeting}, ${this.username}.`);
}

const mango = {
  username: "Манго",
};

const poly = {
  username: "Полі",
};

greetGuest.call(mango, "Welcome");
greetGuest.call(poly, "Go away");

greetGuest.apply(poly, ["Who cares"]);

console.log("=============bind===============");

function greet(clientName) {
  return `${clientName}, ласкаво просимо в «${this.service}».`;
}

const steam = {
  service: "Steam",
};

const steamGreeter = greet.bind(steam);
console.log(steamGreeter("Манго"));

const gmail = {
  service: "Gmail",
};

const gmailGreeter = greet.bind(gmail);
console.log(gmailGreeter("Полі"));
