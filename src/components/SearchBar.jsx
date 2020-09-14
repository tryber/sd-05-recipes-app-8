import React, { useContext } from 'react';
import { RecipesContext } from '../context/RecipesContext';
import { URL_COCKTAILS, URL_MEALS } from './Filter/getFilterAPI';
import { getRecipesDrinks, getRecipesMeal } from './Filter/filterAPI';

const setFilter = (
  URL, Btn, getRecipes, inputText, setState,
) => {
  if (Btn === 'ingredient') {
    Promise.resolve(getRecipes(URL[0], inputText)
      .then((data) => setState(data)));
  }
  if (Btn === 'name') {
    Promise.resolve(getRecipes(URL[0], inputText)
      .then((data) => setState(data)));
  }
  if (Btn === 'first-letter') {
    return inputText.length !== 1 ? alert('Sua busca deve conter somente 1 (um) caracter') :
      Promise.resolve(getRecipes(URL[0], inputText)
        .then((data) => setState(data)));
  }
}

const SearchBar = () => {
  const {
    setSearchBarInput, setTypeBtn, typeBtn, searchBarInput, setFilterRecipes, typeRecipe
  } = useContext(RecipesContext);
  return (
    <section>
      <input
        data-testid="search-input"
        type="text"
        placeholder="Buscar Receita"
        onChange={(e) => setSearchBarInput(e.target.value)}
      />
      <div>
        <input
          name="search"
          type="radio"
          data-testid="ingredient-search-radio"
          value="ingredient"
          onClick={(e) => setTypeBtn(e.target.value)}
        />
        <label htmlFor="search">Ingredientes</label>
        <input
          name="search"
          type="radio"
          data-testid="name-search-radio"
          value="name"
          onClick={(e) => setTypeBtn(e.target.value)}
        />
        <label htmlFor="search">Nome</label>
        <input
          name="search"
          type="radio"
          data-testid="first-letter-search-radio"
          value="first-letter"
          onClick={(e) => setTypeBtn(e.target.value)}
        />
        <label htmlFor="search">Primeira Letra</label>
      </div>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={() => {
          return typeRecipe === 'comidas' ? setFilter(
            URL_MEALS, typeBtn, getRecipesMeal, searchBarInput, setFilterRecipes,
          ) :
            setFilter(
              URL_COCKTAILS, typeBtn, getRecipesDrinks, searchBarInput, setFilterRecipes,
            );
        }}
      >
        Buscar
      </button>
    </section>
  );
};

export default SearchBar;
