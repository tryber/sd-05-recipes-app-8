import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../layouts/MenuBottom.css';

const BtnCard = (props) => {
  const clearStorage = () => props.action && localStorage.clear();
  return (
    <Link to={props.direction}>
      <button data-testid={props.id} onClick={() => clearStorage()}>
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
  value: PropTypes.node.isRequired,
};
