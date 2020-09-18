import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { getRecipeDetails, fetchRecipes } from '../services/getRecipeDetails';

export const RecipesContext = createContext();

const RecipesProvider = ({ children }) => {
  const [recipesList, setRecipesList] = useState([]);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [typeRecipe, setTypeRecipe] = useState('comidas');
  const [categories, setCategories] = useState(['All']);
  const [recipe, setRecipe] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [idRecipe, setIdRecipe] = useState('');
  const [recipesRoster, setRecipesRoster] = useState([]);
  const [keys, setKeys] = useState(['meal', 'meals', 'strMeal', 'strMealThumb']);
  const [categorySelected, setCategorySelected] = useState('');

  const fetchRecipeDetails = (type, id) => {
    getRecipeDetails(type, id).then((receipt) => {
      setRecipe(receipt);
      setIsLoading(false);
    });
  };

  const getButcher = (listMenu) => setRecipesRoster(listMenu.slice(0, 12));

  const fetchMenu = (type, suffix) => {
    const option = type === 'comidas' ? ['meal', 'meals'] : ['cocktail', 'drinks'];
    fetchRecipes(option[0], suffix).then((menu) => getButcher(menu[option[1]]));
  };

  const context = {
    categories,
    email,
    fetchMenu,
    fetchRecipeDetails,
    idRecipe,
    isLoading,
    keys,
    password,
    recipe,
    recipesList,
    recipesRoster,
    setCategories,
    setEmail,
    setIdRecipe,
    setKeys,
    setPassword,
    setRecipesList,
    setTypeRecipe,
    typeRecipe,
    categorySelected,
    setCategorySelected,
  };
  return <RecipesContext.Provider value={context}>{children}</RecipesContext.Provider>;
};

export default RecipesProvider;

RecipesProvider.propTypes = { children: PropTypes.node.isRequired };
