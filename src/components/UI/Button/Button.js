import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const button = (props) => {
  const { click, children, btnType, } = props;
  return (
    <button className={`${btnType} button`} type="button" onClick={click}>
      {children}
    </button>
  );
};

button.propTypes = {
  click: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  btnType: PropTypes.string.isRequired,
};

export default button;
