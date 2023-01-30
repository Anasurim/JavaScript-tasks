const customer = {
  firstName: "Jacob",
  lastName: "Mercer",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

function makeMessage(callback) {
  // callback() - call getFullName without object
  console.log(`Обробляємо заявку від ${callback()}.`);
}

// makeMessage(customer.getFullName); // error, caus undefined is not object
makeMessage(customer.getFullName.bind(customer));
