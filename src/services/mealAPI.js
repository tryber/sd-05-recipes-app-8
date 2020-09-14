export const mealApi = 'https://www.themealdb.com/api/json/v1/1/';
const mealCategories =
  'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
const mealsRecipes = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

const fetchData = (api) =>
  fetch(api).then((response) =>
    response.json().then((json) => (
      response.ok ? Promise.resolve(json) : Promise.reject(json)
    )),
  );

export const fetchCategories = () => fetchData(mealCategories);
export const fetchMeals = (category='') => fetchData(`${mealsRecipes}${category}`)
