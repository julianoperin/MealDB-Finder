const search = document.getElementById("search");
const submit = document.getElementById("submit");
const random = document.getElementById("random");
const mealsEl = document.getElementById("meals");
const resultHeading = document.getElementById("result-heading");
const single_mealEl = document.getElementById("single-meal");

// Search Meal and fetch
function searchMeal(e) {
  e.preventDefault();

  // Clear single meal
  single_mealEl.innerHTML = "";

  // Get search term
  const term = search.value;

  // Check for empty
  if (term.trim()) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        resultHeading.innerHTML = `<h2>Search results for '${term}'</h2>`;

        if (data.meals === null) {
          resultHeading.innerHTML = `<h2> There are no such results. Try again! </h2>`;
        }
      });
  } else {
    alert("Please enter a search");
  }

  console.log(term);
}

// Event listeners
submit.addEventListener("submit", searchMeal);
