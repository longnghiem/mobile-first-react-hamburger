import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const button = (props) => {
  const {
    click, children, btnType, type,
  } = props;
  /* eslint-disable */
  return (
    <button className={`${btnType} button`} type={type} onClick={click}>
      {children}
    </button>
  );
  /* eslint-enable */
};

button.propTypes = {
  click: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  btnType: PropTypes.string.isRequired,
  type: PropTypes.string,
};
button.defaultProps = {
  type: "button",
};

export default button;
