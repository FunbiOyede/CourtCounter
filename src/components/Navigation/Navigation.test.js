import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Navigation from "./Navigation";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
configure({ adapter: new Adapter() });

describe("<Navigation />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Navigation />);
  });
  // if there is only one App bar component
  it("should render app bar component", () => {
    expect(wrapper.find(AppBar)).toHaveLength(1);
  });
  // if there is only one tool bar component
  it("should render tool bar component", () => {
    expect(wrapper.find(Toolbar)).toHaveLength(1);
  });
  // if the wrapper contains typography
  it("should contain a typography component", () => {
    expect(
      wrapper.contains(<Typography variant="h6">Court Counter</Typography>)
    ).toEqual(true);
  });
});
