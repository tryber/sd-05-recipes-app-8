export const mealApi = 'https://www.themealdb.com/api/json/v1/1/';
const mealCategories = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
const mealAreas = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
const mealsRecipes = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const mealsByCategory = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
const randomMeal = 'https://www.themealdb.com/api/json/v1/1/random.php';
const mealByArea = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=';
const ingredientList = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
const mealByIngredient = 'https://www.themealdb.com/api/json/v1/1/filter.php?i';

export const mealIngSRC = (strIngredient) => `https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png`;

const fetchData = (api) =>
  fetch(api).then((response) =>
    response.json().then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))),
  );

export const fetchMealCategories = () => fetchData(mealCategories);
export const fetchMeals = (category = '') => {
  if (category === '') {
    return fetchData(`${mealsRecipes}${category}`);
  }
  return fetchData(`${mealsByCategory}${category}`);
};
export const fetchRandomMeal = () => fetchData(randomMeal);
export const fetchMealAreas = () => fetchData(mealAreas);
export const fetchMealsByArea = (area) => fetchData(`${mealByArea}${area}`);
export const fetchMealsByIngredient = (area) => fetchData(`${mealByIngredient}${area}`);
export const fetchMealIngredients = () => fetchData(ingredientList);
