import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Form from "./form";
import FormRef from "./formRef";
import FormState from "./formState";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
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
        </nav>

        <Route path="/form" component={Form} />
        <Route path="/form-ref" component={FormRef} />
        <Route path="/form-state" component={FormState} />
      </div>
    </Router>
  );
};

export default App;
