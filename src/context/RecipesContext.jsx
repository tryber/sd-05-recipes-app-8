import React, { createContext } from 'react';
import PropTypes from 'prop-types';

export const RecipesContext = createContext();

const RecipesProvider = ({ children }) => {
  const context = {};
  return <RecipesContext.Provider value={context}>{children}</RecipesContext.Provider>;
};

export default RecipesProvider;

RecipesProvider.propTypes = { children: PropTypes.node.isRequired };
