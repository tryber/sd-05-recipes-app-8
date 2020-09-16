import React from 'react';
import './MainContents.css';

const MainContent = (props) => (
  <div className="main-container">{props.children}</div>
);

export default MainContent;
