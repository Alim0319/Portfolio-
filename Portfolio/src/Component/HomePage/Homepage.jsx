import "./homepage.css";
import menImg from "../images/man.png";
import codeImg from "../images/coding.png";
import { useTranslation } from "react-i18next";

function HomePage() {
  const { t } = useTranslation();

  return (
    <header className="home">
      <img className="me" src={menImg} alt="Me" />
      <div>
        <h1>{t("HomePage.hompageTitel")}</h1>
        <h4>{t("HomePage.profession1")}</h4>
        <h4>{t("HomePage.profession3")}</h4>
        <h4>{t("HomePage.profession4")}</h4>
        <h4>{t("HomePage.profession2")}</h4>
      </div>
      <img className="coding" src={codeImg} alt="Coding" />
    </header>
  );
}

export default HomePage;
