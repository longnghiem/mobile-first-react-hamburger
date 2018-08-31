import React from "react";

const burgerIngredient = (props) => {
  const { type, } = props;
  let ingredient = null;

  switch (type) {
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
  }
};

export default burgerIngredient;
