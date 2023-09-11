import "../footer/footer.css";

function openLinkInNewTab(url) {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) {
    newWindow.opener = null; // Prevents the new window from having access to the opener window
  }
}

function Footer() {
  const linkedinURL = "https://www.linkedin.com/in/alim-erk-7582b6231/";
  const githubURL = "https://github.com/Alim0319";

  return (
    <footer className="footer">
      <img
        className="linkedin"
        src="Linkedin.png"
        alt="linkedin"
        onClick={() => openLinkInNewTab(linkedinURL)}
      />

      <img className="followme" src="flowme.png" alt="followme" />
      <img
        className="Github"
        src="Github.png"
        alt="Github"
        onClick={() => openLinkInNewTab(githubURL)}
      />
    </footer>
  );
}
export default Footer;
