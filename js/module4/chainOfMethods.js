const students = [
  { name: "Манго", score: 83, courses: ["математика", "фізика"] },
  { name: "Полі", score: 59, courses: ["інформатика", "математика"] },
  { name: "Аякс", score: 37, courses: ["фізика", "біологія"] },
  { name: "Ківі", score: 94, courses: ["література", "інформатика"] },
];
// sorted listname
const names = [...students]
  .sort((firstStudents, secondStudents) =>
    firstStudents.name.localeCompare(secondStudents.name)
  )
  .map((student) => student.name);

console.log(names);

// sorted courses
const uniqueSortedCourses = students

  .flatMap((student) => student.courses)
  .filter((course, index, array) => array.indexOf(course) === index)
  .sort((firstCourse, secondCourse) => firstCourse.localeCompare(secondCourse));

console.log(uniqueSortedCourses);
