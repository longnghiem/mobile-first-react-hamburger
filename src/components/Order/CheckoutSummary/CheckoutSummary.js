import React from "react";
import PropTypes from "prop-types";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import "./CheckoutSummary.css";

const checkoutSummary = (props) => {
  const { ingredients, checkoutCancelled, checkoutContinued, } = props;
  return (
    <div className="checkoutSummary">
      <h1>Your burger is ready!</h1>
      <div stype={{ width: "100%", margin: "auto", }}>
        <Burger ingredients={ingredients} />
      </div>
      <Button btnType="danger" click={checkoutCancelled}>
        CANCEL
      </Button>
      <Button btnType="success" click={checkoutContinued}>
        CONTINUE
      </Button>
    </div>
  );
};

checkoutSummary.propTypes = {
  ingredients: PropTypes.shape({}).isRequired,
  checkoutCancelled: PropTypes.func.isRequired,
  checkoutContinued: PropTypes.func.isRequired,
};

export default checkoutSummary;
