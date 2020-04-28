import React from "react";
import { shallow } from "enzyme";
import Dashboard from "../components/containers/Dashboard";
import { Provider } from "react-redux";
import configStore from "../config/configStore";

describe("<Dashboard />", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(
      <Provider store={configStore()}>
        <Dashboard debug />
      </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});
