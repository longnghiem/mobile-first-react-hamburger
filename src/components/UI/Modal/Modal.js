import React, { Component, } from "react";
import "./Modal.css";
import PropTypes from "prop-types";
import Aux from "../../../hoc/Aux_Comp";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
  // Avoid rerendering Modal and OrderSummary when Modal is not showed
  shouldComponentUpdate(nextProps, nextState) {
    const { show, } = this.props;
    return nextProps.show !== show;
  }

  componentWillUpdate() {
    console.log("Modal will update");
  }

  render() {
    const { show, children, modalClosed, } = this.props;
    return (
      <Aux>
        <Backdrop show={show} click={modalClosed} />
        <div
          className="modal"
          style={{
            opacity: show ? "1" : "0",
            transform: show ? "translateY(0)" : "translateY(-100vh)",
          }}>
          {children}
        </div>
      </Aux>
    );
  }
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  modalClosed: PropTypes.func.isRequired,
};

export default Modal;
