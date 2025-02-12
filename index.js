// 1. Adding pass/fail property
const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 75 },
];

const updatedStudents = students.map((student) => ({
  ...student,
  passed: student.score >= 60,
}));

console.log(updatedStudents);

// 2. Converting durations to minutes
const songs = [
  { title: "Bohemian Rhapsody", duration: 367 },
  { title: "Hotel California", duration: 420 },
  { title: "Stairway to Heaven", duration: 482 },
];

const formattedSongs = songs.map((song) => ({
  ...song,
  duration: `${Math.floor(song.duration / 60)}:${song.duration % 60}`,
}));

console.log(formattedSongs);

// 3. Calculating annual income
const employees = [
  { name: "Alice", salary: 50000 },
  { name: "Bob", salary: 60000 },
  { name: "Charlie", salary: 70000 },
];

const annualIncomeEmployees = employees.map((employee) => ({
  ...employee,
  annualIncome: employee.salary * 12,
}));

console.log(annualIncomeEmployees);

// 4. Classifying students as "adult" or "minor"
const newStudents = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 25 },
];

const classifiedStudents = newStudents.map((student) => ({
  ...student,
  classification: student.age >= 18 ? "adult" : "minor",
}));

console.log(classifiedStudents);

// 5. Adding "$" to salaries
const salaryEmployees = [
  { name: "Emily", salary: 60000 },
  { name: "David", salary: 45000 },
  { name: "Grace", salary: 75000 },
];

const formattedSalaries = salaryEmployees.map((employee) => ({
  ...employee,
  salary: `$${employee.salary}`,
}));

console.log(formattedSalaries);

// 6. Labeling products as "expensive" or "affordable"
const products = [
  { name: "Laptop", price: 1200 },
  { name: "Headphones", price: 50 },
  { name: "Smartphone", price: 800 },
];

const labeledProducts = products.map((product) => ({
  name: product.name,
  label: product.price >= 100 ? "expensive" : "affordable",
}));

console.log(labeledProducts);

// 7. Categorizing books as "modern" or "classic"
const books = [
  { title: "The Catcher in the Rye", year: 1951 },
  { title: "Harry Potter and the Sorcerer's Stone", year: 1997 },
  { title: "The Hunger Games", year: 2008 },
];

const categorizedBooks = books.map((book) => ({
  title: book.title,
  category: book.year >= 2000 ? "modern" : "classic",
}));

console.log(categorizedBooks);

// 8. Calculating annual income for developers
const developers = [
  { name: "John", hourlyRate: 40, hoursPerWeek: 30 },
  { name: "Lisa", hourlyRate: 50, hoursPerWeek: 35 },
  { name: "Mike", hourlyRate: 45, hoursPerWeek: 40 },
];

const developerIncome = developers.map((dev) => ({
  name: dev.name,
  annualIncome: dev.hourlyRate * dev.hoursPerWeek * 50,
}));

console.log(developerIncome);

// 9. Calculating annual income for sales representatives
const salesReps = [
  { name: "David", monthlyCommission: 8000 },
  { name: "Helen", monthlyCommission: 10000 },
  { name: "Ivan", monthlyCommission: 6000 },
];

const salesIncome = salesReps.map((rep) => ({
  name: rep.name,
  annualIncome: 50000 + rep.monthlyCommission * 12,
}));

console.log(salesIncome);

// 10. Converting scores to grades
const studentGrades = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 60 },
  { name: "Charlie", score: 92 },
];

const gradedStudents = studentGrades.map((student) => ({
  name: student.name,
  grade:
    student.score >= 90
      ? "A"
      : student.score >= 80
      ? "B"
      : student.score >= 70
      ? "C"
      : student.score >= 60
      ? "D"
      : "F",
}));

console.log(gradedStudents);
