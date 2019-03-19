import React from 'react';
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Pokecard from './Pokecard';

//smoke test
it('renders without crashing', function() {
  shallow(<Pokecard />);
});

//snapshot test
it('matches snapshot', function() {
  let wrapper = shallow(<Pokecard />); //taking snapshot as saved snapshot
  let serialized = toJson(wrapper); //rendering snapshot
  expect(serialized).toMatchSnapshot();
});