import React from "react";
import PropTypes from "prop-types";

const button = (props) => {
  const { click, children, } = props;
  return (
    <button type="button" onClick={click}>
      {children}
    </button>
  );
};

button.propTypes = {
  click: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default button;
