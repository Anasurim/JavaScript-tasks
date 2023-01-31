class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(newItem) {
    return this.items.push(newItem);
  }

  removeItem(itemToRemove) {
    for (let index = 0; index < this.items.length; index += 1) {
      if (itemToRemove === this.items[index]) {
        return this.items.splice(index, 1);
      }
    }
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage);

console.log(storage.getItems());

storage.addItem("Droid");

console.log(storage.getItems());

// storage.removeItem("Prolonger");
storage.removeItem("GUGU");
console.log(storage.getItems());
