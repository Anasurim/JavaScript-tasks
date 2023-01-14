function splitMessage(message, delimiter) {
  let words;
  words = message.split(delimiter);
  return words;
}

console.log(splitMessage("The cruel world", " "));

// =============

function slugify(title) {
  // Change code below this line
  const normalizedTitle = title.toLowerCase();
  const stepOne = normalizedTitle.split(" ");
  const slug = stepOne.join("-");
  return slug;
}

console.log(slugify("Roman is the best"));


// ===============

