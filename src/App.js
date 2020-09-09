import React from 'react';
import Home from './pages/Home';
import RecipesProvider from './context/RecipesContext';

const App = () => (
  <RecipesProvider>
    <Home />
  </RecipesProvider>
);

export default App;
