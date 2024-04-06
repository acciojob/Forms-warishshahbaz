import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Form from "./form";
import FormRef from "./formRef";
import FormState from "./formState";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/form-ref" element={<FormRef />} />
        <Route path="/form-state" element={<FormState />} />
      </Routes>
    </Router>
  );
};

export default App;
