import React from "react";
import PropTypes from "prop-types";
import "./DrawerToggle.css";

const drawerToggle = (props) => {
  const { click, } = props;
  return (
    <div className="drawerToggle" onClick={click}>
      <div />
      <div />
      <div />
    </div>
  );
};

drawerToggle.propTypes = {
  click: PropTypes.func.isRequired,
};

export default drawerToggle;
