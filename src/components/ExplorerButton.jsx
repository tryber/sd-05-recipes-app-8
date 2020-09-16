import React from 'react';
import { Link } from 'react-router-dom';
import './ExplorerButton.css';

const ExplorerButton = (props) => {
  const { label, pathTo, testId } = props;
  return (
    <Link
      to={`/explorar/${pathTo}`}
      className="explorer-button"
      data-testid={testId}
    >
      <label className="explorer-button-label">{label}</label>
    </Link>
  );
};

export default ExplorerButton;
