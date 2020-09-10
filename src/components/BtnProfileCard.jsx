import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BtnProfileCard = (props) => (
  <Link to={props.direction}>
    <button data-testid={props.id} onClick={() => props.action && localStorage.clear()}>
      {props.value}
    </button>
  </Link>
);

export default BtnProfileCard;

BtnProfileCard.propTypes = {
  direction: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  action: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};
