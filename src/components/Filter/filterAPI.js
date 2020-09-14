export const INGREDIENT_URL_MEALS = 'https://www.themealdb.com/api/json/v1/1/filter.php?i='
export const NAME_URL_MEALS = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
export const FIRST_LETTER_URL_MEALS = 'https://www.themealdb.com/api/json/v1/1/search.php?f='

export const INGREDIENT_URL_COCKTAILS = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?i='
export const FIRST_LETTER_URL_COCKTAILS = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f='
export const NAME_URL_COCKTAILS = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

export async function getRecipesMeal(URL, ingredient) {
  const response = await fetch(URL + ingredient)
  return await (
    response
      .json()
      .then((json) => (response.ok ? Promise.resolve(json.meals) : Promise.reject(json)))
  )
};

export async function getRecipesDrinks(URL, ingredient) {
  const response = await fetch(URL + ingredient)
  return await (
    response
      .json()
      .then((json) => (response.ok ? Promise.resolve(json.drinks) : Promise.reject(json)))
  )
};