import React, { Component, } from "react";
import { connect, } from "react-redux";

import PropTypes from "prop-types";
import Aux from "../../hoc/Aux_Comp";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import * as Actions from "../../store/actions";
import { getTotalPrice, getAllIngredients, } from "../../store/reducers";

class BurgerBuilder extends Component {
  state = {
    purchasing: false,
  };

  enableOrderBtn = () => {
    const { ingredients, } = this.props;
    const amountOfIngredients = Object.values(ingredients).reduce((sum, value) => sum + value);
    return amountOfIngredients > 0;
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true, });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false, });
  };

  purchaseContinueHandler = () => {
    const { history, } = this.props;
    history.push("/checkout");
  };

  render() {
    const { purchasing, } = this.state;
    const {
      ingredients, totalPrice, add, remove,
    } = this.props;
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
          addIngredient={add}
          subtractIngredient={remove}
          disabled={disableInfo}
          price={totalPrice}
          purchasable={this.enableOrderBtn()}
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
  ingredients: getAllIngredients(state),
  totalPrice: getTotalPrice(state),
});

const mapDispatchToProps = dispatch => ({
  add: ingreName => dispatch(Actions.addIngredient(ingreName)),
  remove: ingreName => dispatch(Actions.removeIngredient(ingreName)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BurgerBuilder);
