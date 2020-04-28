import React from "react";
import { shallow, mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import Summary from "../components/containers/Summary";
import Loading from "../components/presentational/Loading";
import { Provider } from "react-redux";
import configStore from "../config/configStore";

describe("<Summary />", () => {
  it('should render correctly in "debug" mode', () => {
    const wrapper = shallow(
      <Provider store={configStore()}>
        <Summary debug />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render loading since auth is not loaded in "debug" mode', () => {
    const movie = {
      title: "Star Wars",
      backdrop_path: "/test",
      overview: "test",
      genres: [],
    };
    const wrapper = mount(
      <Provider store={configStore()}>
        <MemoryRouter>
          <Summary movie={movie} debug />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper.containsMatchingElement(<Loading />)).toBeTruthy();
    wrapper.unmount();
  });
});
