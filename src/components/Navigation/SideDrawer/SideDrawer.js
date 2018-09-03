import React from "react";
import PropTypes from "prop-types";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Aux_Comp";

import("./SideDrawer.css");

const sideDrawer = (props) => {
  const { closeSideDrawer, SideDrawershowed, } = props;
  const sideDrawerClasses = SideDrawershowed ? "sideDrawer open" : "sideDrawer close";
  return (
    <Aux>
      {SideDrawershowed && <Backdrop click={closeSideDrawer} />}
      <div className={sideDrawerClasses}>
        <div className="logoSideDrawer">
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

sideDrawer.propTypes = {
  closeSideDrawer: PropTypes.func.isRequired,
  SideDrawershowed: PropTypes.bool.isRequired,
};

export default sideDrawer;
