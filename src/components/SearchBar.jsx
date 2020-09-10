import React, { useContext } from 'react';
import { RecipesContext } from '../context/RecipesContext';

const SearchBar = () => {
  const { setSearchBarInput } = useContext(RecipesContext)
  return (
    <section>
      <input data-testid="search-input" type="text" placeholder="Buscar Receita" />
      <div>
        <input
          name="search"
          type="radio"
          data-testid="ingredient-search-radio"
          value="ingredient"
          onClick={(e) => setSearchBarInput(e.target.value)}
        />
        <label htmlFor="search">Ingredientes</label>
        <input
          name="search"
          type="radio"
          data-testid="name-search-radio"
          value="name"
          onClick={(e) => setSearchBarInput(e.target.value)}
        />
        <label htmlFor="search">Nome</label>
        <input name="search"
          type="radio"
          data-testid="first-letter-search-radio"
          value="first-letter"
          onClick={(e) => setSearchBarInput(e.target.value)}
        />
        <label htmlFor="search">Primeira Letra</label>
      </div>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={(e) => setSearchBarInput(e.target.value)}
      >
        Buscar
      </button>
    </section>
  )
}

export default SearchBar;