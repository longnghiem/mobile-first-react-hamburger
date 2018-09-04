import { combineReducers, } from "redux";
import { reducer as formReducer, } from "redux-form";
import ingredientsReducer from "./ingredients";

export default combineReducers({ ingre: ingredientsReducer, form: formReducer, });

/* export const getForgottenIngredients = (state) => {
  const forgottenIngredients = [];
  Object.keys(state.ingredients).forEach((key) => {
    if (state.ingredients[key] === 0) {
      forgottenIngredients.push(key);
    }
  });
  return forgottenIngredients;
}; */

export const getAllIngredients = state => state.ingre.ingredients;
export const getTotalPrice = state => state.ingre.totalPrice;
