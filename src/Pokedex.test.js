import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Pokedex from "./Pokedex";

//shallow test
it("renders without crashing", function() {
    shallow(<Pokedex/>);
});

//snapshot test
it("matches snapshot for pokedex", function() {
    let wrapper = shallow(<Pokedex/>);
    let serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
})