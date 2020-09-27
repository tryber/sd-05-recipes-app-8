import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { RecipesContext } from '../../context/RecipesContext';

const RenderFilteresCard = (props) =>
  (
    <section data-testid={`${props.index}-recipe-card`} key={props.id}>
      <img className="filter-recipes-img" data-testid={`${props.index}-card-image`} src={props.img} alt={props.id} />
      <div className="card-name">
        <p data-testid={`${props.index}-card-name`}>{props.name}</p>
      </div>
    </section>
  );


const FilterCard = () => {
  const { recipesFiltered, typeRecipe } = useContext(RecipesContext);
  return (
    <section className="filter-recipes-container">
      {typeRecipe === 'comidas' ?
        recipesFiltered[0].map(({ idMeal, strMeal, strMealThumb }, index) => (
          <RenderFilteresCard
            id={idMeal}
            index={index}
            name={strMeal}
            img={strMealThumb}
          />
        )) :
        recipesFiltered[0].map(({ idDrink, strDrink, strDrinkThumb }, index) => (
          <RenderFilteresCard
            id={idDrink}
            index={index}
            name={strDrink}
            img={strDrinkThumb}
          />
        ))};
    </section>
  );
  return null
};

RenderFilteresCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default FilterCard;
