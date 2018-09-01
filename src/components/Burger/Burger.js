import React from "react";
import "./Burger.css";
import PropTypes from "prop-types";
import BurgerIngredient from "./Burgeringredient/Burgeringredient";

const burger = ({ ingredients, }) => {
  // [...Array(3),] returns [undefined, undefined, undefined]
  // console.log([...Array("a", "b"), ...Array(3),]);
  let transformedIngredients = Object.keys(ingredients)
    .map(ingreKeyName =>
      [...Array(ingredients[ingreKeyName]),].map((_, index) => (
        <BurgerIngredient key={ingreKeyName + index} type={ingreKeyName} />
      )))
    .reduce((arr, el) => arr.concat(el), []); // converting nested array into normal array
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please add ingredients!</p>;
  }
  return (
    <div className="burger">
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

burger.propTypes = {
  ingredients: PropTypes.shape({}).isRequired,
};

export default burger;
