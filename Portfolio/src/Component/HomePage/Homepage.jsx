import "./homepage.css";
import menImg from "../images/man.png";
import codeImg from "../images/coding.png";
import PropTypes from "prop-types";

function HomePage({ selectedLanguage }) {
  const text = {
    en: {
      greeting: "Hi there, I’m Alim",
      profession1: "<>Fullstack Web Developer</>",
      profession2: "<>QA & Test Automation</>",
    },
    no: {
      greeting: "Hei, jeg er Alim",
      profession1: "<>Fullstack Web Developer</>",
      profession2: "<>QA og Test Automation</>",
    },
  };

  return (
    <header className="home">
      <img className="me" src={menImg} alt="Me" />
      <div>
        <h1>{text[selectedLanguage].greeting}</h1>
        <h4>{text[selectedLanguage].profession1}</h4>
        <h4>{text[selectedLanguage].profession2}</h4>
      </div>
      <img className="coding" src={codeImg} alt="Coding" />
    </header>
  );
}
HomePage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
};
export default HomePage;
