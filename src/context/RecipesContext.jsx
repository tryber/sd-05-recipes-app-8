import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { getRecipeDetails, fetchRecipes } from '../services/getRecipeDetails';

export const RecipesContext = createContext();

const RecipesProvider = ({ children }) => {
  const [recipesList, setRecipesList] = useState([]);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [typeRecipe, setTypeRecipe] = useState('comidas');
  const [categories, setCategories] = useState([]);
  const [recipe, setRecipe] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [idRecipe, setIdRecipe] = useState('');
  const [recipesRoster, setRecipesRoster] = useState([]);
  const [keys, setKeys] = useState(['meal', 'meals', 'strMeal', 'strMealThumb']);
  const [categorySelected, setCategorySelected] = useState('');
  const [typeBtn, setTypeBtn] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchBarInput, setSearchBarInput] = useState('');
  const [filterType, setFilterType] = useState('');
  const [recipesFiltered, setRecipesFiltered] = useState([]);

  const fetchRecipeDetails = (type, id) => {
    getRecipeDetails(type, id).then((receipt) => {
      setRecipe(receipt);
      setIsLoading(false);
    });
  };

  const getButcher = (listMenu) => setRecipesRoster(listMenu.slice(0, 6));

  const fetchMenu = (type, suffix) => {
    const option = type === 'comidas' ? ['cocktail', 'drinks'] : ['meal', 'meals'];
    fetchRecipes(option[0], suffix).then((menu) => getButcher(menu[option[1]]));
  };

  const fetchKyleMenu = (apiCall, type, category) => {
    const option = type === 'comidas' ? 'meals' : 'drinks';
    apiCall(category).then((menu) => {
      getButcher(menu[option]);
    });
  };

  const setMenuList = (menuList) => setRecipesRoster(menuList.slice(0, 12));

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
    typeBtn,
    setTypeBtn,
    showSearchBar,
    setShowSearchBar,
    searchBarInput,
    setSearchBarInput,
    filterType,
    setFilterType,
    recipesFiltered,
    setRecipesFiltered,
    setMenuList,
    fetchKyleMenu,
  };
  return <RecipesContext.Provider value={context}>{children}</RecipesContext.Provider>;
};

export default RecipesProvider;

RecipesProvider.propTypes = { children: PropTypes.node.isRequired };
