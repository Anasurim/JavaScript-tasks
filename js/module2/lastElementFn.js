function getExtremeElements(array) {
  for (let i of array) {
    const lastElement = array.length - 1;
    i = console.log([array[0], array[lastElement]]);
    return i;
  }
}

getExtremeElements(["Earth", "Mars", "Venus", "Jupiter"]);
