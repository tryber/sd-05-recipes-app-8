import React, { useContext, useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';
import { RecipesContext } from '../context/RecipesContext';
import { fetchMeals } from '../services/mealAPI';
import './MainFoodContent.css';

const MainFoodContent = () => {
  const [recipesList, setRecipesList] = useState([]);
  const { categories } = useContext(RecipesContext);
  const filterCategory = categories.choose === 'all' ? '' : categories.choose;
  const testFunction = (filtered) =>
    fetchMeals(filtered).then(({ meals }) =>
      setRecipesList(() =>
        meals
          .slice(0, 12)
          .map((recipe, index) => (
            <RecipeCard cardData={recipe} index={index.toString()} key={index.toString()} />
          )),
      ),
    );

  // async function testFunction(filtered) {
  //   const response = await fetchMeals(filtered);
  //   setRecipesList(() =>
  //     response.meals
  //       .slice(0, 12)
  //       .map((recipe, index) => (
  //         <RecipeCard cardData={recipe} index={index.toString()} key={index.toString()} />
  //       )),
  //   );
  // }

  useEffect(() => testFunction(filterCategory), [filterCategory]);

  return <div className="recipes-card-container">{recipesList}</div>;
};

export default MainFoodContent;
