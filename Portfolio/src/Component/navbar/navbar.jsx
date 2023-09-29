import { FaBars, FaTimes, FaHome } from "react-icons/fa";
import { useRef } from "react";
import { Link } from "react-router-dom";
import resume from "../images/CV_Alim .pdf";
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";
import PropTypes from "prop-types";

import "../styles/main.css";

function Navbar({ selectedLanguage, onLanguageChange }) {
  const navRef = useRef();

  const text = {
    en: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      resume: "Download Resume",
      contact: "Contact",
    },
    no: {
      home: "Hjem",
      about: "Om meg",
      skills: "Ferdigheter",
      projects: "Prosjekter",
      resume: "Last ned CV",
      contact: "Kontakt",
    },
  };

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <div className="logo">
        <Link to="/Home">
          <img src="logo-color.png" alt="Logo" />
        </Link>
      </div>
      <nav ref={navRef}>
        <ul className="nav-list">
          <li>
            <Link to="/Home">
              <FaHome className="icon" />
            </Link>
          </li>
          <li>
            <Link to="/About">{text[selectedLanguage].about}</Link>
          </li>
          <li>
            <Link to="/Skills">{text[selectedLanguage].skills}</Link>
          </li>
          <li>
            <Link to="/Project">{text[selectedLanguage].projects}</Link>
          </li>
          <li>
            <a href={resume} download>
              {text[selectedLanguage].resume}
            </a>
          </li>
          <li>
            <Link to="/Contact">{text[selectedLanguage].contact}</Link>
          </li>
          <li>
            <LanguageSwitch
              selectedLanguage={selectedLanguage}
              onLanguageChange={onLanguageChange}
            />
          </li>
        </ul>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>

      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}
Navbar.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onLanguageChange: PropTypes.func.isRequired,
};
export default Navbar;
