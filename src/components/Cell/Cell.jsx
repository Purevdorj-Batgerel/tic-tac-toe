import React from 'react';
import PropTypes from 'prop-types';

import './Cell.scss';

const Cell = props => (
  <div className="cell" onClick={props.onClick}>
    {props.value}
  </div>
);

Cell.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string
};

export default Cell;
