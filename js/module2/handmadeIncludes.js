function includes(array, value) {
  for (let name of array) {
    if (name === value) {
      return true;
    }
  }
  return false;
}
console.log(includes(["Roman", "Nataliia", "Vladimir"], "Roman"));
