import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

import React from "react";

import reducer from "../../../src/reducers/property-list";
import store from "../../../src/reducers/store";

const state = {};

describe("PropertyList Reducers", () => {
  it("should return the initial state", () => {
    const state = {};
    expect(reducer(state, {})).toEqual(state);
  });

  it("should check LOAD_PROPERTY_LIST", () => {
    const data = {
      data: {
        data: []
      }
    };
    const newState = reducer(state, {
      type: "LOAD_PROPERTY_LIST",
      payload: { data }
    });
    expect(newState).toEqual(data);
  });
});
