import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import Game from './Game.jsx';

describe('<Game />', () => {
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

  it('win condition', () => {
    const wrapper = mount(<Game />);

    wrapper
      .find('.cell')
      .at(0)
      .simulate('click');
    wrapper
      .find('.cell')
      .at(1)
      .simulate('click');
    wrapper
      .find('.cell')
      .at(4)
      .simulate('click');
    wrapper
      .find('.cell')
      .at(5)
      .simulate('click');
    wrapper
      .find('.cell')
      .at(8)
      .simulate('click');

    wrapper.update();

    const state = wrapper.state();

    expect(wrapper.find('.status').text()).to.equal('X won');

    expect(state.current.cells).to.eql([
      'X',
      'O',
      null,
      null,
      'X',
      'O',
      null,
      null,
      'X'
    ]);
    expect(state.turn).to.equal('O');
    expect(state.history.length).to.equal(5);
  });

  it('unable to move after game finish', () => {
    const wrapper = mount(<Game />);

    wrapper
      .find('.cell')
      .at(0)
      .simulate('click');
    wrapper
      .find('.cell')
      .at(1)
      .simulate('click');
    wrapper
      .find('.cell')
      .at(4)
      .simulate('click');
    wrapper
      .find('.cell')
      .at(5)
      .simulate('click');
    wrapper
      .find('.cell')
      .at(8)
      .simulate('click');
    wrapper
      .find('.cell')
      .at(2)
      .simulate('click');

    wrapper.update();

    const state = wrapper.state();

    expect(state.current.cells).to.eql([
      'X',
      'O',
      null,
      null,
      'X',
      'O',
      null,
      null,
      'X'
    ]);
    expect(state.turn).to.equal('O');
    expect(state.history.length).to.equal(5);
  });
});
