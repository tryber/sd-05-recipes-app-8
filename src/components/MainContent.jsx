import React, { useContext } from 'react';
import MainCard from './MainCard';
import { RecipesContext } from '../context/RecipesContext';
import '../layouts/MainFoodContent.css';

const MainContent = () => {
  const { recipesRoster, categorySelected } = useContext(RecipesContext);
  return (
    <div className="recipes-card-container">
      {!recipesRoster[0] &&
        categorySelected !== '' &&
        alert('Sinto muito, não encontramos nenhuma receita para esses filtros.')}
      {recipesRoster.length >= 1 &&
        recipesRoster.map((recipe, index) => (
          <MainCard cardData={recipe} index={index.toString()} key={index.toString()} />
        ))}
    </div>
  );
};

export default MainContent;
