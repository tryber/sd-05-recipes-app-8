export const mealApi = 'https://www.themealdb.com/api/json/v1/1/';
const mealCategories = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
const mealAreas = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
const mealsRecipes = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const mealsByCategory = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
const randomMeal = 'https://www.themealdb.com/api/json/v1/1/random.php';
const mealByArea = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=';

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
export const getRandomMeal = () => fetchData(randomMeal);
export const fetchMealAreas = () => fetchData(mealAreas);
export const fetchMealsByArea = (area) => fetchData(`${mealByArea}${area}`);
