const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

book.pageCount = 836;
book.originalLanguage = "en";
book.translations = ["ua", "ru"];

console.log(book);

// ===========

const bookShelf = {
  books: ["The Last Kingdom"],
  getBooks() {
    return this.books;
  },
  addBook(bookName) {
    this.books.push(bookName);
  },
  removeBook(bookName) {
    const bookIndex = this.books.indexOf(bookName);
    this.books.splice(bookIndex, 1);
  },
};

console.log(bookShelf.getBooks());
bookShelf.addBook("The Mist");
bookShelf.addBook("Dream Guardian");
console.log(bookShelf.getBooks());
bookShelf.removeBook("The Mist");
console.log(bookShelf.getBooks());

// ==============

const newBook = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};
const keys = Object.keys(newBook);
for (const key of keys) {
  console.log(key);

  console.log(newBook[key]);
}
const values = Object.values(newBook);
console.log(values);

// ===========

const goods = {
  apples: 6,
  grapes: 3,
  bread: 4,
  cheese: 7,
};
const goodsValues = Object.values(goods);
console.log(goodsValues);
let total = 0;

for (const value of goodsValues) {
  total += value;
}

console.log(total);
