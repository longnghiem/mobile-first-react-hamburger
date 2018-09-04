import React from "react";
import { Field, reduxForm, } from "redux-form";
import PropTypes from "prop-types";
import Button from "../../../components/UI/Button/Button";
import "./ContactData.css";

const contactData = (props) => {
  const {
    ingredients, price, history, handleSubmit,
  } = props;
  const orderHandler = (event) => {
    event.preventDefault();
    console.log("ordered ingredients: ", ingredients);
    console.log("price: ", price);
    alert("order confirmed");
    history.push("/");
  };

  return (
    <div className="contactData">
      <h4>Please enter your contact info</h4>
      <form onSubmit={handleSubmit}>
        <Field
          className="input"
          name="name"
          component="input"
          type="text"
          placeholder="Your Name"
        />
        <Field
          className="input"
          name="email"
          component="input"
          type="email"
          placeholder="Your Email"
        />
        <Field className="input" name="street" component="input" type="text" placeholder="Street" />
        <Field
          className="input"
          name="postal"
          component="input"
          type="text"
          placeholder="Postal Code"
        />

        <div className="gender">
          <label htmlFor="male">
            <Field name="gender" id="male" component="input" type="radio" value="male" /> Male
          </label>
          <label htmlFor="female">
            <Field name="gender" id="female" component="input" type="radio" value="female" /> Female
          </label>
        </div>

        <Button btnType="success" click={orderHandler} type="submit">
          ORDER
        </Button>
      </form>
    </div>
  );
};

contactData.propTypes = {
  ingredients: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,
  price: PropTypes.number.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: "contact",
})(contactData);
