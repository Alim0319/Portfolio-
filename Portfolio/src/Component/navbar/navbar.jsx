/*import { FaBars, FaHome } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import resume from "../images/CV_Alim .pdf";
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";
import { useTranslation } from "react-i18next";
import "../styles/main.css";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <header className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="logo">
        <Link to="/Home">
          <img src="logo-color.png" alt="Logo" />
        </Link>
      </div>
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/Home">
              <FaHome className="icon" />
            </Link>
          </li>
          <li>
            <Link to="/About">{t("translation.about")}</Link>
          </li>
          <li>
            <Link to="/Education">{t("translation.education")}</Link>
          </li>
          <li>
            <Link to="/Project">{t("translation.Projects")}</Link>
          </li>
          <li>
            <a href={resume} download>
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
      </nav>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
          name="Menu"
        >
          <FaBars />
        </button>
      </div>
    </header>
  );
}

export default Navbar;*/
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBars, FaHome } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import resume from "../images/CV_Alim .pdf";
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";
import { useTranslation } from "react-i18next";
import "../styles/main.css"; // Du må opprette en Navbar.css-fil for dine egne tilpassede stiler

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <header className={`navbar ${expandNavbar ? "open" : "close"}`}>
      <div className="logo">
        <Link to="/Home">
          <img src="logo-color.png" alt="Logo" />
        </Link>
      </div>
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/Home">
              <FaHome className="icon" />
            </Link>
          </li>
          <li>
            <Link to="/About">{t("translation.about")}</Link>
          </li>
          <li>
            <Link to="/Education">{t("translation.education")}</Link>
          </li>
          <li>
            <Link to="/Project">{t("translation.Projects")}</Link>
          </li>
          <li>
            <a href={resume} download>
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
      </nav>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
          name="Menu"
        >
          <FaBars />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
