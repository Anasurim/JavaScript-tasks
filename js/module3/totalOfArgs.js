function add(...args) {
  let total = 0;

  for (const arg of args) {
    total += arg;
  }

  return total;
}

console.log(add(3, 55, 4, 5, 6));
