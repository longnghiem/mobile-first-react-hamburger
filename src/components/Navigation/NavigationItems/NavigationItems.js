import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import "./NavigationItems.css";

const navigationItems = () => (
  <ul className="navigationItems">
    <NavigationItem link="/" active>
      Burger Builder
    </NavigationItem>
  </ul>
);

export default navigationItems;
