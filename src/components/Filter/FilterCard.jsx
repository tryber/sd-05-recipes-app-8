import React, { useContext } from 'react';
import { RecipesContext } from '../../context/RecipesContext';

const FilterCard = () => {
  const { filterRecipes } = useContext(RecipesContext);
  console.log(filterRecipes)
  if (!filterRecipes[0]) return null;
  if (filterRecipes.length !== 0) {
    return (
      <section className="filter-recipes-container">
        {filterRecipes[0].map(({ idMeal, strMeal, strMealThumb }, index) => (
          <section className="filter-recipes-card" key={idMeal}>
            <img className="filter-recipes-img" data-testid={`${index}-card-image`} src={strMealThumb} alt={idMeal}/>
            <div className="card-name">
              <p data-testid={`${index}-card-name`}>{strMeal}</p>
            </div>
          </section>
        ))}
      </section>
    );
  }
  return null;
}

export default FilterCard;
