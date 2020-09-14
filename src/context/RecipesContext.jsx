import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const RecipesContext = createContext();

const RecipesProvider = ({ children }) => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [typeRecipe, setTypeRecipe] = useState('comidas');
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchBarInput, setSearchBarInput] = useState('');
  const [typeBtn, setTypeBtn] = useState('');
  const [filterRecipes, setFilterRecipes] = useState([]);
  const context = {
    password,
    setPassword,
    email,
    setEmail,
    typeRecipe,
    setTypeRecipe,
    showSearchBar,
    setShowSearchBar,
    searchBarInput,
    setSearchBarInput,
    typeBtn,
    setTypeBtn,
    filterRecipes,
    setFilterRecipes,
  };
  return <RecipesContext.Provider value={context}>{children}</RecipesContext.Provider>;
};

export default RecipesProvider;

RecipesProvider.propTypes = { children: PropTypes.node.isRequired };
