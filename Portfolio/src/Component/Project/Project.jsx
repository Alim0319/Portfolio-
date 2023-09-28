import "../Project/project.css";
import Wather from "../images/weather.png";
import Login from "../images/LoginPage.jpg";
import Portfolio from "../images/portfolio.png";
import SolarSystem from "../images/SolarSystem.png";
import Todo from "../images/chessTodo.png";
import inProgress from "../images/InProgrees.png";
import PropTypes from "prop-types";

import { FaHtml5, FaCss3, FaJs, FaGithub, FaExpand } from "react-icons/fa";

function Projects({ selectedLanguage }) {
  const text = {
    en: {
      title: "My Projects",
      weatherApp: "Weather app",
      loginPage: "Login Page",
      planetProject: "Planet project",
      htmlPortfolio: "HTML Portfolio",
      chessGame: "In Progress... Chess Game", // Add translations for your projects
    },
    no: {
      title: "Mine Prosjekter",
      weatherApp: "Vær-app",
      loginPage: "Påloggingsside",
      planetProject: "Planetprosjekt",
      htmlPortfolio: "HTML-portefølje",
      chessGame: "Pågående... Sjakkspill", // Add translations for your projects
    },
  };

  return (
    <div className="project1">
      <h1>{text[selectedLanguage].title}</h1>
      <div className="project-container">
        <div className="project-item">
          <h2>{text[selectedLanguage].weatherApp}</h2>
          <img className="project" src={Wather} alt="weather" />
          <div className="project-icons">
            <FaHtml5 className="icon" />
            <FaCss3 className="icon" />
            <FaJs className="icon" />

            <a
              href="https://github.com/your-username/your-repo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="icon" />
            </a>
            <a
              href="https://alim0319.github.io/Weather/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExpand className="icon" />
              {/* <FaShare className="icon" />*/}
            </a>
          </div>
        </div>

        <div className="project-item">
          <h2>{text[selectedLanguage].loginPage}</h2>
          <img className="project" src={Login} alt="Login" />
          <div className="project-icons">
            <FaHtml5 className="icon" />
            <FaCss3 className="icon" />
            <FaJs className="icon" />
            <a
              href="https://github.com/Alim0319/Login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="icon" />
            </a>
            <a
              href="https://alim0319.github.io/Login/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExpand className="icon" />
            </a>
          </div>
        </div>
        <div className="project-item">
          <h2>{text[selectedLanguage].planetProject}</h2>
          <img className="project" src={SolarSystem} alt="Mercury" />

          <div className="project-icons">
            <FaHtml5 className="icon" />
            <FaCss3 className="icon" />

            <a
              href="https://github.com/Alim0319/PlantProject"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="icon" />
            </a>
            <a
              href="https://alim0319.github.io/PlantProject/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExpand className="icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="project-container">
        {/* Second row */}
        <div className="project-item">
          <h2>{text[selectedLanguage].htmlPortfolio}</h2>
          <img className="project" src={Portfolio} alt="Portfolio" />
          <div className="project-icons">
            <FaHtml5 className="icon" />
            <FaCss3 className="icon" />
            <FaJs className="icon" />
            <a
              href="https://alim0319.github.io/Code/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="icon" />
            </a>
            <a
              href="https://comforting-florentine-4deae8.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExpand className="icon" />
            </a>
          </div>
        </div>
        <div className="project-item">
          <h2>{text[selectedLanguage].chessGame}</h2>
          <img className="project" src={Todo} alt="todo" />

          {/* Project 5 content */}
        </div>
        <div className="project-item">
          <img className="project" src={inProgress} alt="InProgrees" />

          {/* Project 6 content */}
        </div>
      </div>
    </div>
  );
}
Projects.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
};
export default Projects;
