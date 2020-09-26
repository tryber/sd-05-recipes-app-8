import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { RecipesContext } from '../context/RecipesContext';
import '../layouts/SearchBar.css';
import { checkType, fetchByFilter } from '../services/filterAPI';

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
    typeRecipe, setFilterType, setSearchBarInput, filterType, setRecipesFiltered, searchBarInput,
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
        onClick={() => {
          checkType(filterType, searchBarInput, typeRecipe, setRecipesFiltered);
          fetchByFilter(setRecipesFiltered, typeRecipe);
        }}
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
