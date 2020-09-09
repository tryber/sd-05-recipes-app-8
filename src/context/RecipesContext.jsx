import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const RecipesContext = createContext();

const RecipesProvider = ({ children }) => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const context = {
    password,
    setPassword,
    email,
    setEmail,
  };
  return <RecipesContext.Provider value={context}>{children}</RecipesContext.Provider>;
};

export default RecipesProvider;

RecipesProvider.propTypes = { children: PropTypes.node.isRequired };
