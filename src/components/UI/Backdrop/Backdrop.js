import React from "react";
import PropTypes from "prop-types";

import("./Backdrop.css");

const backdrop = ({ show, click, }) => (show ? <div className="backdrop" onClick={click} /> : null);

backdrop.propTypes = {
  show: PropTypes.bool.isRequired,
  click: PropTypes.func.isRequired,
};
export default backdrop;
