import React from "react";
import { shallow, mount } from "enzyme";
import AuthIsLoaded from "../components/authentication/AuthIsLoaded";
import Loading from "../components/presentational/Loading";
import { Provider } from "react-redux";
import configStore from "../config/configStore";

describe("<AuthIsLoaded />", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(
      <Provider store={configStore()}>
        <AuthIsLoaded debug />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });

  it("should return a loading screen component since auth is not loaded.", () => {
    const component = mount(
      <Provider store={configStore()}>
        <AuthIsLoaded />
      </Provider>
    );
    expect(component.containsMatchingElement(<Loading />)).toBeTruthy();
    component.unmount();
  });
});
