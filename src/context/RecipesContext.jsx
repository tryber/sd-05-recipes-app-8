import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import getRecipeDetails from '../services/getRecipeDetails';

export const RecipesContext = createContext();

const RecipesProvider = ({ children }) => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [typeRecipe, setTypeRecipe] = useState('comidas');
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchBarInput, setSearchBarInput] = useState('');
  const [typeBtn, setTypeBtn] = useState('');
  const [filterRecipes, setFilterRecipes] = useState([])
  const [recipe, setRecipe] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const fetchRecipeDetails = (type, id) => {
    getRecipeDetails(type, id).then((receipt) => {
      setRecipe(receipt);
      setIsLoading(false);
    });
  };

  const context = {
    email,
    fetchRecipeDetails,
    isLoading,
    password,
    recipe,
    setEmail,
    setPassword,
    setTypeRecipe,
    showSearchBar,
    setShowSearchBar,
    searchBarInput,
    setSearchBarInput,
    typeBtn,
    setTypeBtn,
    filterRecipes,
    setFilterRecipes,
    typeRecipe,
  };

  return <RecipesContext.Provider value={context}>{children}</RecipesContext.Provider>;
};

export default RecipesProvider;

RecipesProvider.propTypes = { children: PropTypes.node.isRequired };
