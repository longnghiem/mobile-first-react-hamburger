import * as actionTypes from "./actionTypes";

export const addIngredient = ingreName => ({
  type: actionTypes.ADD_INGREDIENT,
  ingredientName: ingreName,
});

export const removeIngredient = ingreName => ({
  type: actionTypes.REMOVE_INGREDIENT,
  ingredientName: ingreName,
});
