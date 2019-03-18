import React from 'react';
import PropTypes from 'prop-types';

import './Title.scss';

const Title = props => <h1>{props.title}</h1>;

Title.propTypes = {
  title: PropTypes.string
};

export default Title;
