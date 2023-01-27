const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const ByAuthorName = [...books].sort((firstAuthor, secondAuthor) =>
  firstAuthor.author.localeCompare(secondAuthor.author)
);

const sortedByAuthorName = ByAuthorName.map(({ title }) => title);

// console.log(sortedByAuthorName);

console.table(books);
// const sortedByReversedAuthorName = books.sort((firstAuthor, secondAuthor) =>
//   secondAuthor.author.localeCompare(firstAuthor.author)
// );

const sortedByAscendingRating = [...books]
  .sort((a, b) => a.rating - b.rating)
  .map(({ title }) => title);

// console.log(sortedByAscendingRating);

const sortedByDescentingRating = [...books]
  .sort((a, b) => b.rating - a.rating)
  .map(({ title }) => title);

// console.log(sortedByDescentingRating);

console.log("==============sort + filter + map===========");

const MIN_BOOK_RATING = 8;

const names = books
  .filter((rate) => rate.rating > MIN_BOOK_RATING)
  .map(({ author }) => author)
  .sort((a, b) => a.localeCompare(b));
//   .map(({ author }) => author)
//   .sort((a, b) => a.author.localeCompare(b.author));

console.log(names);
