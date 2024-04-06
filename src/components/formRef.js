// FormRef.js
import React, { useRef } from "react";
import Card from "./Card";

const FormRef = () => {
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmationRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullName = fullNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const passwordConfirmation = passwordConfirmationRef.current.value;

    // Add form submission logic here
    console.log("Submitted using useRef:");
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", passwordConfirmation);
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
          ref={passwordConfirmationRef}
        />

        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

export default FormRef;
