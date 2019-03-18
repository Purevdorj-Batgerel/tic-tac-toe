import React from 'react';
import PropTypes from 'prop-types';

import './ControlPanel.scss';
import Button from '../Button/Button.jsx';

const ControlPanel = props => (
  <div id="control-panel">
    <Button
      text="Back"
      onClick={props.backHandler}
      disabled={props.backDisabled}
    />
    <Button text="Reset" onClick={props.resetHandler} />
  </div>
);

ControlPanel.propTypes = {
  backHandler: PropTypes.func,
  resetHandler: PropTypes.func,
  backDisabled: PropTypes.bool
};

export default ControlPanel;
