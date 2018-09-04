import React, { Component, } from "react";
import PropTypes from "prop-types";
import Button from "../../../components/UI/Button/Button";
import Input from "../../../components/UI/Input/Input";
import "./ContactData.css";

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name",
        },
        value: "",
      },
      email: "",
      street: "",
      postalCode: "",
    },
  };

  orderHandler = (event) => {
    const { ingredients, price, history, } = this.props;
    event.preventDefault();
    console.log("ordered ingredients: ", ingredients);
    console.log("price: ", price);
    console.log("props: ", this.props);
    alert("order confirmed");
    history.push("/");
  };

  render() {
    return (
      <div className="contactData">
        <h4>Please enter your contact info</h4>
        <form>
          <Input inputtype="input" type="text" name="name" placeholder="Your name" />
          <Input inputtype="input" type="email" name="email" placeholder="Your email" />
          <Input inputtype="input" type="text" name="street" placeholder="Street" />
          <Input inputtype="input" type="text" name="postal" placeholder="Postal Code" />
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
  history: PropTypes.shape({}).isRequired,
  price: PropTypes.number.isRequired,
};

export default ContactData;
