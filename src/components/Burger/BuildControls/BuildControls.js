import React from "react";
import BuildControl from "./BuildControl/BuildControl";

import("./BuildControls.css");

const buildControls = (props) => {
  const controls = [
    { label: "Salad", type: "salad", },
    { label: "Cheese", type: "cheese", },
    { label: "Meat", type: "meat", },
    { label: "Bacon", type: "bacon", },
  ];
  return (
    <div className="buildControls">
      {controls.map(control => (
        <BuildControl key={control.label} label={control.label} />
      ))}
    </div>
  );
};

export default buildControls;
