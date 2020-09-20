export const drinkApi = 'https://www.thecocktaildb.com/api/json/v1/1/';
const drinkCategories = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
const drinksRecipes = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const drinksByCategory = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=';
const randomDrink = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

const fetchData = (api) =>
  fetch(api).then((response) =>
    response.json().then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))),
  );

export const fetchDrinksCategories = () => fetchData(drinkCategories);
export const fetchDrinks = (category = '') => {
  if (category === '') {
    return fetchData(`${drinksRecipes}`);
  }
  return fetchData(`${drinksByCategory}${category}`);
};
export const getRandomDrink = () => fetchData(randomDrink);
