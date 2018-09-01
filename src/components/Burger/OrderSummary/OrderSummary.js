import React from "react";
import PropTypes from "prop-types";
import Aux from "../../../hoc/Aux_Comp";

const orderSummary = (props) => {
  const { ingredients, } = props;
  const ingredientSummary = Object.keys(ingredients).map(key => (
    <li key={key}>
      <span style={{ textTransform: "capitalize", }}>{key}: </span>
      {ingredients[key]}
    </li>
  ));
  return (
    <Aux>
      <h3> Your order </h3>
      <p>A delicious burger with the following ingredients</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to checkout?</p>
      <button type="button">CANCEL</button>
      <button type="button">CONTINUE</button>
    </Aux>
  );
};

orderSummary.propTypes = {
  ingredients: PropTypes.shape({}).isRequired,
};

export default orderSummary;
