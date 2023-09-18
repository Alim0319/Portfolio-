import { FaBars, FaTimes, FaHome } from "react-icons/fa";
import { useRef } from "react";
import { Link } from "react-router-dom";
//import resume from "../images/CV_Alim.pdf";

import "../styles/main.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <div className="logo">
        <Link to="/Home">
          <img src="logo-color.png" alt="Logo" />
        </Link>
      </div>
      <nav ref={navRef}>
        <ul className="nav-list">
          <li>
            <Link to="/Home">
              <FaHome className="icon" />
            </Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Skills">Skills</Link>
          </li>
          <li>
            <Link to="/Project">Project</Link>
          </li>
          <li>
            <a href="../images/CV_Alim.pdf" download>
              Download
            </a>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>

      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}
export default Navbar;
