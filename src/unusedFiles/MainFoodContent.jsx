import React, { useContext } from 'react';
import RecipeCard from './RecipeCard';
import { RecipesContext } from '../context/RecipesContext';
import './MainFoodContent.css';

const MainFoodContent = () => {
  const { recipesList } = useContext(RecipesContext);

  return (
    <div className="recipes-card-container">
      {recipesList.map((recipe, index) => (
        <RecipeCard cardData={recipe} index={index.toString()} key={index.toString()} />
      ))}
    </div>
  );
};

export default MainFoodContent;
