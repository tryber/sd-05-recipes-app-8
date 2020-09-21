import { fetchRecipes } from './getRecipeDetails'

// variável que recebe valor conforme muda estado do tipo de filtro
export let typeSearch;

export const ingredientFilter = (typeRecipe, text) => {
  typeRecipe === 'comidas' ?
    `filter.php?i=${text}` :
    `search.php?i=${text}`
};

export const nameFilter = (typeRecipe, text) => {
  typeRecipe === 'comidas' ?
    `search.php?s=${text}` :
    `search.php?f=${text}`;
};

export const firstLetterFilter = (typeRecipe, text) => {
  typeRecipe === 'comidas' ?
    `search.php?f=${text}` :
    `search.php?s=${text}`;
};

export function checkType(filterType, searchBarInput) {
  switch (filterType) {
    case filterType === 'ingredient':
      typeSearch === ingredientFilter(searchBarInput);
    case filterType === 'name':
      typeSearch === nameFilter(searchBarInput);
    case filterType === 'first-letter':
      typeSearch === firstLetterFilter(searchBarInput);
    default:
      typeSearch;
  }
}

export const fetchByFilter = (setState, typeRecipe) => {
  return typeRecipe === 'comida' ?
    fetchRecipes('meal', typeSearch)
      .then(({ meals }) => setState([meals])) :
    fetchRecipes('cocktails', typeSearch)
      .then(({ cocktails }) => setState([cocktails]));
}
