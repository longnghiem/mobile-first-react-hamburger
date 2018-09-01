import React from "react";

import Aux from "../../hoc/Aux_Comp";
import "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const layout = props => (
  <Aux>
    <div> Sidebar </div>
    <Toolbar />
    <main className="content">{props.children}</main>
  </Aux>
);

export default layout;
