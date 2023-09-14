import { useState } from "react";
import "../MySkills/MySkills.css";

function MySkills1() {
  const skillsData = [
    { name: "HTML5", img: "HTML5.svg" },
    { name: "CSS", img: "css3.png" },
    { name: "JAVA", img: "JAVA.png" },
    { name: "JS", img: "JS.svg" },
    { name: "Python", img: "Python.png" },
    { name: "VisualStudio", img: "VisualStudio.png" },
    { name: "Figma", img: "Figma.png" },
    { name: "Bitbucket", img: "bitbucket.png" },
    { name: "Vite", img: "Vite.webp" },
    { name: "Conflunus", img: "conflunus.png" },
    { name: "Apache", img: "apache.png" },
    { name: "Cucumber", img: "cucumber.png" },
    { name: "Cypress", img: "Cypress.svg" },
    { name: "Git", img: "Git.png" },
    { name: "Github", img: "Github.png" },
    { name: "Intelliji-idea", img: "intellij-idea.png" },
    { name: "Jenkines", img: "Jenkines.png" },
    { name: "Jira", img: "Jira.png" },
    { name: "JQuery", img: "jQuery.svg" },
    { name: "Json", img: "Json.png" },
    { name: "Junit", img: "Junit.png" },
    { name: "MongoDB", img: "MongoDB.png" },
    { name: "MySQL", img: "MySQL.png" },
    { name: "Nodejs", img: "nodejs.svg" },
    { name: "NPM", img: "NPM.png" },
    { name: "Postman", img: "POSTMAN.png" },
    { name: "React", img: "react.png" },
    { name: "Nodemon", img: "Nodemon.svg" },
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
