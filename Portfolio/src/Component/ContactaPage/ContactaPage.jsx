import "../ContactaPage/contact.css";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import contactImg from "../images/contact.gif";

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <div>
        <div className="contactForum">
          <div className="container">
            <div className="box">
              <div className="icon">
                <FaMapMarkerAlt />
              </div>
              <div className="info">
                <h3>Address:</h3>
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
                <h3>Telefon:</h3>
                <p>+47-46380551</p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                {" "}
                <FaEnvelope />
              </div>
              <div className="info">
                <h3>E-mail:</h3>
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
              <label htmlFor="from_name">Full Name *</label>
              <input
                type="text"
                name="from_name"
                id="from_name"
                placeholder="Full name"
                required
              />
            </div>
            <div className="forum">
              <label htmlFor="message">Message *</label>
              <input
                type="text"
                name="message"
                id="message"
                placeholder="Your Message"
                required
              />
            </div>
            <div className="forum">
              <label htmlFor="reply_to">Reply-email *</label>
              <input
                type="text"
                name="reply_to"
                id="reply_to"
                placeholder="Email"
                required
              />
            </div>
            <input type="submit" id="button" value="Send Email" />
          </form>
          <img className="contactGift" src={contactImg} alt="contact" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
