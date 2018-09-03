import React from "react";

import("./Input.css");

const input = (props) => {
  const { inputtype, label, } = props;
  let inputElement = null;
  switch (inputtype) {
    case "input":
      inputElement = <input className="inputElement" {...props} />;
      break;
    case "textarea":
      inputElement = <textarea className="inputElement" {...props} />;
      break;
    default:
      inputElement = <input className="inputElement" {...props} />;
  }
  return (
    <div className="input">
      <label>{label}</label>
      {inputElement}
    </div>
  );
};

export default input;
