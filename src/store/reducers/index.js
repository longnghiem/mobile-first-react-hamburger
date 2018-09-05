import { combineReducers, } from "redux";
import { reducer as formReducer, } from "redux-form";
import ingredientsReducer from "./ingredients";

export default combineReducers({ ingre: ingredientsReducer, form: formReducer, });

export const getAllIngredients = state => state.ingre.ingredients;
export const getTotalPrice = state => state.ingre.totalPrice;
