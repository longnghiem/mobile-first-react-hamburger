import React from "react";
import PropTypes from "prop-types";
import BuildControl from "./BuildControl/BuildControl";

import("./BuildControls.css");

const buildControls = (props) => {
  const {
    addIngredient, subtractIngredient, disabled, price, purchasable, order,
  } = props;
  const controls = [
    { label: "Salad", type: "salad", },
    { label: "Bacon", type: "bacon", },
    { label: "Cheese", type: "cheese", },
    { label: "Meat", type: "meat", },
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
      <button type="button" className="orderButton" disabled={!purchasable} onClick={order}>
        ORDER NOW
      </button>
    </div>
  );
};

buildControls.propTypes = {
  addIngredient: PropTypes.func.isRequired,
  subtractIngredient: PropTypes.func.isRequired,
  disabled: PropTypes.shape({}).isRequired,
  price: PropTypes.number.isRequired,
  purchasable: PropTypes.bool.isRequired,
  order: PropTypes.func.isRequired,
};

export default buildControls;
