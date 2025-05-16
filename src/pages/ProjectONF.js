import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Layout from "../Layout";
import NavBar from "../NavBar";

function ProjectONF() {
  return (
    <>
      <NavBar className={`navbar "navbar--visible" : "navbar--hidden"}`}>
        <ul className="navbar-list">
          <li><a href="#presentation">Présentation</a></li>
          <li><a href="#projets">Projets</a></li>
          <li><a href="#competences">Compétences</a></li>
          <li><a href="#parcours">Parcours</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </NavBar>
      <br></br><br></br>
      <div className="project-page centered-content">
        <header className="project-header">
          <div className="title-logo">
            <div className="title-row">
              <Link to="/" className="back-button">
                <FaArrowLeft />
              </Link>
              <h1 className="project-title">Projet ONF - Site de Commande d'Équipements</h1>
            </div>
            <img
              src="/imagesProjet/logoONF.jpg"
              alt="Logo ONF"
              className="project-logoONF centered-image"
            />
          </div>
        </header>
        <section className="project-presentation">
          <h2 className="section-title">Présentation du projet</h2>
          <p>
            Ce projet a consisté en la conception et le développement d'un site de commande en ligne destiné aux ouvriers de l'Office National des Forêts (ONF). L'objectif était de fournir une plateforme centralisée et accessible pour la commande de vêtements et d'équipements de protection individuelle (EPI) essentiels à leurs activités professionnelles.
          </p>
          <br></br><br></br>
          <h3>Mes contributions au projet :</h3>
          <br></br>
          <p>
            Au sein d'une équipe de quatre développeurs, j'ai activement participé à toutes les phases de ce projet. Mes principales responsabilités et contributions ont inclus :
          </p>
          <br></br>
          <ul className="indent-list">
            <li>La participation à la conception de l'interface utilisateur (UI) et de l'expérience utilisateur (UX) du site.</li>
            <li>Le développement de certaines fonctionnalités front-end en HTML et CSS.</li>
            <li>Le développement de la logique back-end en PHP pour la gestion des commandes et des stocks.</li>
            <li>La conception et l'implémentation de la base de données pour stocker les informations des utilisateurs, des produits et des commandes.</li>
            <li>Le déploiement et la configuration du site sur un serveur OVH, assurant son accessibilité sur divers appareils (PC, tablette, téléphone).</li>
            <li>L'utilisation des outils de gestion de projet Trello pour le suivi des tâches et GitHub pour le contrôle de version du code.</li>
            <li>La participation active aux réunions d'équipe présentielles pour assurer une communication efficace et la coordination du développement.</li>
            {/* Ajoutez ici d'autres aspects spécifiques sur lesquels tu as travaillé */}
          </ul>
          <br></br><br></br>
          <p>
            Ce projet a permis de mettre en pratique mes compétences en développement web dans un contexte réel et collaboratif, en utilisant des technologies courantes et des outils de gestion de projet efficaces.
          </p>
        </section>

        <section className="site-architecture centered-section">
          <h2 className="section-title">Aperçu du Modèle Conceptuel de Données (MCD) du projet ONF</h2>
          {/* Remplacer cette image par le schéma MCD généré pour le projet ONF */}
          <img src="/imagesProjet/mcd onf.png" alt="Modèle Conceptuel de Données du projet ONF" className="site-map-imageONF centered-image" />
          <br></br>
          <p>
              Ce Modèle Conceptuel de Données (MCD) illustre l'organisation des informations pour le projet ONF. Il met en évidence les entités principales telles que les Utilisateurs (ouvriers) qui créent des Commandes d'EPI (Équipements de Protection Individuelle) et de Vêtements. Les Produits, fournis par des Fournisseurs, sont catégorisés et disponibles en différentes Tailles. Les Lieux de Livraison sont associés aux Utilisateurs. Des tables de liaison comme LigneCommandeEPI et LigneCommandeVet détaillent le contenu de chaque commande. Le MCD prend également en compte les Métiers des utilisateurs, les Statuts des commandes, les Types de Produits, et la Disponibilité des produits en fonction des tailles.
          </p>
        </section>    

        <section className="project-preview centered-section">
          <h2 className="section-title">Aperçu du site</h2>
          <p>
            Pour avoir un aperçu visuel des différentes pages et fonctionnalités du site de commande pour l'ONF, veuillez consulter la vidéo de présentation ci-dessous.
          </p>
          <div className="video-container centered-element">
            <video src="/videosProjet/captureONF.mp4" controls width="640" height="360">
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

export default ProjectONF;