import React, { Component, } from "react";
import "./Modal.css";
import PropTypes from "prop-types";
import Aux from "../../../hoc/Aux_Comp";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
  componentWillUpdate() {
    console.log("Modal will update");
  }

  render() {
    const { children, modalClosed, } = this.props;
    return (
      <Aux>
        <Backdrop click={modalClosed} />
        <div className="modal">{children}</div>
      </Aux>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  modalClosed: PropTypes.func.isRequired,
};

export default Modal;
