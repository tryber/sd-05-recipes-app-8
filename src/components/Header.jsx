import React from 'react';
import PropTypes from 'prop-types';
import '../layouts/Header.css';

const Header = (props) => (
  <div className="Header">
    {props.left}
    <h2 data-testid="page-title">{props.center[0].toUpperCase() + props.center.slice(1)}</h2>
    {props.right}
  </div>
);

export default Header;

Header.propTypes = {
  center: PropTypes.string.isRequired,
  left: PropTypes.node,
  right: PropTypes.node,
};

Header.defaultProps = {
  left: <div/>,
  right: <div/>,
}
