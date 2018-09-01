import React from "react";
import "./Modal.css";
import PropTypes from "prop-types";
import Aux from "../../../hoc/Aux_Comp";
import Backdrop from "../Backdrop/Backdrop";

const modal = (props) => {
  const { show, children, modalClosed, } = props;
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
};

modal.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  modalClosed: PropTypes.func.isRequired,
};

export default modal;
