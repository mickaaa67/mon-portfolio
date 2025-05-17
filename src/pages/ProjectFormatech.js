import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Layout from "../Layout";
import NavBar from "../NavBar";

function ProjectFormaTech() {
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
              <h1 className="project-title">Projet FormaTech - Application Web de Gestion de Formations</h1>
            </div>
            <img
              src="/imagesProjet/LogoFormaTech.png"
              alt="Logo FormaTech"
              className="project-logo centered-image"
            />
          </div>
        </header>
        <section className="project-presentation">
          <h2 className="section-title">Présentation du projet</h2>
          <p>
            Le projet FormaTech est une application web conçue pour la gestion complète des formations, des modules et des cours au sein d'un organisme de formation. L'objectif principal était de simplifier et d'optimiser l'administration des différents aspects liés aux formations.
          </p>
          <br></br>
          <h3>Mes contributions au projet :</h3>
          <p>
            En tant que membre d'une équipe de deux personnes, j'ai activement participé au développement de cette application web réalisée en une semaine dans le cadre de notre formation. Mes principales contributions ont concerné :
          </p>
          <br></br>
          <ul className="indent-list">
            <li>Gestion complète (création, modification, suppression/ajout) des utilisateurs, formations, modules et intervenants, incluant la conception initiale de la base de données et l'insertion des premières données.</li>
            <li>La création de la base de données nécessaire au fonctionnement de l'application, en suivant le Modèle Conceptuel de Données (MCD) préétabli.</li>
            <li>L'insertion des valeurs initiales dans les différentes tables de la base de données pour initialiser l'application.</li>
          </ul>
          <br></br>
          <p>
            La gestion de projet a été assurée à l'aide d'outils collaboratifs tels que Trello pour le suivi des tâches et GitHub pour la gestion du code source, simulant ainsi des conditions de travail réelles.
          </p>
          <br></br>
          <img src="/imagesProjet/trelloFormatech.png" alt="Arborescence de l'application FormaTech" className="trello-map-image centered-image" />
          <br></br>
        </section>

        <section className="site-architecture centered-section">
          <h2 className="section-title">Aperçu du diagramme de classe</h2>
          {/* Tu peux remplacer cette image par un schéma d'arborescence spécifique à FormaTech si tu en as un */}
          <img src="/imagesProjet/diagrammeFormaTech.png" alt="Arborescence de l'application FormaTech" className="site-map-image centered-image" />
          <br></br>
          <p>
              Ce diagramme de classes représente un système de gestion de formations. Il distingue plusieurs entités clés : les Employés gèrent les étudiants, les Intervenants proposent des Modules qui composent des Formations. Les Sessions sont des instances de ces modules qui se déroulent dans des Salles et sont suivies par des Étudiants regroupés en Promotions. Les classes "Gestion..." indiquent les opérations possibles sur ces entités.
          </p>
        </section>
        <br></br>
        <section className="project-preview centered-section">
          <h2 className="section-title">Aperçu de l'application</h2>
          <p>
          Pour avoir un aperçu visuel des différentes fonctionnalités de gestion que j'ai contribué à établir au sein de l'application web FormaTech, veuillez consulter la vidéo de présentation ci-dessous.
          </p>
          <div className="video-container centered-element">
            <video src="/videosProjet/captureFormaTech.mp4" controls width="640" height="360">
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

export default ProjectFormaTech;