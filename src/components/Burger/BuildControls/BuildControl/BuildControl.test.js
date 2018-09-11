import Adapter from "enzyme-adapter-react-16";
import React from "react";
import Enzyme, { shallow, } from "enzyme";
import sinon from "sinon";

import BuildControl from "./BuildControl";

Enzyme.configure({ adapter: new Adapter(), });

describe("<BuildControl />", () => {
  it("simulates click events", () => {
    const onMoreButtonClick = sinon.spy();
    const wrapper = shallow(
      <BuildControl add={onMoreButtonClick} disabled subtract={() => ""} label="" />
    );
    wrapper.find(".more").simulate("click");
    expect(onMoreButtonClick).toHaveProperty("callCount", 1);
  });
  it("simulates click events", () => {
    const onLessButtonClick = sinon.spy();
    const wrapper = shallow(
      <BuildControl subtract={onLessButtonClick} disabled add={() => ""} label="" />
    );
    wrapper.find(".less").simulate("click");
    expect(onLessButtonClick).toHaveProperty("callCount", 1);
  });
});
