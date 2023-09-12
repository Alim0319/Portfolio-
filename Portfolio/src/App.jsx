import Navbar from "./Component/navbar/navbar";
import HomePage from "./Component/HomePage/Homepage";
import About from "./Component/About/About";
import Projects from "./Component/Project/Project";
import MySkills1 from "./Component/MySkills/MySkills1";
import Contact from "./Component/ContactaPage/contact";
import Footer from "./Component/footer/footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React from "react";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Navbar />

        <Routes>
          <Route path="/Portfolio-" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/Skilis" element={<MySkills1 />} />
          <Route path="/Project" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </React.Fragment>
    </Router>
  );
}

export default App;
