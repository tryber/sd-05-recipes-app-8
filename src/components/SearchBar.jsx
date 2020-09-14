import React, { useContext } from 'react';
import { RecipesContext } from '../context/RecipesContext';
import { URL_COCKTAILS, URL_MEALS } from './Filter/getFilterAPI';
import { getRecipesDrinks, getRecipesMeal } from './Filter/filterAPI';

const setFilter = (
  URL, Btn, getRecipes, inputText, setState,
) => {
  if (Btn === 'ingredient') {
    return Promise.resolve(getRecipes(URL[0], inputText)
      .then((data) => setState(data)));
  }
  if (Btn === 'name') {
    return Promise.resolve(getRecipes(URL[0], inputText)
      .then((data) => setState(data)));
  }
  return inputText.length !== 1 ? alert('Sua busca deve conter somente 1 (um) caracter') :
    Promise.resolve(getRecipes(URL[0], inputText)
      .then((data) => setState(data)));
};

const InputRender = (props) => {
  const { datatestid, value, label, setState } = props;
  return (
    <Fragment>
      <input
        name="search"
        type="radio"
        data-testid={datatestid}
        value={value}
        onClick={(e) => setState(e.target.value)}
      />
      <label htmlFor="search">{label}</label>
    </Fragment>
  )
}

const SearchBar = () => {
  const {
    setSearchBarInput, setTypeBtn, typeBtn, searchBarInput, setFilterRecipes, typeRecipe,
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
        <InputRender
          datatestid="ingredient-search-radio"
          value="ingredient" label="Ingredientes"
          setState={setTypeBtn}
        />
        <InputRender
          datatestid="name-search-radio"
          value="name"
          label="Nome"
          setState={setTypeBtn}
        />
        <InputRender
          datatestid="first-letter-search-radio"
          value="first-letter"
          label="Primeira Letra"
          setState={setTypeBtn}
        />
      </div>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={() => (
          typeRecipe === 'comidas' ? setFilter(
            URL_MEALS, typeBtn, getRecipesMeal, searchBarInput, setFilterRecipes,
          ) :
            setFilter(
              URL_COCKTAILS, typeBtn, getRecipesDrinks, searchBarInput, setFilterRecipes,
            )
        )
        }
      >
        Buscar
      </button>
    </section>
  );
};

export default SearchBar;
