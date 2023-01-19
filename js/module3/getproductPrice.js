const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  for (const product of products) {
    if (product.name === productName) {
      return product.price;
    }
  }
  return null;
}

// console.log(getProductPrice("Rada"));

// =============!!!!!!!DONT FORGET!!!!!!!!!=========
function getAllPropValues(propName) {
  let valueArr = [];
  for (const product of products) {
    const keys = Object.keys(product);
    if (keys.includes(propName)) {
      valueArr.push(product[propName]);
    }
  }
  return valueArr;
}

console.log(getAllPropValues("name"));
