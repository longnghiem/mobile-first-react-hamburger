import React, { Component, } from "react";
import Button from "../../../components/UI/Button/Button";
import "./ContactData.css";
import PropTypes from "prop-types";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
  };

  orderHandler = (event) => {
    const { ingredients, } = this.props;
    event.preventDefault();
    console.log("ordered ingredients: ", ingredients);
    alert("order confirmed");
  };

  render() {
    return (
      <div className="contactData">
        <h4>Please enter your contact info</h4>
        <form>
          <input type="text" name="name" placeholder="Your name" />
          <input type="email" name="email" placeholder="Your email" />
          <input type="text" name="street" placeholder="Street" />
          <input type="text" name="postal" placeholder="Postal Code" />
          <Button btnType="success" click={this.orderHandler} type="submit">
            ORDER
          </Button>
        </form>
      </div>
    );
  }
}

ContactData.propTypes = {
  ingredients: PropTypes.shape({}).isRequired,
};

export default ContactData;
