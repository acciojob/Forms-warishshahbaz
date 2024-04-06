import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Form from "./form";
import FormRef from "./formRef";
import FormState from "./formState";

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/" id="form-link">
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
      </nav>
      <Routes>
        <Route index path="/" element={<Form />} />
        <Route path="/form-ref" element={<FormRef />} />
        <Route path="/form-state" element={<FormState />} />
      </Routes>
    </Router>
  );
};

export default App;
