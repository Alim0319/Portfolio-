import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
//import ReactDOM from "react-dom";
import App from "./App.jsx"; // Import your App component and other necessary components

import { createRoot } from "react-dom";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/Portfolio-" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
