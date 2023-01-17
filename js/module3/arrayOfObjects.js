const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "На березі спокійних вод",
    author: "Роберт Шеклі",
    rating: 8.51,
  },
  {
    title: "Сон смішної людини",
    author: "Федір Достоєвський",
    rating: 7.75,
  },
];
const bookNames = [];
const bookAuthor = [];
let totalRating = 0;
for (const book of books) {
  console.log(book);

  console.log(book.title);

  console.log(book.author);

  console.log(book.rating);

  bookAuthor.push(book.author);

  bookNames.push(book.title);
  totalRating += book.rating;
}
console.log(bookNames);
console.log(bookAuthor);

const averageRating = (totalRating / books.length).toFixed(2);
console.log(averageRating);

// ======
console.log("================");

function printContacts(string1, string2) {
  const names = string1.split(",");
  const phones = string2.split(",");

  for (const name of names) {
    const index = names.indexOf(name);
    const phone = phones[index];

    console.log(`${name}: ${phone}`);
  }

  // console.log(names);
  // console.log(phones);
}

printContacts("Roman,Nataliia,Wladimir", "0204040505,03003003,00450500560");
