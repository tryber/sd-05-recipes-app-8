import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import getRecipeDetails from '../services/getRecipeDetails';

export const RecipesContext = createContext();

const RecipesProvider = ({ children }) => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [typeRecipe, setTypeRecipe] = useState('comidas');
  const [categories, setCategories] = useState({
    catList: [],
    choose: 'All',
  });
  const [recipe, setRecipe] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [idMeal, setIdMeal] = useState('');

  const fetchRecipeDetails = (type, id) => {
    getRecipeDetails(type, id).then((receipt) => {
      setRecipe(receipt);
      setIsLoading(false);
    });
  };

  const context = {
    categories,
    email,
    fetchRecipeDetails,
    idMeal,
    isLoading,
    password,
    recipe,
    setCategories,
    setEmail,
    setIdMeal,
    setPassword,
    setTypeRecipe,
    typeRecipe,
  };
  return <RecipesContext.Provider value={context}>{children}</RecipesContext.Provider>;
};

export default RecipesProvider;

RecipesProvider.propTypes = { children: PropTypes.node.isRequired };
