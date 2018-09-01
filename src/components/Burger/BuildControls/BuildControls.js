import React from "react";
import PropTypes from "prop-types";
import BuildControl from "./BuildControl/BuildControl";

import("./BuildControls.css");

const buildControls = (props) => {
  const {
    addIngredient, subtractIngredient, disabled, price,
  } = props;
  const controls = [
    { label: "Salad", type: "salad", },
    { label: "Cheese", type: "cheese", },
    { label: "Meat", type: "meat", },
    { label: "Bacon", type: "bacon", },
  ];
  return (
    <div className="buildControls">
      <p>
        Current price: <strong>{price.toFixed(2)}</strong>
      </p>
      {controls.map(control => (
        <BuildControl
          key={control.label}
          label={control.label}
          add={() => addIngredient(control.type)}
          subtract={() => subtractIngredient(control.type)}
          disabled={disabled[control.type]}
        />
      ))}
    </div>
  );
};

buildControls.propTypes = {
  addIngredient: PropTypes.func.isRequired,
  subtractIngredient: PropTypes.func.isRequired,
  disabled: PropTypes.shape({}).isRequired,
  price: PropTypes.number.isRequired,
};

export default buildControls;
