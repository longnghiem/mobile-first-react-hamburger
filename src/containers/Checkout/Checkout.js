import React, { Component, } from "react";
import PropTypes from "prop-types";
import { Route, } from "react-router-dom";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
  state = {
    ingredients: null,
    totalPrice: 0,
  };

  // componentWillMount is triggered before the rendering of Checkout, therefore it is ok to have
  // the initial state as null
  componentWillMount() {
    const { ingredients, } = this.state;
    const { location, } = this.props;
    let price = 0;
    const query = new URLSearchParams(location.search);
    /* location.search =  ?salad=1&bacon=0&cheese=2&meat=2 */
    const currentIngredients = {};
    /* eslint-disable */
    for (const param of query.entries()) {
      if (param[0] === "price") {
        price = Number(param[1]);
      } else {
        currentIngredients[param[0]] = Number(param[1]);
      }
    }
    /* eslint-enable */
    this.setState({
      ingredients: currentIngredients,
      totalPrice: price,
    });
  }

  checkoutContinuedHandler = () => {
    const { history, } = this.props;
    history.replace("/checkout/contact-data");
  };

  checkoutCancelledHandler = () => {
    const { history, } = this.props;
    history.goBack();
  };

  render() {
    const { ingredients, totalPrice, } = this.state;
    const { match, } = this.props;
    return (
      <div>
        <CheckoutSummary
          ingredients={ingredients}
          checkoutContinued={this.checkoutContinuedHandler}
          checkoutCancelled={this.checkoutCancelledHandler}
        />
        <Route
          path={`${match.path}/contact-data`}
          render={() => <ContactData ingredients={ingredients} price={totalPrice} />}
        />
      </div>
    );
  }
}

Checkout.propTypes = {
  history: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({}).isRequired,
  match: PropTypes.shape({}).isRequired,
};

export default Checkout;
