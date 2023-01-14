function findLongestWord(string) {
  const arrayFromString = string.split(" ");

  let longestWord = arrayFromString[0];
  for (let index = 0; index < arrayFromString.length; index += 1) {
    if (arrayFromString[index].length > longestWord.length) {
      longestWord = arrayFromString[index];
    }
  }
  return longestWord;
}
console.log(findLongestWord("Roman is the greatest but notverypopular"));
