// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
// }

// const roman = new User("Roman", "abracadbra@fri.com");
// console.log(roman);

// const natali = new User("Nataliia", "ascdf@dsf.com");
// console.log(natali);

// console.log(User);

console.log("===============Object of params============");

class User {
  name;
  #email;
  constructor({ name, email }) {
    this.name = name;
    this.#email = email;
  }

  // methods of class

  //   getName() {
  //     return this.name;
  //   }

  //   getEmail() {
  //     return this.#email;
  //   }

  //   changeName(newName) {
  //     this.name = newName;
  //   }

  //   changeEmail(newEmail) {
  //     this.#email = newEmail;
  //   }

  get name() {
    return this.name;
  }

  set name(newName) {
    return (this.name = newName);
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    return (this.#email = newEmail);
  }
}

const roman = new User({
  name: "Roman",
  email: "abracadbra@fri.com",
});

console.log(roman);
console.log(roman.name);
// console.log(roman.#email); private identifier
// console.log(roman.getName());
// console.log(roman.getEmail());

// roman.changeEmail("fujsdhf@dasf.com");
// console.log(roman);

console.log("==============get and set============");

console.log(roman.name);
console.log(roman.email);

roman.name = "Romeo";
roman.email = "romeo@good.de";

console.log(roman);
