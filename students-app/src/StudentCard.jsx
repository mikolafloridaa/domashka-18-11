function StudentCard({ name, age, course }) {
    return (
      <article>
        <h2>{name}</h2>
        <p>Вік: {age}</p>
        <p>Курс: {course}</p>
      </article>
    );
  }
  
  export default StudentCard;