import React, { Component, } from "react";
import Button from "../../../components/UI/Button/Button";
import "./ContactData.css";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
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
          <Button btnType="success" click type="submit">
            ORDER
          </Button>
        </form>
      </div>
    );
  }
}

export default ContactData;