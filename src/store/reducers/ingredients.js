import * as actionTypes from "../actions";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.5,
  bacon: 1,
};
const initialState = {
  ingredients: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  },
  totalPrice: 5,
};

const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
      };
    case actionTypes.REMOVE_INGREDIENT: {
      const updatedIngredientAmount = state.ingredients[action.ingredientName] > 0
        ? state.ingredients[action.ingredientName] - 1
        : state.ingredients[action.ingredientName];
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: updatedIngredientAmount,
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
      };
    }
  }
};

export default ingredientsReducer;
