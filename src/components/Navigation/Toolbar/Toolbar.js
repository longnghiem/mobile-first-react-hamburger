import React from "react";
import "./Toolbar.css";
import PropTypes from "prop-types";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const toolbar = (props) => {
  const { toggleSideDrawer, } = props;
  return (
    <header className="toolbar">
      <DrawerToggle click={toggleSideDrawer} />
      <div className="logoToolbar">
        <Logo />
      </div>
      <nav className="desktopOnly">
        <NavigationItems />
      </nav>
    </header>
  );
};

toolbar.propTypes = {
  toggleSideDrawer: PropTypes.func.isRequired,
};

export default toolbar;
