import React, { Component, } from "react";
import PropTypes from "prop-types";
import { Route, } from "react-router-dom";
import { connect, } from "react-redux";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
  checkoutContinuedHandler = () => {
    const { history, } = this.props;
    history.replace("/checkout/contact-data");
  };

  checkoutCancelledHandler = () => {
    const { history, } = this.props;
    history.goBack();
  };

  render() {
    const { match, ingredients, totalPrice, } = this.props;
    return (
      <div>
        <CheckoutSummary
          ingredients={ingredients}
          checkoutContinued={this.checkoutContinuedHandler}
          checkoutCancelled={this.checkoutCancelledHandler}
        />
        <Route
          path={`${match.path}/contact-data`}
          render={() => (
            <ContactData {...this.props} ingredients={ingredients} price={totalPrice} />
          )}
        />
      </div>
    );
  }
}

Checkout.propTypes = {
  history: PropTypes.shape({}).isRequired,
  match: PropTypes.shape({}).isRequired,
  ingredients: PropTypes.shape({}).isRequired,
  totalPrice: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  ingredients: state.ingre.ingredients,
  totalPrice: state.ingre.totalPrice,
});

export default connect(mapStateToProps)(Checkout);
