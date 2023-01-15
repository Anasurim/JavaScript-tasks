function getCommonElements(array1, array2) {
  const newArray = [];
  for (let index = 0; index < array1.length; index += 1) {
    if (array2.includes(array1[index])) {
      newArray.push(array1[index]);
    }
  }

  return newArray;
}
console.log(getCommonElements([1, 2, 4, 5, 6], [2, 4, 8, 9]));
