import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import Game from './Game.jsx';

describe('<MyComponent />', () => {
  it('simulates click events', () => {
    const wrapper = mount(<Game />);

    wrapper
      .find('.cell')
      .at(0)
      .simulate('click');

    wrapper.update();

    const state = wrapper.state();

    expect(state.current.cells).to.eql([
      'X',
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ]);
    expect(state.turn).to.equal('O');
    expect(state.history.length).to.equal(1);
  });

  it('simulates click events on same cell', () => {
    const wrapper = mount(<Game />);

    wrapper
      .find('.cell')
      .at(0)
      .simulate('click');

    wrapper
      .find('.cell')
      .at(0)
      .simulate('click');

    wrapper.update();

    const state = wrapper.state();

    expect(state.current.cells).to.eql([
      'X',
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ]);
    expect(state.turn).to.equal('O');
    expect(state.history.length).to.equal(1);
  });
});
