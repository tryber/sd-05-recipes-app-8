import React from 'react';
import PropTypes from 'prop-types';

const LogoRecipe = (props) => (
  <figure>
    {console.log(props)}
    <img
      data-testid="recipe-photo"
      src={props.recipe[props.keys[1]][0][props.keys[3]]}
      alt="$menupic"
      style={{ maxHeight: '170px' }}
    />
    <figcaption>
      <p data-testid="recipe-title">{props.recipe[props.keys[1]][0][props.keys[2]]}</p>
      {props.keys[1] === 'drinks' ? (
        <span data-testid="recipe-category">{props.recipe[props.keys[1]][0].strAlcoholic}</span>
      ) : (
        <span data-testid="recipe-category">{props.recipe[props.keys[1]][0].strCategory}</span>
      )}
    </figcaption>
  </figure>
);

export default LogoRecipe;

LogoRecipe.propTypes = {
  recipe: PropTypes.node.isRequired,
  keys: PropTypes.arrayOf(PropTypes.string).isRequired,
};
