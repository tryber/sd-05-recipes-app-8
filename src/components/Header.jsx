import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => (
  <div className="Header">
    {props.left}
    <h2 data-testid={props.id}>{(props.center).toUpperCase()}</h2>
    {props.right}
  </div>
);

export default Header;

Header.propTypes = {
  center: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  left: PropTypes.node.isRequired,
  right: PropTypes.node.isRequired,
};
