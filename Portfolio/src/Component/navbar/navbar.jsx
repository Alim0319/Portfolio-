import { FaBars, FaTimes, FaHome } from "react-icons/fa";
import { useRef } from "react";
import { Link } from "react-router-dom";
import resume from "../images/CV_Alim .pdf";
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import "../styles/main.css";

function Navbar() {
  const navRef = useRef();
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  /*const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };*/
  const toggleNavbar = () => {
    setIsOpen(!isOpen); // Rename setIsNavbarOpen to setIsOpen
  };
  return (
    <header>
      <div className="logo">
        <Link to="/Home">
          <img src="logo-color.png" alt="Logo" />
        </Link>
      </div>
      <nav ref={navRef} className={isOpen ? "responsive_nav" : ""}>
        <ul className="nav-list">
          <li>
            <Link to="/Home">
              <FaHome className="icon" />
            </Link>
          </li>
          <li>
            <Link to="/About">{t("translation.about")}</Link>
          </li>
          {/*<li>
            <Link to="/Skills">{text[selectedLanguage].skills}</Link>
  </li>*/}
          <li>
            <Link to="/Project">{t("translation.Projects")}</Link>
          </li>
          <li>
            <a href={resume} download>
              {" "}
              {t("translation.Download Resume")}
            </a>
          </li>
          <li>
            <Link to="/Contact">{t("translation.Contact")}</Link>
          </li>
          <li>
            <LanguageSwitch />
          </li>
        </ul>

        <button className="nav-btn nav-close-btn" onClick={toggleNavbar}>
          <FaTimes />
        </button>
      </nav>

      <button className="nav-btn" onClick={toggleNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
