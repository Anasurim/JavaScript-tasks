class StringBuilder {
  constructor(value) {
    this.value = value;
  }

  getValue() {
    return this.value;
  }

  padStart(value) {
    this.value = value + this.value;
    return this.value;
  }

  padEnd(value) {
    this.value += value;
    return this.value;
  }

  padBoth(value) {
    this.value = value + this.value + value;
    return this.value;
  }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."

builder.padStart("^");
console.log(builder.getValue()); // "^."

builder.padEnd("^");
console.log(builder.getValue()); // "^.^"

builder.padBoth("=");
console.log(builder.getValue());
