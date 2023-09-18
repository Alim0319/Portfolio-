import { useState } from "react";
import "../MySkills/MySkills.css";
import HTML5 from "../images/HTML5.svg";
import CSS from "../images/css3.png";
import JAVA from "../images/JAVA.png";
import JS from "../images/JS.svg";
import Python from "../images/Python.png";
import VisualStudio from "../images/VisualStudio.png";
import Figma from "../images/Figma.png";
import bitbucket from "../images/bitbucket.png";
import Vite from "../images/Vite.webp";
import conflunus from "../images/conflunus.png";
import apache from "../images/apache.png";
import cucumber from "../images/cucumber.png";
import Cypress from "../images/Cypress.svg";
import Git from "../images/Git.png";
import Github from "../images/Github.png";
import intellij from "../images/intellij-idea.png";
import Jenkines from "../images/Jenkines.png";
import Jira from "../images/Jira.png";
import jQuery from "../images/jQuery.svg";
import Json from "../images/Json.png";
import Junit from "../images/Junit.png";
import MongoDB from "../images/MongoDB.png";
import MySQL from "../images/MySQL.png";
import nodejs from "../images/nodejs.svg";
import NPM from "../images/NPM.png";
import POSTMAN from "../images/POSTMAN.png";
import react from "../images/react.png";
import Nodemon from "../images/Nodemon.svg";

function MySkills1() {
  const skillsData = [
    { name: "HTML5", img: HTML5 },
    { name: "CSS", img: CSS },
    { name: "JAVA", img: JAVA },
    { name: "JS", img: JS },
    { name: "Python", img: Python },
    { name: "VisualStudio", img: VisualStudio },
    { name: "Figma", img: Figma },
    { name: "Bitbucket", img: bitbucket },
    { name: "Vite", img: Vite },
    { name: "Conflunus", img: conflunus },
    { name: "Apache", img: apache },
    { name: "Cucumber", img: cucumber },
    { name: "Cypress", img: Cypress },
    { name: "Git", img: Git },
    { name: "Github", img: Github },
    { name: "Intelliji-idea", img: intellij },
    { name: "Jenkines", img: Jenkines },
    { name: "Jira", img: Jira },
    { name: "JQuery", img: jQuery },
    { name: "Json", img: Json },
    { name: "Junit", img: Junit },
    { name: "MongoDB", img: MongoDB },
    { name: "MySQL", img: MySQL },
    { name: "Nodejs", img: nodejs },
    { name: "NPM", img: NPM },
    { name: "Postman", img: POSTMAN },
    { name: "React", img: react },
    { name: "Nodemon", img: Nodemon },
  ];

  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <div className="mySkills1">
      <h1>My Skills</h1>
      <div className="grid-container">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className={`grid-item ${selectedSkill === index ? "selected" : ""}`}
            onMouseEnter={() => setSelectedSkill(index)}
            onMouseLeave={() => setSelectedSkill(null)}
          >
            <img src={`${skill.img}`} alt={skill.name} />
            <div className={`text ${selectedSkill === index ? "visible" : ""}`}>
              {skill.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default MySkills1;
