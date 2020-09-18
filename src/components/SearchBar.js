import React, { useContext } from 'react';
import { RecipesContext } from '../context/RecipesContext';
import { setFilterHeader } from '../services/getRecipeDetails';

import '../layouts/SearchBar.css';

const InputRender = (props) => {
  const { datatestid, value, label, setState } = props;
  return (
    <div className="search-btn-header">
      <input
        name="search"
        type="radio"
        data-testid={datatestid}
        value={value}
        onClick={(e) => setState(e.target.value)}
      />
      <label htmlFor="search">{label}</label>
    </div>
  );
};

const InputText = (props) => {
  return (
    <input
      className="search-input"
      data-testid="search-input"
      type="text"
      placeholder="Buscar Receita"
      onChange={(e) => props.setState(e.target.value)}
    />
  );
};

const SearchBar = () => {
  const {
    setFilterType,
    setSearchBarInput,
    searchBarInput,
    typeRecipe,
    filterType,
    setRecipesFiltered,
  } = useContext(RecipesContext);

  // useEffect(() => {
  //   const url = window.location.href.split('/');
  //   const urlType = url.reverse()[0];
  //   setTypeRecipe(urlType);
  //   const searchTail = 'search.php?s=';
  //   fetchMenu(urlType, searchTail);
  // }, [typeRecipe]);

  return (
    <section className="search-bar-container">
      <InputText setState={setSearchBarInput} />
      <div className="search-bar-options">
        <InputRender
          datatestid="ingredient-search-radio"
          value="ingredient"
          label="Ingredientes"
          setState={setFilterType}
        />
        <InputRender
          datatestid="name-search-radio"
          value="name"
          label="Nome"
          setState={setFilterType}
        />
        <InputRender
          datatestid="first-letter-search-radio"
          value="first-letter"
          label="Primeira Letra"
          setState={setFilterType}
        />
      </div>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={() => {
          console.log(typeRecipe, filterType, setRecipesFiltered, searchBarInput);
          setFilterHeader(typeRecipe, filterType, setRecipesFiltered, searchBarInput);
        }}
      >
        Buscar
      </button>
    </section>
  );
};

export default SearchBar;
