import React from "react";
import { shallow, mount } from "enzyme";
import SideNav from "../components/layout/SideNav";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import configStore from "../config/configStore";

describe("<SideNav />", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(
      <Provider store={configStore()}>
        <SideNav debug />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });

  it("should hold a ul element with id nav-mobile", () => {
    const component = mount(
      <Provider store={configStore()}>
        <MemoryRouter>
          <SideNav debug />
        </MemoryRouter>
      </Provider>
    );
    expect(component.children(<ul id={"nav-mobile"}></ul>)).toBeTruthy();
    component.unmount();
  });
});
