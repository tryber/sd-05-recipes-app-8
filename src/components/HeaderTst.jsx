import React from 'react';
import PropTypes from 'prop-types';

const HeaderTst = (props) => (
  <div className="Header">
    {props.left}
    <h2 data-testid={props.id}>{props.center}</h2>
    {props.right}
  </div>
);

export default HeaderTst;

HeaderTst.propTypes = {
  center: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  left: PropTypes.node.isRequired,
  right: PropTypes.node.isRequired,
};
