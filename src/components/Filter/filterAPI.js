const INGREDIENT_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?i='
const NAME_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
const FIRST_LETTER_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?f='

export async function getIngredient(ingredient) {
  const response = await fetch(INGREDIENT_URL + ingredient)
  return await (
    response
      .json()
      .then((json) => (response.ok ? Promise.resolve(json.meals) : Promise.reject(json)))
  )
};

export async function getName(name) {
  const response = await fetch(NAME_URL + name)
  return await (
    response
      .json()
      .then((json) => (response.ok ? Promise.resolve(json.meals) : Promise.reject(json)))
  )
};

export async function getFirstLetter(firstLetter) {
  const response = await fetch(FIRST_LETTER_URL + firstLetter)
  return await (
    response
      .json()
      .then((json) => (response.ok ? Promise.resolve(json.meals) : Promise.reject(json)))
  )
};
