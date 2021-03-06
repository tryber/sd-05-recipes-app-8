import React from 'react';
import PropTypes from 'prop-types';

const Ingredients = (props) => {
  const menu =
    props.keys[1] === 'meals'
      ? {
        item: Object.values(props.recipe[props.keys[1]][0]).slice(9, 29),
        quantity: Object.values(props.recipe[props.keys[1]][0]).slice(29, 49),
      }
      : {
        item: Object.values(props.recipe[props.keys[1]][0]).slice(21, 36),
        quantity: Object.values(props.recipe[props.keys[1]][0]).slice(36, 51),
      };

  const merged = menu.item.map((value, i) => [value, menu.quantity[i]]);

  return (
    <div>
      <h4>Ingredients</h4>
      <ul>
        {merged.map(
          (ingredient, index) =>
            ingredient[0] && (
              <li
                data-testid={`${index}-ingredient-${props.itemId}`}
                style={{ listStyleType: 'none' }}
                key={`${ingredient[0]} ${ingredient[1]}`}
              >
                <label htmlFor={`${ingredient[1]} ${ingredient[0]}`}>
                  <input type="checkbox" id={`${ingredient[1]} ${index}`} />
                </label>
                {`${ingredient[1]} ${ingredient[0]}`}
              </li>
            ),
        )}
      </ul>
    </div>
  );
};

export default Ingredients;

Ingredients.propTypes = {
  itemId: PropTypes.string.isRequired,
  keys: PropTypes.arrayOf(PropTypes.string).isRequired,
  recipe: PropTypes.node.isRequired,
};
