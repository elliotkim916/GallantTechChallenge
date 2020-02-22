import React from 'react';
import {mount} from 'enzyme';
import SearchBreed from './FilterBreed';

const wrapper = mount(<SearchBreed />);
const input = wrapper.find('input');

describe("Breed input", () => {
  it('should store breed in the state', () => {
    input.at(0).instance().value = 'akita';
    input.at(0).simulate('change');
    expect(wrapper.state().breed).toEqual('akita');
  });
});

describe("Form submit", () => {
  it('should submit the form', () => {
    const state = {
      breed: 'airedale',
    };

    wrapper.setState(state);
    wrapper.instance().onSubmit = jest.fn();

    wrapper.update();

    wrapper.find('form').simulate('submit');
    expect(wrapper.instance().onSubmit).toBeCalled();
  });
});
