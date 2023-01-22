const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],

  getPotions() {
    return this.potions;
  },

  addPotion(newPotion) {
    for (const potion of this.potions) {
      if (potion.name === newPotion.name) {
        return console.log(
          `Error! Potion ${newPotion.name} is already in your inventory!`
        );
      }
    }

    this.potions.push(newPotion);
  },

  removePotion(potionName) {
    for (let index = 0; index < this.potions.length; index += 1) {
      if (potionName === this.potions[index].name) {
        // console.log("found this potion: ", potionName);
        console.log(index);
        return this.potions.splice(index, 1);
      }
    }
    // return console.log(`Potion ${potionName} is not in inventory!`);
  },

  updatePotionName(oldName, newName) {
    for (let index = 0; index < this.potions.length; index += 1) {
      if (oldName === this.potions[index].name) {
        console.log(index);
        this.potions[index].name = newName;
      }
    }

    // return `Potion ${oldName} is not in inventory!`;
  },
};

console.table(atTheOldToad.getPotions());

atTheOldToad.removePotion("Speed potion");

// atTheOldToad.addPotion({ name: "Invisibility", price: 500 });
console.table(atTheOldToad.getPotions());

// atTheOldToad.addPotion({ name: "Invisibility", price: 500 });
// console.table(atTheOldToad.getPotions());

// atTheOldToad.removePotion({ name: "Stone skin" });
// console.table(atTheOldToad.getPotions());

// atTheOldToad.updatePotionName("Dragon breath", "Poly");
// console.table(atTheOldToad.getPotions());
