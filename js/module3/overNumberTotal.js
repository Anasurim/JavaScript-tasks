function addOverNum(firstArg, ...args) {
  let total = 0;

  for (const arg of args) {
    if (arg > firstArg) {
      total += arg;
    }
  }

  return total;
}
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
