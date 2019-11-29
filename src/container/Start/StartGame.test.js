import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { StartGame } from "./StartGame";
import Loader from "../../components/Loader/Loader";

configure({ adapter: new Adapter() });
describe("<StartGame/>", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<StartGame FetchTeamsNames={() => {}} />);
  });
  it("should render loader if isLoad  is true", () => {
    wrapper.setState({ isLoad: true });
    expect(wrapper.find(Loader)).toHaveLength(1);
  });
});
