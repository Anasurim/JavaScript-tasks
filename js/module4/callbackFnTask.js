function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;

  //   orderedItems.forEach(function (item) {
  //     totalPrice += item;
  //   });

  // ====or
  orderedItems.forEach((item) => {
    totalPrice += item;
  });

  return totalPrice;
}

console.log(calculateTotalPrice([3, 4, 5, 67, 7]));
