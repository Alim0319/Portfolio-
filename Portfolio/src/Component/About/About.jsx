import "../About/About.css";
import codeImg from "../images/skilles.png";
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
      Skills: "Skills",
      paragraph4: " ",
    },
    no: {
      title: "Om meg",
      paragraph1:
        "Hei, mitt navn er Alim, og jeg er en JavaScript-webutvikler. Jeg har nylig startet med læring av full stack web-utvikling, og jeg har allerede fått mye erfaring med React, Node og Express. Jeg har også erfaring med å bygge webapper som håndterer store mengder data, noe som har gitt meg god innsikt i hvordan man skal skalere applikasjoner og optimalisere ytelsen.",
      paragraph2:
        "Jeg har også selvstudert grunnleggende Python, og selv om jeg ikke har mye erfaring med det ennå, føler jeg at jeg kan bruke det som et verktøy i fremtidige prosjekter. Tidligere jobbet jeg som QA-tester for United Coder LLC (Remote, USA) mellom 2020-2022, der jeg fikk erfaring med å teste programvare og rapportere problemer til utviklere.",
      paragraph3:
        "Nylig startet jeg på Kodehode, en full-stack-kurs som gir meg 6 måneder med teori og 6 måneder med opplæring i form av lærlingarbeid. Dette gir meg muligheten til å videreutvikle mine ferdigheter og praksis med et team av erfarne utviklere",
      Skills: "Ferdigheter",
      paragraph4:
        "Jeg er svært lidenskapelig opptatt av å designe og utvikle intuitive brukergrensesnitt, og jeg streber alltid etter å forbedre brukeropplevelsen i prosjektene mine. Jeg tror på å jobbe smart, være organisert og fokusere på detaljer for å skape en vellykket applikasjon. Hvis du leter etter noen som har erfaring med å jobbe med store prosjekter samtidig som de kan fokusere på små detaljer, vil jeg gjerne hjelpe deg med ditt neste prosjekt",
    },
  };

  return (
    <section className="about">
      <div className="about-content">
        <h1>{text[selectedLanguage].title}</h1>
        <div className="text-content">
          <p>{text[selectedLanguage].paragraph1}</p>
          <p>{text[selectedLanguage].paragraph2}</p>
          <p>{text[selectedLanguage].paragraph3}</p>
          <p>{text[selectedLanguage].paragraph4}</p>
        </div>
      </div>
      <div className="image-content">
        <h2>{text[selectedLanguage].Skills}</h2>
        <img className="code" src={codeImg} alt="Coding" />
      </div>
    </section>
  );
}
AboutPage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
};

export default AboutPage;
