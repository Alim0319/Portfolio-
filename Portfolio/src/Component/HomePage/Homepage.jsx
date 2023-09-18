import "./homepage.css";
import menImg from "../images/men.jpeg";
import codeImg from "../images/coding.png";
function HomePage() {
  return (
    <header className="home">
      <img className="me" src={menImg} alt="Me" />
      <div>
        <h1>Hi there, I&rsquo; Alim</h1>
        <h4>&lt;&gt;Fullstack Web Developer&lt;/&gt;</h4>
        <h4>&lt;&gt;QA & Test Automation&lt;/&gt;</h4>
      </div>
      <img className="coding" src={codeImg} alt="Coding" />
    </header>
  );
}

export default HomePage;
