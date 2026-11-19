const API_URL =
  "https://uselessfacts.jsph.pl/api/v2/facts/random?language=en";

const button = document.getElementById("getFactBtn");
const factText = document.getElementById("factText");

async function loadFact() {
    factText.textContent = "Завантаження...";
    try {
    const response = await fetch(API_URL);
  const data = await response.json();
  factText.textContent = data.text;
} catch {
    factText.textContent =
      "Не вдалося отримати факт. Перевірте інтернет або спробуйте пізніше.";
  }
}

button.addEventListener("click", () => {
  loadFact();
});

