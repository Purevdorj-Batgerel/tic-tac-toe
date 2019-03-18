import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Title from './Title.jsx';

describe('<Title />', function() {
  it('renders welcome message', function() {
    const wrapper = shallow(<Title title="Tic - Tac - Toe" />);
    const title = <h1>Tic - Tac - Toe</h1>;
    expect(wrapper.contains(title)).to.equal(true);
  });
});
