import { useState } from "react";

function Counter() {
  const [visits, setVisits] = useState(0);

  return (
    <section>
      <p>Відвідувань: {visits}</p>
      <button type="button" onClick={() => setVisits(visits + 1)}>
        Був на занятті
      </button>
      <button type="button" onClick={() => setVisits(0)}>
  Скинути
</button>
    </section>
  );
}

export default Counter;