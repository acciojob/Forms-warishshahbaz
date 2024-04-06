import React, { useRef } from "react";
import Card from "./Card";

const FormRef = () => {
  // Create refs for each input field
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Access input values using refs
    const fullName = fullNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    // Handle form submission logic here
  };

  return (
    <Card>
      <form id="info-form" onSubmit={handleSubmit}>
        <label htmlFor="full_name">Full Name:</label>
        <input type="text" id="full_name" ref={fullNameRef} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" ref={emailRef} />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" ref={passwordRef} />

        <label htmlFor="password_confirmation">Confirm Password:</label>
        <input
          type="password"
          id="password_confirmation"
          ref={confirmPasswordRef}
        />

        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

export default FormRef;
