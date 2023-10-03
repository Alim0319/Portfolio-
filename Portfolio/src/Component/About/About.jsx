import "../About/About.css";
import codeImg from "../images/skilles.png";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

function AboutPage({ selectedLanguage }) {
  const { t } = useTranslation();
  <AboutPage selectedLanguage="no" />;
  const isNorwegian = selectedLanguage === "no";

  return (
    <header className="about">
      <div className="about-content">
        <h1>{t("aboutPage.title")}</h1>
        <div className="text-content">
          <p
            className={
              isNorwegian ? "norwegian-paragraph" : "english-paragraph"
            }
          >
            {t("aboutPage.paragraph1")}
          </p>
          <p
            className={
              isNorwegian ? "norwegian-paragraph" : "english-paragraph"
            }
          >
            {t("aboutPage.paragraph2")}
          </p>
          <p
            className={
              isNorwegian ? "norwegian-paragraph" : "english-paragraph"
            }
          >
            {t("aboutPage.paragraph3")}
          </p>
          <p
            className={
              isNorwegian ? "norwegian-paragraph" : "english-paragraph"
            }
          >
            {t("aboutPage.paragraph4")}
          </p>
        </div>
      </div>
      <div className="image-content">
        {/* Conditionally apply classes based on the selected language for heading */}
        <h2 className={isNorwegian ? "norwegian-heading" : "english-heading"}>
          {t("aboutPage.Skills")}
        </h2>
        {/* Conditionally apply classes based on the selected language for the image */}
        <img
          className={isNorwegian ? "norwegian-image" : "english-image"}
          src={codeImg}
          alt="Coding"
        />
      </div>
    </header>
  );
}
AboutPage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
};
export default AboutPage;
