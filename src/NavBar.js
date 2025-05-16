import React, { useState, useEffect } from "react";

function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
        <li><a href="#presentation">Présentation</a></li>
        <li><a href="#projets">Projets</a></li>
        <li><a href="#competences">Compétences</a></li>
        <li><a href="#parcours">Parcours</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
