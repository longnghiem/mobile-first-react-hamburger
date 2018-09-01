import React, { Component, } from "react";

import PropTypes from "prop-types";
import Aux from "../../hoc/Aux_Comp";
import "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerClosedHandler = () => {
    this.setState({
      showSideDrawer: false,
    });
  };

  sideDrawerToggleHandler = () => {
    /* use prevState when using the state in setState() (setting the state depending on the old state) */
    this.setState(prevState => ({ showSideDrawer: !prevState.showSideDrawer, }));
  };

  render() {
    const { children, } = this.props;
    const { showSideDrawer, } = this.state;
    return (
      <Aux>
        <SideDrawer
          closeSideDrawer={this.sideDrawerClosedHandler}
          SideDrawershowed={showSideDrawer}
        />
        <Toolbar toggleSideDrawer={this.sideDrawerToggleHandler} />
        <main className="content">{children}</main>
      </Aux>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
