import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { RecipesContext } from '../../context/RecipesContext';

const RenderFilteresCard = (props) => (
  <section data-testid={`${props.index}-recipe-card`} key={props.id}>
    <img
      className="filter-recipes-img"
      data-testid={`${props.index}-card-img`}
      src={props.img}
      alt={props.id}
    />
    <div className="card-name">
      {console.log(props.index)}
      <p data-testid={`${props.index}-card-name`}>{props.name}</p>
    </div>
  </section>
);

const FilterCard = () => {
  const { recipesFiltered, typeRecipe } = useContext(RecipesContext);
  return !recipesFiltered[0] ? (
    <div>{alert('Sinto muito, não encontramos nenhuma receita para esses filtros.')}</div>
  ) : (
    <section className="filter-recipes-container">
      {console.log(recipesFiltered)}
      {typeRecipe === 'comidas'
        ? recipesFiltered[0]
            .slice(0, 12)
            .map(({ idMeal, strMeal, strMealThumb }, index) => (
              <RenderFilteresCard id={idMeal} index={index} name={strMeal} img={strMealThumb} />
            ))
        : recipesFiltered[0]
            .slice(0, 12)
            .map(({ idDrink, strDrink, strDrinkThumb }, index) => (
              <RenderFilteresCard id={idDrink} index={index} name={strDrink} img={strDrinkThumb} />
            ))}
      ;
    </section>
  );
};

RenderFilteresCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default FilterCard;

// return (
// <section className="filter-recipes-container">
// {
//   console.log(recipesFiltered);
// }
// {
//   if (typeRecipe === 'comidas' && recipesFiltered[0]) return;
//   recipesFiltered[0].map(({ idMeal, strMeal, strMealThumb }, index) => (
//     <RenderFilteresCard id={idMeal} index={index} name={strMeal} img={strMealThumb} />
//   ));
//   return typeRecipe === 'bebidas' && recipesFiltered[0];
//   recipesFiltered[0].map(({ idDrink, strDrink, strDrinkThumb }, index) => (
//     <RenderFilteresCard id={idDrink} index={index} name={strDrink} img={strDrinkThumb} />
//   ));
//   return <p>{'Sinto muito, não encontramos nenhuma receita para esses filtros.'}</p>;
// }
// </section>
// );
