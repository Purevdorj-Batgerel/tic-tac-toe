import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = props => (
  <button disabled={props.disabled} onClick={props.onClick}>
    {props.text}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string
};

export default Button;
