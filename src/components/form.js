import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

const Form = () => {
  return (
    <>
      {/* <nav>
        <ul>
          <li>
            <Link to="/form" id="form-link">
              Form
            </Link>
          </li>
          <li>
            <Link to="/form-ref" id="form-ref-link">
              Form with useRef
            </Link>
          </li>
          <li>
            <Link to="/form-state" id="form-state-link">
              Form with useState
            </Link>
          </li>
        </ul>
      </nav> */}
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
