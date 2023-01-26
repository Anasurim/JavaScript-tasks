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
