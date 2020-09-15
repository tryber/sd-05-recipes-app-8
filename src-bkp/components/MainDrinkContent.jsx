import React, { useContext } from 'react';
import DrinkCard from './DrinkCard';
import { RecipesContext } from '../context/RecipesContext';
import './MainFoodContent.css';

const MainDrinkContent = () => {
  const { recipesList } = useContext(RecipesContext);

  return (
    <div className="recipes-card-container">
      {recipesList.map((recipe, index) => (
        <DrinkCard cardData={recipe} index={index.toString()} key={index.toString()} />
      ))}
    </div>
  );
};

export default MainDrinkContent;
