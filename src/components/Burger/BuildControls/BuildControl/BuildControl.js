import React from "react";
import "./BuildControl.css";
import PropTypes from "prop-types";

const buildControl = (props) => {
  const { label, } = props;
  return (
    <div className="buildControl">
      <div className="label">{label}</div>
      <button type="button" className="less">
        Less
      </button>
      <button type="button" className="more">
        More
      </button>
    </div>
  );
};

buildControl.propTypes = {
  label: PropTypes.string.isRequired,
};

export default buildControl;
