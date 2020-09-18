import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../layouts/ExplorerButton.css';

const ExplorerButton = (props) => {
  const { label, pathTo, testId } = props;
  return (
    <Link
      to={`/explorar/${pathTo}`}
      className="explorer-button"
      data-testid={testId}
    >
      <span className="explorer-button-label">{label}</span>
    </Link>
  );
};

ExplorerButton.propTypes = {
  label: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  pathTo: PropTypes.string.isRequired,
};

export default ExplorerButton;
