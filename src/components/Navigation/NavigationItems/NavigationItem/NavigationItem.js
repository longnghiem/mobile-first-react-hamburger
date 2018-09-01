import React from "react";
import "./NavigationItem.css";
import PropTypes from "prop-types";

const navigationItem = (props) => {
  const { children, link, active, } = props;
  return (
    <li className="navigationItem">
      <a href={link} className={active ? "active" : null}>
        {children}
      </a>
    </li>
  );
};

navigationItem.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

navigationItem.defaultProps = {
  active: false,
};

export default navigationItem;
