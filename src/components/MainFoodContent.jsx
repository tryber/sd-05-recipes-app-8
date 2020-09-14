import React, { useContext, useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';
import { RecipesContext } from '../context/RecipesContext';
import { fetchMeals } from '../services/mealAPI';

const MainFoodContent = () => {
  const [recipesList, setRecipesList] = useState([]);
  const { categories } = useContext(RecipesContext);
  const filterCategory = categories.choose === "all" ? '' : categories.choose;
  useEffect(
    () =>
      fetchMeals(filterCategory).then(({ meals }) =>
        setRecipesList(() =>
          meals.slice(0, 12).map((recipe, index) => (
            <RecipeCard
              cardData={recipe}
              index={index.toString()}
              key={index.toString()}
            />
          )),
        ),
      ),
    [],
  );

  return <div>{recipesList}</div>;
};

export default MainFoodContent;
