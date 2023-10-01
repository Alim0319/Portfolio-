import Navbar from "./Component/navbar/navbar";
import HomePage from "./Component/HomePage/Homepage";
import About from "./Component/About/About";
import Projects from "./Component/Project/Project";
//import MySkills1 from "./Component/MySkills/MySkills";
import Contact from "./Component/ContactaPage/ContactaPage";
import Footer from "./Component/footer/footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React from "react";
import { useState } from "react";

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const handleLanguageChange = (newLanguage) => {
    setSelectedLanguage(newLanguage);
  };

  return (
    <Router>
      <React.Fragment>
        <Navbar
          selectedLanguage={selectedLanguage}
          onLanguageChange={handleLanguageChange}
        />

        <Routes>
          <Route
            path="/Portfolio-"
            element={<HomePage selectedLanguage={selectedLanguage} />}
          />
          <Route
            path="/logo"
            element={<HomePage selectedLanguage={selectedLanguage} />}
          />
          <Route
            path="/home"
            element={<HomePage selectedLanguage={selectedLanguage} />}
          />
          <Route
            path="/about"
            element={<About selectedLanguage={selectedLanguage} />}
          />
          {/*<Route
            path="/Skills"
            element={<MySkills1 selectedLanguage={selectedLanguage} />}
  />*/}
          <Route
            path="/Project"
            element={<Projects selectedLanguage={selectedLanguage} />}
          />
          <Route
            path="/Contact"
            element={<Contact selectedLanguage={selectedLanguage} />}
          />
        </Routes>

        <Footer />
      </React.Fragment>
    </Router>
  );
}

export default App;
