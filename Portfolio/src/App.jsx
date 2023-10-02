import Navbar from "./Component/navbar/navbar";
import HomePage from "./Component/HomePage/Homepage";
import About from "./Component/About/About";
import Projects from "./Component/Project/Project";
//import MySkills1 from "./Component/MySkills/MySkills";
import Contact from "./Component/ContactaPage/ContactaPage";
import Footer from "./Component/footer/footer";

import { I18nextProvider } from "react-i18next";

import i18n from "./Component/LanguageSwitch/i18n";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React from "react";

function App() {
  // Function to handle language change

  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <React.Fragment>
          <Navbar />

          <Routes>
            <Route path="/Portfolio-" element={<HomePage />} />
            <Route path="/logo" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            {/*<Route
            path="/Skills"
            element={<MySkills1 selectedLanguage={selectedLanguage} />}
  />*/}
            <Route path="/Project" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>

          <Footer />
        </React.Fragment>
      </Router>
    </I18nextProvider>
  );
}

export default App;
