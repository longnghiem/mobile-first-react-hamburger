import React, { Component, } from "react";
import PropTypes from "prop-types";
import Aux from "../../../hoc/Aux_Comp";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  componentWillUpdate() {
    console.log("[OrderSummary] will update");
  }

  render() {
    const {
      ingredients, modalClosed, purchaseContinue, totalPrice,
    } = this.props;
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
        <p>
          <strong>Total price is: ${totalPrice.toFixed(2)}</strong>
        </p>
        <Button click={modalClosed} btnType="danger">
          CANCEL
        </Button>
        <Button btnType="success" click={purchaseContinue}>
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

OrderSummary.propTypes = {
  ingredients: PropTypes.shape({}).isRequired,
  modalClosed: PropTypes.func.isRequired,
  purchaseContinue: PropTypes.func.isRequired,
  totalPrice: PropTypes.number.isRequired,
};

export default OrderSummary;
