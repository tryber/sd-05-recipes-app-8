import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { RecipesContext } from '../context/RecipesContext';

const BtnCard = (props) => {
  const { setTypeRecipe } = useContext(RecipesContext);
  return (
    <Link to={props.direction}>
      <button
        data-testid={props.id}
        onClick={() => {
          props.type && setTypeRecipe(props.type);
          props.action && localStorage.clear();
        }}
      >
        {props.value}
      </button>
    </Link>
  );
};

export default BtnCard;

BtnCard.propTypes = {
  direction: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  action: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};
