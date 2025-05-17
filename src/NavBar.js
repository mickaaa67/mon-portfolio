import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (sectionId) => {
    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setShow(true);
      } else {
        setShow(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${show ? "navbar--visible" : "navbar--hidden"}`}>
      <ul className="navbar-list">
        <li><a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick("about"); }}>Présentation</a></li>
        <li><a href="#parcours-pro" onClick={(e) => { e.preventDefault(); handleNavClick("parcours-pro"); }}>Parcours</a></li>
        <li><a href="#skills" onClick={(e) => { e.preventDefault(); handleNavClick("skills"); }}>Compétences</a></li>
        <li><a href="#projects" onClick={(e) => { e.preventDefault(); handleNavClick("projects"); }}>Projets</a></li>
        <li><a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick("contact"); }}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
