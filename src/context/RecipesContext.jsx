import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const RecipesContext = createContext();

const RecipesProvider = ({ children }) => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [typeRecipe, setTypeRecipe] = useState('comidas');
  const [categories, setCategories] = useState({
    catList: [],
    choose: 'All',
  });
  const context = {
    password,
    setPassword,
    email,
    setEmail,
    typeRecipe,
    setTypeRecipe,
    categories,
    setCategories,
  };
  return (
    <RecipesContext.Provider value={context}>
      {children}
    </RecipesContext.Provider>
  );
};

export default RecipesProvider;

RecipesProvider.propTypes = { children: PropTypes.node.isRequired };
