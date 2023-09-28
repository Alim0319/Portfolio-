import "../About/About.css";
import codeImg from "../images/coding.gif";
import PropTypes from "prop-types";

function AboutPage({ selectedLanguage }) {
  const text = {
    en: {
      title: "About me",
      paragraph1:
        "My full-stack web development journey began in early 2023 when I joined Kodehode, a comprehensive full-stack course.",
      paragraph2:
        "I’m well-versed in React, Node, and Express, which I use to create cool and interactive web apps. Additionally, I’ve explored Python basics on my own, broadening my horizons beyond front-end technologies. Before delving into web development, I gained valuable experience as a QA tester at United Coder LLC from 2020 to 2022.",
      paragraph3:
        "Even as a junior developer, I believe that the little things matter in web development. I’m dedicated to creating user-friendly interfaces and optimizing the overall user experience. Seeing people enjoy and benefit from the apps I build motivates me to keep pushing the boundaries of design and functionality.",
    },
    no: {
      title: "Om meg",
      paragraph1:
        "Min reise innen full stack webutvikling begynte tidlig i 2023 da jeg ble med på Kodehode, en omfattende full stack-kurs.",
      paragraph2:
        "Jeg er velbevandret i React, Node og Express, som jeg bruker til å lage kule og interaktive webapper. I tillegg har jeg utforsket grunnleggende Python på egen hånd, og utvidet horisonten utover front-end-teknologier. Før jeg begynte med webutvikling, fikk jeg verdifull erfaring som en QA-tester hos United Coder LLC fra 2020 til 2022.",
      paragraph3:
        "Selv som en juniorutvikler tror jeg at de små tingene betyr noe i webutvikling. Jeg er dedikert til å skape brukervennlige grensesnitt og optimalisere den generelle brukeropplevelsen. Å se folk glede seg over og dra nytte av appene jeg bygger, motiverer meg til å fortsette å utfordre grensene for design og funksjonalitet.",
    },
  };

  return (
    <header className="about">
      <h1>{text[selectedLanguage].title}</h1>
      <div className="about-me">
        <p>{text[selectedLanguage].paragraph1}</p>
        <p>{text[selectedLanguage].paragraph2}</p>
        <p>{text[selectedLanguage].paragraph3}</p>
      </div>
      <img className="code" src={codeImg} alt="Coding" />
    </header>
  );
}
AboutPage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
};

export default AboutPage;
