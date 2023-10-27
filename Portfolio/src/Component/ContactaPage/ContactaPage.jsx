/*import "../ContactaPage/contact.css";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import contactImg from "../images/contact.gif";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  return (
    <header className="contact">
      <h1>{t("Contact.title")}</h1>
      <div>
        <div className="contactForum">
          <div className="container">
            <div className="box">
              <div className="icon">
                <FaMapMarkerAlt />
              </div>
              <div className="info">
                <h3>{t("Contact.address")}</h3>
                <p>
                  Båtstadstein 8B, 4056
                  <br />
                  Tananger
                </p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <FaPhone />
              </div>
              <div className="info">
                <h3>{t("Contact.phone")}</h3>
                <p>+47-46380551</p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                {" "}
                <FaEnvelope />
              </div>
              <div className="info">
                <h3>{t("Contact.email")}</h3>
                <a href="mailto:alim.basok.erk@gmail.com">
                  alim.basok.erk@gmail.com
                </a>
              </div>
            </div>
          </div>
          <form
            target="_blank"
            action="https://formsubmit.co/alim.basok.erk@gmail.com"
            method="POST"
          >
            <div className="forum">
              <label htmlFor="from_name">{t("Contact.fullname")}</label>
              <input
                type="text"
                name="from_name"
                id="from_name"
                placeholder={t("Contact.name")}
                required
              />
            </div>
            <div className="forum">
              <label htmlFor="message">{t("Contact.Message")}</label>
              <input
                type="text"
                name="message"
                id="message"
                placeholder={t("Contact.yourMessage")}
                required
              />
            </div>
            <div className="forum">
              <label htmlFor="reply_to">{t("Contact.Email")}</label>
              <input
                type="text"
                name="reply_to"
                id="reply_to"
                placeholder={t("Contact.email")}
                required
              />
            </div>
            <input type="submit" id="button" value={t("Contact.buttonText")} />
          </form>
          <img className="contactGift" src={contactImg} alt="contact" />
        </div>
      </div>
    </header>
  );
}

export default Contact;*/
import "../ContactaPage/contact.css";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import contactImg from "../images/contact.gif";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

function Contact() {
  const { t } = useTranslation();

  return (
    <header className="container contact  max-width-1284">
      <h1 className="text-center custom-heading">{t("Contact.title")}</h1>
      <div className="row">
        <div className="col-md-6 custom-col">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="custom-timeline-element"
              icon={<FaMapMarkerAlt />}
            >
              <h3 className="custom-timeline-title">{t("Contact.address")}</h3>
              <p className="custom-timeline-text">
                Båtstadstein 8B, 4056
                <br />
                Tananger
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="custom-timeline-element"
              icon={<FaPhone />}
            >
              <h3 className="custom-timeline-title">{t("Contact.phone")}</h3>
              <p className="custom-timeline-text">+47-46380551</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="custom-timeline-element"
              icon={<FaEnvelope />}
            >
              <h3 className="custom-timeline-title">{t("Contact.email")}</h3>
              <a
                className="custom-timeline-link"
                href="mailto:alim.basok.erk@gmail.com"
              >
                alim.basok.erk@gmail.com
              </a>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
        <div className="col-md-6 custom-col">
          <form
            target="_blank"
            action="https://formsubmit.co/alim.basok.erk@gmail.com"
            method="POST"
          >
            <div className="form-group">
              <label htmlFor="from_name">
                <h3>{t("Contact.fullname")}</h3>
              </label>
              <input
                type="text"
                className="form-control"
                name="from_name"
                id="from_name"
                placeholder={t("Contact.name")}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">
                <h3>{t("Contact.Message")}</h3>
              </label>
              <input
                type="text"
                className="form-control"
                name="message"
                id="message"
                placeholder={t("Contact.yourMessage")}
                maxLength="1000"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="reply_to">
                <h3>{t("Contact.Email")}</h3>
              </label>
              <input
                type="text"
                className="form-control"
                name="reply_to"
                id="reply_to"
                placeholder={t("Contact.email")}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              {t("Contact.buttonText")}
            </button>
          </form>
        </div>
        <div className="col-md-6 custom-col">
          <img className="contactGift" src={contactImg} alt="contact" />
        </div>
      </div>
    </header>
  );
}

export default Contact;
