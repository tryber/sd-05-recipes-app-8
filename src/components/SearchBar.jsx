import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { RecipesContext } from '../context/RecipesContext';
import { URL_COCKTAILS, URL_MEALS } from './filter/';
import { getRecipesDrinks, getRecipesMeal } from '../services/filterAPI';
import '../layouts/SearchBar.css';

const checkInput = (input) => {
 return input === 'xablau' &&
    alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
};

const setFilter = (
  URL, Btn, getRecipes, inputText, setState,
) => {
  if (Btn === 'ingredient') {
    checkInput(inputText);
    getRecipes(URL[0], inputText).then((data) => setState([data]));
  }
  if (Btn === 'name') {
    checkInput(inputText);
    getRecipes(URL[1], inputText).then((data) => setState([data]));
  }
  if (Btn === 'first-letter') {
    checkInput(inputText);
    return inputText.length !== 1 ? alert('Sua busca deve conter somente 1 (um) caracter') :
      getRecipes(URL[2], inputText).then((data) => setState([data]));
  }
  return null;
};

const InputRender = (props) => {
  const { datatestid, value, label, setState } = props;
  return (
    <div className="search-btn-header">
      <input
        type="radio"
        data-testid={datatestid}
        value={value}
        onClick={(e) => setState(e.target.value)}
      />
      <label htmlFor="search">{label}</label>
    </div>
  );
};

const InputText = (props) => (
  <input
    className="search-input"
    data-testid="search-input"
    type="text"
    placeholder="Buscar Receita"
    onChange={(e) => props.setState(e.target.value)}
  />
);
const SearchBar = () => {
  const {
    setFilterType, filterType, searchBarInput, setRecipesFiltered, typeRecipe, setSearchBarInput,
  } = useContext(RecipesContext);
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
        onClick={() => (
          typeRecipe === 'comidas' ? setFilter(
            URL_MEALS, filterType, getRecipesMeal, searchBarInput, setRecipesFiltered,
          ) :
            setFilter(
              URL_COCKTAILS, filterType, getRecipesDrinks, searchBarInput, setRecipesFiltered,
            )
        )
        }
      >
        Buscar
      </button>
    </section>
  );
};

InputRender.propTypes = {
  datatestid: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  setState: PropTypes.func.isRequired,
};

InputText.propTypes = {
  setState: PropTypes.func.isRequired,
};

export default SearchBar;
