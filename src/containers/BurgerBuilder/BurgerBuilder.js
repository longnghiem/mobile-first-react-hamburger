import React, { Component, } from "react";

import Aux from "../../hoc/Aux_Comp";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
  render() {
    return (
      <Aux>
        <Burger />
        <div> Build control </div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
