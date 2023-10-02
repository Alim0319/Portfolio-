import "../ContactaPage/contact.css";
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

export default Contact;
