import Navbar from "./Component/navbar/navbar";
import HomePage from "./Component/HomePage/Homepage";
import About from "./Component/About/About";
import Projects from "./Component/Project/Project";
import MySkills1 from "./Component/MySkills/MySkills";
import Contact from "./Component/ContactaPage/ContactaPage";
import Footer from "./Component/footer/footer";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import React from "react";

//import ReactDOM from "react-dom";
import App from "./App.jsx"; // Import your App component and other necessary components

import { createRoot } from "react-dom";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Portfolio-" element={<App />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/Portfolio-/Skilis" element={<MySkills1 />} />
        <Route path="/Portfolio-/Project" element={<Projects />} />
        <Route path="/Portfolio-/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
