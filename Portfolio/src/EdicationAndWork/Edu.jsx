import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Typewriter from "typewriter-effect";
import { MdWork, MdOutlineCastForEducation } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import enData from "../Component/LanguageSwitch/en.json";
import noData from "../Component/LanguageSwitch/no.json";
//import { EduData } from "../data/EduData";
import { useTranslation } from "react-i18next";

// Hello
function Education() {
  const { t, i18n } = useTranslation();
  const EduData = i18n.language === "en" ? enData.EduData : noData.EduData;

  return (
    <div style={{ color: "#3c6e71" }}>
      <h1 style={{ color: "#3c6e71", textAlign: "center" }}>
        <Typewriter
          onInit={(typewriter) => {
            typewriter

              .typeString(t("Education.title"))

              .pauseFor(1000)
              .deleteAll()
              .typeString(t("Education.title1"))
              .start();
          }}
        />
      </h1>
      <VerticalTimeline lineColor="#284B6366">
        {Array.isArray(EduData)
          ? EduData.map((Edu, index) => (
              <VerticalTimelineElement
                key={index}
                contentStyle={{ background: "#ffffff66", color: "#284B63" }}
                contentArrowStyle={{ borderRight: "7px solid  #ffffff66" }}
                iconStyle={{ background: "#284B63", color: "#F0DB4F48" }}
                date={Edu.date}
                icon={
                  Edu.icon === "W" ? (
                    <MdWork />
                  ) : Edu.icon === "E" ? (
                    <FaGraduationCap />
                  ) : (
                    <MdOutlineCastForEducation />
                  )
                }
              >
                <h3 className="vertical-timeline-element-title">{Edu.title}</h3>
                <h4>{Edu.discrption}</h4>
              </VerticalTimelineElement>
            ))
          : null}
      </VerticalTimeline>
      <a
        href=""
        target="_blank"
        style={{
          color: "#3c6e71",
          textAlign: "center",
          textDecoration: "none",
        }}
      >
        <h1>
          <Typewriter
            onInit={(typewriter) => {
              typewriter

                .typeString(t("Education.Cv"))

                .pauseFor(1000)
                .deleteAll()
                .typeString(
                  '<a href="https://www.linkedin.com/in/alim-erk-7582b6231/" target="_blank">LinkedIn</a>'
                )
                .start();
            }}
          />
        </h1>
      </a>
    </div>
  );
}

export default Education;
