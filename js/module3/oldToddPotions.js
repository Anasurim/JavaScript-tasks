const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  removePotion(potionName) {
    const potionIndex = this.potions.indexOf(potionName);
    this.potions.splice(potionIndex, 1);
  },

  updatePotionName(oldName, newName) {
    const potionnIndex = this.potions.indexOf(oldName);
    this.potions.splice(potionnIndex, 1, newName);
  },
};

atTheOldToad.removePotion("Speed potion");
console.log(atTheOldToad.potions);

atTheOldToad.updatePotionName("Stone skin", "Invisibility");
console.log(atTheOldToad.potions);
