import React, { useContext, useEffect } from 'react';
import { RecipesContext } from '../context/RecipesContext';

const Suggestions = (recipe, keys) => {
  const { fetchMenu, recipesRoster } = useContext(RecipesContext);
  const kind = keys[0] === 'meal' ? ['bebidas', 'strDrinkThumb'] : ['comidas', 'strMealThumb'];

  useEffect(() => {
    const ending = 'search.php?s=';
    fetchMenu(kind[0], ending);
  }, []);

  console.log(recipesRoster[5][kind[1]]);
  return (
    <figure>
      <img
        data-testid="0-recomendation-card"
        src={recipesRoster[5][kind[1]]}
        alt="recommendation"
        style={{ maxHeight: '50px' }}
      />
      <figcaption>
        <span data-testid="0-recomendation-title" />
      </figcaption>
    </figure>
  );
};

export default Suggestions;
