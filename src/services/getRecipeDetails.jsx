export const mealFilterIngredient = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=';
export const mealFilterName = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
export const mealFilterFL = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';
export const drinkFilterIngredient = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?i=';
export const drinkFilterName = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=';
export const drinkFilterFL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const getRecipeDetails = (type, id) => {
  const RECIPE_API = `https://www.the${type}db.com/api/json/v1/1/lookup.php?i=${id}`;
  return fetch(RECIPE_API).then((response) =>
    response.json().then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))),
  );
};

const fetchRecipes = (type, suffix) => {
  const RECIPE_PATH = `https://www.the${type}db.com/api/json/v1/1/${suffix}`;
  console.log(RECIPE_PATH);
  return fetch(RECIPE_PATH).then((response) =>
    response.json().then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))),
  );
};

const fetchFilter = (api, filter) =>
  fetch(`${api}${filter}`).then((response) =>
    response.json().then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))),
  );

const setFilterHeader = (recipe, btn, setState, inputText) => {
  console.log(recipe, btn, setState, inputText);
};
// const setFilterHeader = (recipe, btn, setState, inputText) => {
//   const type = ['comidas', 'bebidas'];
//   const filter = ['ingredient', 'name', 'first-letter'];
// if (recipe === type[0]) {
//   switch (btn) {
//     case btn === filter[0]:
//       return Promise.resolve(
//         fetchFilter(mealFilterIngredient, inputText).then((data) => setState([data])),
//       );
//     case btn === filter[1]:
//       return Promise.resolve(
//         fetchFilter(mealFilterName, inputText).then((data) => setState([data])),
//       );
//     case btn === filter[2]:
//       inputText.length !== 1
//         ? alert('Sua busca deve conter somente 1 (um) caracter')
//         : Promise.resolve(fetchFilter(mealFilterFL, inputText).then((data) => setState([data])));
//   }
// }
// if (recipe === type[1]) {
//   switch (btn) {
//     case btn === filter[0]:
//       return Promise.resolve(
//         fetchFilter(drinkFilterIngredient, inputText).then((data) => setState([data])),
//       );
//     case btn === filter[1]:
//       return Promise.resolve(
//         fetchFilter(drinkFilterName, inputText).then((data) => setState([data])),
//       );
//     case btn === filter[2]:
//       inputText.length !== 1
//         ? alert('Sua busca deve conter somente 1 (um) caracter')
//         : Promise.resolve(fetchFilter(drinkFilterFL, inputText)
// .then((data) => setState([data])));
//   }
// }
// };

export { getRecipeDetails, fetchRecipes, fetchFilter, setFilterHeader };
