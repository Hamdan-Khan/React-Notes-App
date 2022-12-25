import React from "react";
import ReactDOM from "react-dom/client";
// import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";
// import { AppProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Router>
  <React.StrictMode>
    {/* <AppProvider> */}
    <App />
    {/* </AppProvider> */}
  </React.StrictMode>
  /* </Router> */
);
