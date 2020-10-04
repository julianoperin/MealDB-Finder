const search = document.getElementById("search");
const submit = document.getElementById("submit");
const random = document.getElementById("random");
const resultHeading = document.getElementById("result-heading");
const mealsEl = document.getElementById("meals");
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
        } else {
          mealsEl.innerHTML = data.meals
            .map(
              (meal) => `
                <div class="meal">
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
                    <div class="meal-info" data-mealID="${meal.idMeal}"></div>
                    <h3>${meal.strMeal}</h3>
                </div>
            `
            )
            .join("");
        }
      });
    // Clear search text
    search.value = "";
  } else {
    alert("Please enter a search");
  }

  console.log(term);
}

// Event listeners
submit.addEventListener("submit", searchMeal);
