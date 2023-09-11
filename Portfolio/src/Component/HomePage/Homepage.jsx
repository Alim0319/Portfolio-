import "./homepage.css";

function HomePage() {
  return (
    <header className="home">
      <img className="me" src="men.jpeg" alt="Me" />
      <div>
        <h1>Hi there, I&rsquo; m Alim</h1>
        <h4>&lt;&gt;Fullstack Web Developer&lt;/&gt;</h4>
        <h4>&lt;&gt;QA & Test Automation&lt;/&gt;</h4>
      </div>
      <img className="coding" src="coding.png" alt="Coding" />
    </header>
  );
}

export default HomePage;
