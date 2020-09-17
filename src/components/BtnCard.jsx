import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { RecipesContext } from '../context/RecipesContext';
import '../layouts/MenuBottom.css';

const BtnCard = (props) => {
  const { setTypeRecipe } = useContext(RecipesContext);
  const changeType = () => props.type && setTypeRecipe(props.type);
  const clearStorage = () => props.action && localStorage.clear();
  return (
    <Link to={props.direction}>
      <button
        data-testid={props.id}
        className={props.details && 'btnBottom'}
        onClick={() => {
          changeType();
          clearStorage();
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
  details: PropTypes.bool.isRequired,
};
