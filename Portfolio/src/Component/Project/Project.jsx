import "../Project/project.css";

import { FaHtml5, FaCss3, FaJs, FaGithub, FaExpand } from "react-icons/fa";

function Projects() {
  return (
    <div className="project1">
      <h1>My Projects</h1>
      <div className="project-container">
        <div className="project-item">
          <img className="project" src="weather.png" alt="weather" />
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
          <img className="project" src="LoginPage.jpg" alt="Login" />
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
          <img className="project" src="SolarSystem.png" alt="Mercury" />

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
          <img className="project" src="portfolio.png" alt="Portfolio" />
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
          <img className="project" src="imagetodo.png" alt="todo" />

          {/* Project 5 content */}
        </div>
        <div className="project-item">
          <img className="project" src="InProgrees.png" alt="InProgrees" />

          {/* Project 6 content */}
        </div>
      </div>
    </div>
  );
}
export default Projects;
