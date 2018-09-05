import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import "./NavigationItems.css";

const navigationItems = () => (
  <ul className="navigationItems">
    <NavigationItem link="/mobile-first-react-hamburger" active>
      Burger Builder
    </NavigationItem>
  </ul>
);

export default navigationItems;
