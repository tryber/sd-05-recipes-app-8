import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import getRecipeDetails from '../services/getRecipeDetails';

export const RecipesContext = createContext();

const RecipesProvider = ({ children }) => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [typeRecipe, setTypeRecipe] = useState('comidas');
  const [recipe, setRecipe] = useState('');

  const fetchRecipeDetails = (type, id) => {
    getRecipeDetails(type, id).then((receipt) => setRecipe(receipt));
  };

  const context = {
    password,
    setPassword,
    email,
    setEmail,
    typeRecipe,
    setTypeRecipe,
    fetchRecipeDetails,
    recipe,
  };

  return <RecipesContext.Provider value={context}>{children}</RecipesContext.Provider>;
};

export default RecipesProvider;

RecipesProvider.propTypes = { children: PropTypes.node.isRequired };
