const students = [
  { name: "Манго", courses: ["математика", "фізика"] },
  { name: "Полі", courses: ["інформатика", "математика"] },
  { name: "Ківі", courses: ["фізика", "біологія"] },
];

const allCourses = students.flatMap((student) => student.courses);

console.log(allCourses);

const uniqueCourses = allCourses.filter(
  (course, index, array) => array.indexOf(course) === index
);

console.log(uniqueCourses);

console.log("=======Object array=========");

const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const studentsSuccess = [
  { name: "Манго", score: 83 },
  { name: "Полі", score: 59 },
  { name: "Аякс", score: 37 },
  { name: "Ківі", score: 94 },
  { name: "Х'юстон", score: 64 },
];

const bestStudents = studentsSuccess.filter(
  (student) => student.score >= HIGH_SCORE
);

const worthStudents = studentsSuccess.filter(
  (student) => student.score <= LOW_SCORE
);

const average = studentsSuccess.filter(
  ({ score }) => score >= LOW_SCORE && score <= HIGH_SCORE
);

console.log(bestStudents);

console.log(worthStudents);

console.log(average);
