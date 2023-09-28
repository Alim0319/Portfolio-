import "../footer/footer.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { openLinkInNewTab } from "./openLinkInNewTab";

function Footer() {
  const linkedinURL = "https://www.linkedin.com/in/alim-erk-7582b6231/";
  const githubURL = "https://github.com/Alim0319";

  return (
    <footer className="footer">
      <FaLinkedin
        className="linkedin"
        size={30} // Set the size of the icon
        onClick={() => openLinkInNewTab(linkedinURL)}
      />

      <FaGithub
        className="Github"
        size={30} // Set the size of the icon
        onClick={() => openLinkInNewTab(githubURL)}
      />
    </footer>
  );
}

export default Footer;
