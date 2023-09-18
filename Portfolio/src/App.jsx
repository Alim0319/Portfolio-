import Navbar from "./Component/navbar/navbar";
import HomePage from "./Component/HomePage/Homepage";
import About from "./Component/About/About";
import Projects from "./Component/Project/Project";
import MySkills1 from "./Component/MySkills/MySkills";
import Contact from "./Component/ContactaPage/ContactaPage";
import Footer from "./Component/footer/footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React from "react";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <HomePage />
        <About />
        <MySkills1 />
        <Projects />
        <Contact />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Portfolio-/home" element={<HomePage />} />
          <Route path="/Portfolio-/about" element={<About />} />
          <Route path="/Portfolio-/Skilis" element={<MySkills1 />} />
          <Route path="/Portfolio-/Project" element={<Projects />} />
          <Route path="/Portfolio-/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </React.Fragment>
    </Router>
  );
}

export default App;
