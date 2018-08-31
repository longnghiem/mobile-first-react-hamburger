import React from "react";
import "./Burger.css";
import BurgerIngredient from "./Burgeringredient/Burgeringredient";

const burger = () => (
  <div className="burger">
    <BurgerIngredient type="bread-top" />
    <BurgerIngredient type="cheese" />
    <BurgerIngredient type="meat" />
    <BurgerIngredient type="bread-bottom" />
  </div>
);

export default burger;
