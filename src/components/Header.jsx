import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { RecipesContext } from '../context/RecipesContext';
import './Header.css';

const Header = (props) => {
  const { showSearchBar } = useContext(RecipesContext);
  return (
    <div className="Header">
      <div className="header-container-icons">
        {props.left}
        <h2 data-testid={props.id}>{(props.center).toUpperCase()}</h2>
        {props.right}
      </div>
      {showSearchBar && props.searchBar}
    </div>
  );
};

export default Header;

Header.propTypes = {
  center: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  left: PropTypes.node.isRequired,
  right: PropTypes.node.isRequired,
  searchBar: PropTypes.func.isRequired,
};
