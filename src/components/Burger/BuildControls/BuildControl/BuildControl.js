import React from "react";
import "./BuildControl.css";
import PropTypes from "prop-types";

const buildControl = (props) => {
  const {
    label, add, subtract, disabled,
  } = props;
  return (
    <div className="buildControl">
      <div className="label">{label}</div>
      <button type="button" className="less" onClick={subtract} disabled={disabled}>
        Less
      </button>
      <button type="button" className="more" onClick={add}>
        More
      </button>
    </div>
  );
};

buildControl.propTypes = {
  label: PropTypes.string.isRequired,
  add: PropTypes.func.isRequired,
  subtract: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default buildControl;
