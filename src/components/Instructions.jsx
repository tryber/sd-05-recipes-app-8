import React from 'react';
import PropTypes from 'prop-types';

const Instructions = (props) => (
  <div>
    <h4>Instructions</h4>
    <p data-testid="instructions" style={{ fontSize: '13px' }}>
      {props.recipe[props.keys[1]][0].strInstructions}
    </p>
  </div>
);

export default Instructions;

Instructions.propTypes = {
  recipe: PropTypes.node.isRequired,
  keys: PropTypes.arrayOf(PropTypes.string).isRequired,
};
