import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = (props) => (
  <div className="Header">
    <div className="header-left">{props.left}</div>
    <div className="header-center">
      <h2 data-testid={props.id}>{props.center.toUpperCase()}</h2>
    </div>
    <div className="header-right">{props.right}</div>
  </div>
);

export default Header;

Header.propTypes = {
  center: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  left: PropTypes.node.isRequired,
  right: PropTypes.node.isRequired,
};
