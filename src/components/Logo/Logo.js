import { withRouter, } from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";
import burgerLogo from "../../assets/images/burger-logo.png";
import "./Logo.css";

const logo = (props) => {
  const goHome = () => {
    const { history, } = props;
    history.push("/");
  };
  return (
    <div className="logo" onClick={() => goHome()}>
      <img src={burgerLogo} alt="Burger Logo" />
    </div>
  );
};

logo.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

export default withRouter(logo);
