const textCounter = document.querySelector(".textCounter");
const wordsCount = document.querySelector(".wordsCount");
const charsCount = document.querySelector(".charsCount");
const sentenceCount = document.querySelector(".sentenceCount");
const moonBtn = document.querySelector("#moon"); // Selecting the moon icon

// Function to apply the theme from localStorage
function applyTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    moonBtn.classList.remove("ri-moon-fill");
    moonBtn.classList.add("ri-sun-fill");
  } else {
    document.body.classList.remove("light-mode");
    moonBtn.classList.remove("ri-sun-fill");
    moonBtn.classList.add("ri-moon-fill");
  }
}

// Apply theme when the page loads
applyTheme();

moonBtn.addEventListener("click", () => {
  // Toggle between dark and light mode
  document.body.classList.toggle("light-mode");

  // Check if light mode is active
  const isLightMode = document.body.classList.contains("light-mode");

  // Toggle the moon and sun icons
  if (isLightMode) {
    moonBtn.classList.remove("ri-moon-fill");
    moonBtn.classList.add("ri-sun-fill");
    localStorage.setItem("theme", "light"); // Save to localStorage
  } else {
    moonBtn.classList.remove("ri-sun-fill");
    moonBtn.classList.add("ri-moon-fill");
    localStorage.setItem("theme", "dark"); // Save to localStorage
  }
});

textCounter.addEventListener("input", () => {
  const chars = textCounter.value;
  charsCount.innerText = chars.length;

  const words = textCounter.value
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0);
  wordsCount.innerText = words.length;

  const sentences = textCounter.value
    .trim()
    .split(/(?<=[.!?])\s+/)
    .filter((sentence) => sentence.length > 0);
  sentenceCount.innerText = sentences.length;
});
