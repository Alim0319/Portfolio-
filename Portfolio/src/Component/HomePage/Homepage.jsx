import "./homepage.css";
import menImg from "../images/Alim.png";
import codeImg from "../images/coding.png";
import { useTranslation } from "react-i18next";
import Typewriter from "typewriter-effect";

function HomePage() {
  const { t } = useTranslation();

  return (
    <header className="home">
      <img className="me" src={menImg} alt="Me" />
      <div>
        <h1>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(t("HomePage.hompageTitel"))
                .pauseFor(1000)
                .deleteAll()
                .typeString(t("HomePage.profession1"))
                .pauseFor(1000)
                .deleteAll()
                .typeString(t("HomePage.profession3"))
                .pauseFor(1000)
                .deleteAll()
                .typeString(t("HomePage.profession4"))
                .start();
            }}
          />
        </h1>
        {/*<h4>{t("HomePage.profession1")}</h4>
        <h4>{t("HomePage.profession3")}</h4>
          <h4>{t("HomePage.profession4")}</h4>*/}
      </div>
      <img className="coding" src={codeImg} alt="Coding" />
    </header>
  );
}

export default HomePage;
