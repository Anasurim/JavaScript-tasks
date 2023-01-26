const planets = ["Земля", "Марс", "Венера", "Юпітер"];

const planetToUpperCase = planets.map((planet) => planet.toUpperCase());
console.log(planetToUpperCase);

const planetToLowerCase = planets.map((planet) => planet.toLowerCase());
console.log(planetToLowerCase);

console.log("============");

const students = [
  { name: "Манго", score: 83 },
  { name: "Полі", score: 59 },
  { name: "Аякс", score: 37 },
  { name: "Ківі", score: 94 },
  { name: "Х'юстон", score: 64 },
];

const studentNames = students.map((student) => student.name);
console.log(studentNames);

const studentScores = students.map((student) => student.score);
console.log(studentScores);

const studentInfo = students.map(
  (student) => `Student: ${student.name}, score: ${student.score}`
);
console.log(studentInfo);

console.log("==========boooks task==========");
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
// Change code below this line

const titles = books.map((book) => book.title);
console.log(titles);
