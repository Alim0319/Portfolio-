import { FaBars, FaTimes, FaAngleDown, FaHome } from "react-icons/fa";
import { useRef } from "react";

import "../styles/main.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <div className="logo">
        <a href="Home">
          <img src="logo-color.png" alt="Logo" />
        </a>
      </div>
      <nav ref={navRef}>
        <ul className="nav-list">
          <li>
            <a href="Home">
              <FaHome className="icon" />
            </a>
          </li>
          <li>
            <a href="About">About</a>
          </li>
          <li>
            <a href="Skilis">Skilis</a>
          </li>
          <li>
            <a href="Project">Project</a>
          </li>
          <li className="dropdown">
            <a href="#" className="dropdown-icon">
              Download
              <FaAngleDown />
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="CV_Alim .pdf" target="_blank">
                  Resume
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="Contact">Contact</a>
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
