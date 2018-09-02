import React, { Component, } from "react";
import PropTypes from "prop-types";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      bacon: 1,
      cheess: 1,
    },
  };

  componentDidMount() {
    const { ingredients, } = this.state;
    const { location, } = this.props;
    const query = new URLSearchParams(location.search);
    /* location.search =  ?salad=1&bacon=0&cheese=2&meat=2 */
    const currentIngredients = {};
    for (const param of query.entries()) {
      currentIngredients[param[0]] = +param[1];
    }
    this.setState({
      ingredients: currentIngredients,
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
    const { ingredients, } = this.state;
    return (
      <div>
        <CheckoutSummary
          ingredients={ingredients}
          checkoutContinued={this.checkoutContinuedHandler}
          checkoutCancelled={this.checkoutCancelledHandler}
        />
      </div>
    );
  }
}

Checkout.propTypes = {
  history: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({}).isRequired,
};

export default Checkout;
