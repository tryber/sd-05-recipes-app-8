import React, { useContext } from 'react';
import { RecipesContext } from '../context/RecipesContext';
import { getIngredient, getFirstLetter, getName } from './Filter/filterAPI';


const SearchBar = () => {
  const { searchBarInput, typeBtn, setSearchBarInput, setTypeBtn, setFilterRecipes } = useContext(RecipesContext);
  // function to check the type of the filter radio button
  const filtro = () => {
    // if the fitler radio button is equal do the string "ingredient", then resolve the promise and use the funcion setFilter to change the filter state
    if (typeBtn === 'ingredient') {
      // getName is a function to request data from "the meal" API endpoint [in this case: ingredient filter]
      Promise.resolve(getIngredient(searchBarInput).then((data) => setFilterRecipes([data])));
    }
    // if the fitler radio button is equal do the string "name", then resolve the promise and use the funcion setFilter to change the filter state
    if (typeBtn === 'name') {
      // getName is a function to request data from "the meal" API endpoint [in this case: name filter]
      Promise.resolve(getName(searchBarInput).then((data) => setFilterRecipes([data])));
    }
    // if the filter radio button is equal do the string "first-letter", then resolve the promise and use the funcion setFilter to change the filter state
    if (typeBtn === 'first-letter') {
      // getName is a function to request data from "the meal" API endpoint [in this case: first letter filter]
      searchBarInput.length !== 1 ? alert('Sua busca deve conter somente 1 (um) caracter') :
        Promise.resolve(getFirstLetter(searchBarInput).then((data) => setFilterRecipes([data])));
    }

  }

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
        <input name="search"
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
        onClick={filtro}
      >
        Buscar
      </button>
    </section>
  )
}

export default SearchBar;