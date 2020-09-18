import React from 'react';
import PropTypes from 'prop-types';
import '../layouts/MainContents.css';

const MainContents = (props) => (
  <div className="main-container">{props.children}</div>
);

export default MainContents;

MainContents.propTypes = { children: PropTypes.node.isRequired };
