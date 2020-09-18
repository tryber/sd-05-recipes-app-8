import React, { useContext, useEffect } from 'react';
import { fetchMealCategories } from '../services/mealAPI';
import { fetchDrinksCategories } from '../services/drinkAPI';
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
      className={`button-category-filter`}
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

export default function FilterList() {
  const {
    setCategories,
    typeRecipe,
  } = useContext(RecipesContext);

  useEffect(() => {
    const apiCall = typeRecipe === 'comidas' ? fetchMealCategories : fetchDrinksCategories;
    apiCall()
      .then((response) => setCategories(
        ['All', ...response[foodType[typeRecipe].response].slice(0, 5)
        .map(({ strCategory }) => strCategory)]
      ));
  }, [typeRecipe])

  return (
    <div className="category-list">
      <ButtonList />
    </div>
  );
}
