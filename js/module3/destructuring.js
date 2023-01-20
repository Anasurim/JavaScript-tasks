const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: false,
  rating: 8.38,
};

// Деструктуризуємо
const {
  title,
  author,
  isPublic,
  rating,
  coverImage = "https://via.placeholder.com/640/480",
} = book;
console.log(coverImage);

const accessType = isPublic ? "публічному" : "закритому";
const message = `Книга ${title} автора ${author} з рейтингом ${rating} знаходиться в ${accessType} доступі.`;
console.log(message);
