function findMatches(array, ...args) {
  const matches = [];

  for (const arg of array) {
    if (args.includes(arg)) {
      matches.push(arg);
    }
  }

  return matches;
}

console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
