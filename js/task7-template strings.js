function makeMessage(name, price) {
  console.log(`You picked ${name}, price per item is ${price} credits`);
}

makeMessage("Boris", 34);

function calculateTotalPrice(orderedeQuantity, pricePerItem) {
  return orderedeQuantity * pricePerItem;
}

console.log(calculateTotalPrice(5, 560));

function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
  const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
  return message;
}

console.log(makeOrderMessage(5, 490, 25));
