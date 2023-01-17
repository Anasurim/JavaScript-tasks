function countProps(object) {
  let propCount = 0;

  const keyLength = Object.keys(object).length;
  propCount = keyLength;
  return propCount;
}

console.log(countProps({ book: "bullsht", author: "asshole" }));
