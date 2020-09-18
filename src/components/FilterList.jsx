import React, { useContext, useEffect } from 'react';
import { fetchRecipes } from '../services/getRecipeDetails';
import { RecipesContext } from '../context/RecipesContext';

import '../layouts/FilterList.css';

const foodType = {
  comidas: { api: 'meal', response: 'meals' },
  bebidas: { api: 'cocktail', response: 'drinks' },
};

function ButtonList() {
  const { categories, setCategorySelected } = useContext(RecipesContext);
  return categories.map((category) => (
    <button
      key={category}
      name={category}
      className={`${category}-category-filter`}
      data-testid={`${category}-category-filter`}
      onClick={({ target: { name } }) => {
        let filter = name.replace(' ', '_');
        if (name.toLowerCase() === 'all') filter = '';
        setCategorySelected((current) =>
          current === filter ? '' : filter,
        );
      }}
    >
      {category}
    </button>
  ))
}

export default function FilterList(props) {
  const {
  //   categories,
    setCategories,
  //   setCategorySelected,
    typeRecipe,
  } = useContext(RecipesContext);

  useEffect(() => {
    console.log(typeRecipe);
    
  } )

  return (
    <div className="category-list">
      {/* <ButtonList /> */}
    </div>
  );
}
