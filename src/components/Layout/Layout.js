import React from "react";

import Aux from "../../hoc/Aux_Comp";
import "./Layout.css";

const layout = props => (
  <Aux>
    <div> Toolbar </div>
    <div> Sidebar </div>
    <main className="content">{props.children}</main>
  </Aux>
);

export default layout;
