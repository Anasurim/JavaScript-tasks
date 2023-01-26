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
