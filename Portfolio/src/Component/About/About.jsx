import "../About/About.css";
import codeImg from "../images/coding.gif";

function About() {
  return (
    <header className="about">
      <h1>About to me</h1>
      <div>
        <div className="about-me">
          <p>
            My full-stack web development journey began in early 2023 when I
            joined Kodehode, a comprehensive full-stack course.
          </p>
          <p>
            I&rsquo;m well-versed in React, Node, and Express, which I use to
            create cool and interactive web apps. Additionally, I&rsquo;ve
            explored Python basics on my own, broadening my horizons beyond
            front-end technologies. Before delving into web development, I
            gained valuable experience as a QA tester at United Coder LLC from
            2020 to 2022.
          </p>
          <p>
            Even as a junior developer, I believe that the little things matter
            in web development. I&rsquo;m dedicated to creating user-friendly
            interfaces and optimizing the overall user experience. Seeing people
            enjoy and benefit from the apps I build motivates me to keep pushing
            the boundaries of design and functionality.
          </p>
        </div>
        <img className="code" src={codeImg} alt="Coding" />
      </div>
    </header>
  );
}

export default About;
