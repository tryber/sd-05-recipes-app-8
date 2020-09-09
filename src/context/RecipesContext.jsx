import React, { createContext } from 'react';

export const RecipesContext = createContext();

const RecipesProvider = ({ children }) => {
  const context = {};
  return <RecipesContext.Provider value={context}>{children}</RecipesContext.Provider>;
};

export default RecipesProvider;
