import React from "react";
import PropTypes from "prop-types";

import("./Backdrop.css");

const backdrop = ({ click, }) => <div className="backdrop" onClick={click} />;

backdrop.propTypes = {
  click: PropTypes.func.isRequired,
};
export default backdrop;
