import "../About/About.css";
import codeImg from "../images/skilles.png";
import { useTranslation } from "react-i18next";

function AboutPage() {
  const { t } = useTranslation();

  return (
    <header className="about">
      <div className="about-content">
        <h1>{t("aboutPage.title")}</h1>
        <div className="text-content">
          <p>{t("aboutPage.paragraph1")}</p>
          <p>{t("aboutPage.paragraph2")}</p>
          <p>{t("aboutPage.paragraph3")}</p>
          <p>{t("aboutPage.paragraph4")}</p>
        </div>
      </div>
      <div className="image-content">
        {/* Conditionally apply classes based on the selected language for heading */}
        <h2>{t("aboutPage.Skills")}</h2>
        {/* Conditionally apply classes based on the selected language for the image */}
        <img className="img" src={codeImg} alt="Coding" />
      </div>
    </header>
  );
}

export default AboutPage;
