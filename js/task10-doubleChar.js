function doubleChar(str) {
  let string = "";
  for (let i = 0; i < str.length; i += 1) {
    string += str[i] + str[i];
  }
  return string;
}

console.log(doubleChar("hello"));
