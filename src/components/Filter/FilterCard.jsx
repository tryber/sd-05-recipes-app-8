import React, { useContext } from 'react';
import { RecipesContext } from '../../context/RecipesContext';

const FilterCard = () => {
  const { filterRecipes, typeRecipe } = useContext(RecipesContext);
  console.log(filterRecipes)
  if (filterRecipes === null) {
    // alert('nenhum termo encontrado')
    return null
  };
  if (filterRecipes.length !== 0) {
    return (
      <section className="filter-recipes-container">
        {typeRecipe === 'comidas' ?
          filterRecipes.map(({ idMeal, strMeal, strMealThumb }, index) => (
            <section className="filter-recipes-card" key={idMeal}>
              <img className="filter-recipes-img" data-testid={`${index}-card-image`} src={strMealThumb} alt={idMeal} />
              <div className="card-name">
                <p data-testid={`${index}-card-name`}>{strMeal}</p>
              </div>
            </section>)) :
          filterRecipes.map(({ idDrink, strDrink, strDrinkThumb }, index) => (
            <section className="filter-recipes-card" key={idDrink}>
              <img className="filter-recipes-img" data-testid={`${index}-card-image`} src={strDrinkThumb} alt={idDrink} />
              <div className="card-name">
                <p data-testid={`${index}-card-name`}>{strDrink}</p>
              </div>
            </section>
          ))}
      </section>
    )
  }
  return null;
}

export default FilterCard;
