import React from 'react';
import { Link } from 'react-router-dom'; // Si tu utilises React Router pour la navigation
import { FaGithub, FaLinkedin, FaCode, FaBriefcase, FaEnvelope, FaMicrochip, FaGavel, FaArrowLeft } from "react-icons/fa";
import Layout from "../Layout";
import NavBar from "../NavBar";
import { useEffect } from "react";


function ProjectBricoBrac() {
  
  return (
    <>
      <NavBar className={`navbar "navbar--visible" : "navbar--hidden"`}>
        <ul className="navbar-list">
          <li><Link to="/#about">Présentation</Link></li>
          <li><Link to="/#parcours-pro">Parcours</Link></li>
          <li><Link to="/#skills">Compétences</Link></li>
          <li><Link to="/#projects">Projets</Link></li>
          <li><Link to="/#contact">Contact</Link></li>
        </ul>
      </NavBar>
      <br></br><br></br>
      <div className="project-page centered-content">
        <header className="project-header">
          <div className="title-logo">
            <div className="title-row">
              <Link to="/#projects" className="back-button">
                <FaArrowLeft />
              </Link>
              <h1 className="project-title">Projet Brico'Brac - Site de Vente en Ligne</h1>
            </div>
            <img
              src="/imagesProjet/logoBricoBrac.png"
              alt="Logo Brico'Brac"
              className="project-logo centered-image"
            />
          </div>
        </header>
        <section id="details-projet" className="project-presentation">
          <h2 className="section-title">Présentation du projet</h2>
          <p>
            Le projet Brico'Brac est un site de vente en ligne pour une chaîne de magasins de bricolage familiale. L'objectif était de créer une plateforme permettant à l'entreprise d'étendre sa présence au-delà des magasins physiques et d'offrir ses produits à une clientèle plus large.
          </p>
          <br></br><br></br>
          <h3>Mes contributions au projet :</h3>
          <br></br>
          <p>
            En tant que membre d'une équipe de trois personnes, j'ai participé activement au développement de ce projet réalisé en une semaine dans le cadre de notre formation. Mes principales contributions ont concerné :
          </p>
          <br></br>
          <ul className="indent-list"> {/* Ajout de la classe indent-list */}
            <li>L'implémentation du système de gestion des droits d'administrateur.</li>
            <li>Le développement de l'interface de liste et de gestion du catalogue des articles (ajout, modification, suppression).</li>
            <li>La gestion de l'authentification des utilisateurs et la connexion à la base de données.</li>
          </ul>
        </section>

        <section className="site-architecture centered-section">
          <h2 className="section-title">Aperçu du Modèle Conceptuel des Données</h2>
          <img src="/imagesProjet/CaptureBricobrac4.png" alt="Arborescence du site Brico'Brac" className="site-map-image centered-image" />
          <br></br>
          <p>
            La base de données structure les <strong>articles</strong>, les <strong>clients</strong> (avec leurs rôles) et leurs <strong>commandes</strong>. Les <strong>paniers</strong> des clients mènent à la création de <strong>commandes</strong>. Des <strong>utilisateurs</strong> (clients, gestionnaires, administrateurs) interagissent avec le système, et leurs actions sont suivies via des <strong>logs</strong>.
          </p>        
        </section>
        <section className="project-preview centered-section">
          <h2 className="section-title">Aperçu du site</h2>
          <br></br>
          <p>
            Pour avoir un aperçu visuel des différentes pages et fonctionnalités du site, veuillez consulter la vidéo de présentation ci-dessous.
          </p>
          <br></br>
          <div className="video-container centered-element">
            
            <video src="/videosProjet/captureBricobrac.mp4" controls width="640" height="360">
            </video>
          </div>
        </section>
      </div>
      <br></br><br></br><br></br><br></br><br></br>
      <footer className="portfolio-footer">
        <p>© 2025 Hoffer Mickael. Tous droits réservés.</p>
        <div className="socials-footer">
          <a href="https://github.com/mickaaa67" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/mickael-hoffer-906a072aa/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:mickael.hoffer@gmail.com" className="email-icon">
            <FaEnvelope />
          </a>
        </div>
      </footer>
    </>
  );
}

export default ProjectBricoBrac;