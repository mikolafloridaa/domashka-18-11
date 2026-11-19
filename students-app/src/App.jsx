import { useState } from "react";
import StudentCard from "./StudentCard.jsx";
import Counter from "./Counter.jsx";
import "./App.css";

const students = [
  { name: "Анна", age: 19, course: 1 },
  { name: "Богдан", age: 20, course: 2 },
  { name: "Катерина", age: 21, course: 3 },
  { name: "Дмитро", age: 22, course: 4 },
];

function App() {
  const [showStudents, setShowStudents] = useState(true);
  const [courseFilter, setCourseFilter] = useState("all");

  const visibleStudents =
    courseFilter === "all"
      ? students
      : students.filter((student) => student.course === Number(courseFilter));

  return (
    <main>
      <h1>Каталог студентів</h1>

      <button type="button" onClick={() => setShowStudents(!showStudents)}>
        {showStudents ? "Приховати студентів" : "Показати студентів"}
      </button>

      <label>
        Курс:{" "}
        <select
          value={courseFilter}
          onChange={(event) => setCourseFilter(event.target.value)}
        >
          <option value="all">Усі</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </label>
      <p>
  Зараз на сторінці:{" "}
  {showStudents ? visibleStudents.length : 0}
</p>

      {showStudents &&
        visibleStudents.map((student) => (
          <StudentCard
            key={student.name}
            name={student.name}
            age={student.age}
            course={student.course}
          />
        ))}

      <Counter />
    </main>
  );
}

export default App;