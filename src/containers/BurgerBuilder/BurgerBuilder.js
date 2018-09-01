import React, { Component, } from "react";

import Aux from "../../hoc/Aux_Comp";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

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
  };

  addIngredientHandler = (type) => {
    const { ingredients, totalPrice, } = this.state;
    const updatedIngredients = { ...ingredients, };
    updatedIngredients[type] += 1;

    const priceAddition = INGREDIENT_PRICES[type];
    let updatedTotalPrice = totalPrice;
    updatedTotalPrice += priceAddition;
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedTotalPrice,
    });
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
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedTotalPrice,
    });
  };

  render() {
    const { ingredients, totalPrice, } = this.state;
    const disableInfo = { ...ingredients, };

    Object.keys(disableInfo).forEach((key) => {
      disableInfo[key] = disableInfo[key] === 0;
    });

    return (
      <Aux>
        <Burger ingredients={ingredients} />
        <BuildControls
          addIngredient={this.addIngredientHandler}
          subtractIngredient={this.removeIngredientHandler}
          disabled={disableInfo}
          price={totalPrice}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
