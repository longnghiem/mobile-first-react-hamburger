import React, { Component, } from "react";
import { connect, } from "react-redux";

import PropTypes from "prop-types";
import Aux from "../../hoc/Aux_Comp";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import * as actionTypes from "../../store/actions";

class BurgerBuilder extends Component {
  state = {
    purchasing: false,
  };

  updatePurchaseState = () => {
    const { ingredients, } = this.props;
    const amountOfIngredients = Object.values(ingredients).reduce((sum, value) => sum + value);
    return amountOfIngredients > 0;
  };

  addIngredientHandler = (type) => {
    const { add, } = this.props;
    add(type);
  };

  removeIngredientHandler = (type) => {
    const { remove, } = this.props;
    remove(type);
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true, });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false, });
  };

  purchaseContinueHandler = () => {
    const { ingredients, history, totalPrice, } = this.props;

    // constructing the query string containing ingredients
    const queryParams = [];
    Object.keys(ingredients).forEach((key) => {
      queryParams.push(`${encodeURIComponent(key)}=${encodeURIComponent(ingredients[key])}`);
    });
    queryParams.push(`price=${totalPrice}`);
    const queryString = queryParams.join("&");
    history.push({
      pathname: "/checkout",
      search: `?${queryString}`,
    });
    // http://localhost:3000/checkout?salad=3&bacon=0&cheese=0&meat=0
  };

  render() {
    const { purchasing, } = this.state;
    const { ingredients, totalPrice, } = this.props;
    const disableInfo = { ...ingredients, };

    Object.keys(disableInfo).forEach((key) => {
      disableInfo[key] = disableInfo[key] === 0;
    });

    return (
      <Aux>
        {purchasing && (
          <Modal modalClosed={this.purchaseCancelHandler}>
            <OrderSummary
              ingredients={ingredients}
              purchaseContinue={this.purchaseContinueHandler}
              modalClosed={this.purchaseCancelHandler}
              totalPrice={totalPrice}
            />
          </Modal>
        )}
        <Burger ingredients={ingredients} />
        <BuildControls
          addIngredient={this.addIngredientHandler}
          subtractIngredient={this.removeIngredientHandler}
          disabled={disableInfo}
          price={totalPrice}
          purchasable={this.updatePurchaseState()}
          order={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

BurgerBuilder.propTypes = {
  history: PropTypes.shape({}).isRequired,
  ingredients: PropTypes.shape({}).isRequired,
  add: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  totalPrice: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  ingredients: state.ingre.ingredients,
  totalPrice: state.ingre.totalPrice,
});

const mapDispatchToProps = dispatch => ({
  add: ingredientName => dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientName, }),
  remove: ingredientName => dispatch({ type: actionTypes.REMOVE_INGREDIENT, ingredientName, }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BurgerBuilder);
