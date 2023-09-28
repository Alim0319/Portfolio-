import "../ContactaPage/contact.css";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import contactImg from "../images/contact.gif";
import PropTypes from "prop-types";

function Contact({ selectedLanguage }) {
  const text = {
    en: {
      title: "Contact Me",
      address: "Address:",
      phone: "Phone:",
      email: "E-mail:",
      fullname: " Full Name *",
      name: "Name",
      Message: "Message *",
      Email: "E-mail *",
      yourMessage: "yourMessage",
      buttonText: "Send Email",
    },
    no: {
      title: "Kontakt meg",
      address: "Adresse:",
      phone: "Telefon:",
      email: "E-post:",
      fullname: " Full Navn *",
      name: "Navn",
      Message: "Message *",
      Email: "E-mail *",
      yourMessage: "Din tilbakemelding",
      buttonText: "Send E-post",
    },
  };

  return (
    <main className="contact">
      <h1>{text[selectedLanguage].title}</h1>
      <div>
        <div className="contactForum">
          <div className="container">
            <div className="box">
              <div className="icon">
                <FaMapMarkerAlt />
              </div>
              <div className="info">
                <h3>{text[selectedLanguage].address}</h3>
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
                <h3>{text[selectedLanguage].phone}</h3>
                <p>+47-46380551</p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                {" "}
                <FaEnvelope />
              </div>
              <div className="info">
                <h3>{text[selectedLanguage].email}</h3>
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
              <label htmlFor="from_name">
                {text[selectedLanguage].fullname}
              </label>
              <input
                type="text"
                name="from_name"
                id="from_name"
                placeholder={text[selectedLanguage].name}
                required
              />
            </div>
            <div className="forum">
              <label htmlFor="message">{text[selectedLanguage].Message}</label>
              <input
                type="text"
                name="message"
                id="message"
                placeholder={text[selectedLanguage].yourMessage}
                required
              />
            </div>
            <div className="forum">
              <label htmlFor="reply_to">{text[selectedLanguage].Email}</label>
              <input
                type="text"
                name="reply_to"
                id="reply_to"
                placeholder={text[selectedLanguage].email}
                required
              />
            </div>
            <input
              type="submit"
              id="button"
              value={text[selectedLanguage].buttonText}
            />
          </form>
          <img className="contactGift" src={contactImg} alt="contact" />
        </div>
      </div>
    </main>
  );
}
Contact.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
};
export default Contact;
