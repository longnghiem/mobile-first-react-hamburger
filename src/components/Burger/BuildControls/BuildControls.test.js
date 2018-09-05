import Adapter from "enzyme-adapter-react-16";
import React from "react";
import Enzyme, { shallow, } from "enzyme";

import BuildControls from "./BuildControls";
import BuildControl from "./BuildControl/BuildControl";

Enzyme.configure({ adapter: new Adapter(), });

describe("<BuildControls />", () => {
  it("should render 4 <BuildControl /> elements and 1 order button", () => {
    const wrapper = shallow(
      <BuildControls
        addIngredient={() => ""}
        subtractIngredient={() => ""}
        disabled={{
          salad: true,
          bacon: true,
          cheese: true,
          meat: true,
        }}
        price={10}
        purchasable={false}
        order={() => ""}
      />
    );
    expect(wrapper.find(".orderButton")).toHaveLength(1);
    expect(wrapper.find(BuildControl)).toHaveLength(4);
  });
});
