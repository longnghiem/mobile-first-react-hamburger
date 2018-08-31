import React from "react";

const burgerIngredient = (props) => {
  const { type, } = props;
  let ingredient = null;

  switch (type) {
    default:
      ingredient = null;
      break;
    case "bread-bottom":
      ingredient = <div className="breadBottom" />;
      break;
    case "bread-top":
      ingredient = (
        <div className="breadTop">
          <div className="seed1" />
          <div className="seed2" />
        </div>
      );
      break;
    case "meat":
      ingredient = <div className="meat" />;
      break;
    case "cheese":
      ingredient = <div className="cheese" />;
      break;
    case "salad":
      ingredient = <div className="salad" />;
      break;
    case "bacon":
      ingredient = <div className="bacon" />;
      break;
  }
  return ingredient;
};

export default burgerIngredient;
