import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

const Form = () => {
  return (
    <>
      <Card>
        <form id="info-form">
          <label htmlFor="full_name">Full Name:</label>
          <input type="text" id="full_name" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />

          <label htmlFor="password_confirmation">Confirm Password:</label>
          <input type="password" id="password_confirmation" />

          <button type="submit">Submit</button>
        </form>
      </Card>
    </>
  );
};

export default Form;
