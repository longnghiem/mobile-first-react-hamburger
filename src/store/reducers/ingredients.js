import * as actionTypes from "../actions";

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
      };
    }
  }
};

export default ingredientsReducer;
