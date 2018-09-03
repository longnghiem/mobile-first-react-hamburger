import React, { Component, } from "react";

import PropTypes from "prop-types";
import Aux from "../../hoc/Aux_Comp";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.5,
  bacon: 1,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
  };

  updatePurchaseState = () => {
    const { ingredients, } = this.state;
    const ingredientsCopy = { ...ingredients, };
    const amountOfIngredients = Object.values(ingredientsCopy).reduce((sum, value) => sum + value);
    this.setState({
      purchasable: amountOfIngredients > 0,
    });
  };

  addIngredientHandler = (type) => {
    const { ingredients, totalPrice, } = this.state;
    const updatedIngredients = { ...ingredients, };
    updatedIngredients[type] += 1;

    const priceAddition = INGREDIENT_PRICES[type];
    let updatedTotalPrice = totalPrice;
    updatedTotalPrice += priceAddition;
    this.setState(
      {
        ingredients: updatedIngredients,
        totalPrice: updatedTotalPrice,
      },
      () => {
        this.updatePurchaseState();
      }
    );
  };

  removeIngredientHandler = (type) => {
    const { ingredients, totalPrice, } = this.state;
    const updatedIngredients = { ...ingredients, };
    if (updatedIngredients[type] === 0) {
      return;
    }
    updatedIngredients[type] -= 1;

    const priceSubtraction = INGREDIENT_PRICES[type];
    let updatedTotalPrice = totalPrice;
    updatedTotalPrice -= priceSubtraction;
    this.setState(
      {
        ingredients: updatedIngredients,
        totalPrice: updatedTotalPrice,
      },
      () => {
        this.updatePurchaseState();
      }
    );
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true, });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false, });
  };

  purchaseContinueHandler = () => {
    const { history, } = this.props;
    const { ingredients, } = this.state;

    // constructing the query string containing ingredients
    const queryParams = [];
    Object.keys(ingredients).forEach((key) => {
      queryParams.push(`${encodeURIComponent(key)}=${encodeURIComponent(ingredients[key])}`);
    });
    const queryString = queryParams.join("&");

    history.push({
      pathname: "/checkout",
      search: `?${queryString}`,
    });
    // http://localhost:3000/checkout?salad=3&bacon=0&cheese=0&meat=0
  };

  render() {
    const {
      ingredients, totalPrice, purchasable, purchasing,
    } = this.state;
    const disableInfo = { ...ingredients, };

    Object.keys(disableInfo).forEach((key) => {
      disableInfo[key] = disableInfo[key] === 0;
    });

    return (
      <Aux>
       {purchasing && <Modal modalClosed={this.purchaseCancelHandler}>
          <OrderSummary
            ingredients={ingredients}
            purchaseContinue={this.purchaseContinueHandler}
            modalClosed={this.purchaseCancelHandler}
            totalPrice={totalPrice}
          />
        </Modal>}
        <Burger ingredients={ingredients} />
        <BuildControls
          addIngredient={this.addIngredientHandler}
          subtractIngredient={this.removeIngredientHandler}
          disabled={disableInfo}
          price={totalPrice}
          purchasable={purchasable}
          order={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

BurgerBuilder.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

export default BurgerBuilder;
