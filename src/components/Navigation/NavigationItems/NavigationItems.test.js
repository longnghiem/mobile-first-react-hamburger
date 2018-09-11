import Adapter from "enzyme-adapter-react-16";
import React from "react";
import Enzyme, { shallow, } from "enzyme";

import NavigationItems from "./NavigationItems";
import NavigationItem from "./NavigationItem/NavigationItem";

Enzyme.configure({ adapter: new Adapter(), });

describe("<NavigationItems />", () => {
  it("should render 1 <NavigationItem /> element", () => {
    const wrapper = shallow(<NavigationItems />);
    expect(wrapper.find(NavigationItem)).toHaveLength(1);
    expect(wrapper.find(NavigationItem)).toMatchSnapshot();
  });
});
