import React from "react";
import { shallow, mount } from "enzyme";
import Navbar from "../components/layout/Navbar";
import { Link } from "react-router-dom";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import configStore from "../config/configStore";

describe("<Navbar />", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(
      <Provider store={configStore()}>
        <Navbar debug />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });

  it("should hold a Link element with MovitZ brand logo", () => {
    const component = mount(
      <Provider store={configStore()}>
        <MemoryRouter>
          <Navbar debug />
        </MemoryRouter>
      </Provider>
    );
    expect(
      component.containsMatchingElement(<Link to={"/"}>MovitZ</Link>)
    ).toBeTruthy();
    component.unmount();
  });
});
