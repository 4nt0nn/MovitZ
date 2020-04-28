import React from "react";
import { shallow, mount } from "enzyme";
import List from "../components/presentational/List";
import Card from "../components/presentational/Card";
import { Provider } from "react-redux";
import configStore from "../config/configStore";

describe("<List />", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(
      <Provider store={configStore()}>
        <List debug />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });

  it("should hold a Card element", () => {
    const component = mount(
      <Provider store={configStore()}>
        <List cards={[]} debug />
      </Provider>
    );
    expect(component.children(<Card />)).toBeTruthy();
    component.unmount();
  });
});
