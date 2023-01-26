console.log("========own order integers sort===========");

const scores = [61, 19, 74, 35, 92, 56];
const sortedScoresAscending = [...scores].sort((a, b) => a - b);

const sortedScoresDescending = [...scores].sort((a, b) => b - a);

console.log(sortedScoresAscending);

console.log(sortedScoresDescending);

console.log("========own order strings sort===========");

const students = ["Віка", "Андрій", "Олег", "Юля", "Борис", "Катя"];

const studentsCopy = [...students];

// alphabet order
const studentsInAlphabetOrder = studentsCopy.sort((a, b) => a.localeCompare(b));

console.log(studentsInAlphabetOrder);
// reversed order
const studentsReversedOrder = studentsCopy.sort((a, b) => b.localeCompare(a));

console.log(studentsReversedOrder);

console.log("========object sort===========");

const studentsToSort = [
  { name: "Манго", score: 83 },
  { name: "Полі", score: 59 },
  { name: "Аякс", score: 37 },
  { name: "Ківі", score: 94 },
];

const ascendingScoreOrder = studentsToSort.sort(
  (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
);

console.log(ascendingScoreOrder);

const alphabetNameOrder = studentsToSort.sort((firstStudent, secondStudent) =>
  firstStudent.name.localeCompare(secondStudent.name)
);

console.log(alphabetNameOrder);
