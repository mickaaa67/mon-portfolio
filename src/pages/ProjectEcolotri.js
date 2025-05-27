import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Layout from "../Layout";
import NavBar from "../NavBar";

function ProjectEcolotri() {
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
                <h1 className="project-title">Projet Ecolotri - Application de Suivi des Collectes</h1>
              </div>
              <img
                src="/imagesProjet/logoEcolotri.jpg"
                alt="Logo Ecolotri"
                className="project-logo centered-image"
                style={{ width: '200px', height: 'auto' }}
              />
            </div>
          </header> 
        <section className="project-presentation">
          <h2 className="section-title">Présentation du projet Ecolotri</h2>
          <br></br>
          <p className="section-description">
            Le projet Ecolotri est un site web développé en binôme, durant un atelier de professionnalisation de 4 heures suivi en première année de BTS SIO. L’objectif principal était de créer une plateforme pour le suivi et la gestion des données de pesée des déchets collectés par la société Ecolotri.          </p>
          <br></br>
          <p className="section-description">
            Le site propose plusieurs fonctionnalités clés pour différents types d'utilisateurs :
          </p>
          <br></br>
          <ul className="indent-list">
            <li><strong>Authentification :</strong> Un système de connexion sécurisé pour les transporteurs et les administrateurs.</li>
            <li><strong>Ajout de pesée :</strong> Les transporteurs connectés peuvent enregistrer de nouvelles données de pesée pour leurs collectes.</li>
            <li><strong>Gestion des pesées :</strong> Une liste complète des pesées est accessible, avec la possibilité pour les administrateurs de modifier ou de supprimer des entrées.</li>
            <li><strong>Statistiques :</strong> Un menu statistique offrant plusieurs rapports : Liste des syndicats par type de déchet, total des déchets par syndicat et par type de déchet, et le total des déchets collectés sur une période spécifique.</li>
          </ul>
          <br></br>
          <p className="section-description">
            Le site distingue deux rôles principaux :
          </p>
          <br></br>
          <ul className="indent-list">
            <li><strong>Transporteurs :</strong> Après authentification, ils peuvent ajouter de nouvelles données de pesée concernant leurs chargements.</li>
            <li><strong>Administrateurs :</strong> Ils disposent d'un contrôle total sur le site, incluant la gestion complète des pesées (ajout, modification, suppression) et l'accès à l'ensemble des rapports statistiques.</li>
          </ul>
          <br></br><br></br>
          <h3>Mes contributions au projet :</h3>
          <br></br>
          <p className="section-description">
            Dans le cadre de ce projet, j'ai principalement contribué au développement de la partie administrative du site. Mes responsabilités ont inclus :
          </p>
          <br></br>
          <ul className="indent-list">
            <li>Développement de la liste des pesées, permettant aux administrateurs de visualiser l'ensemble des données enregistrées.</li>
            <li>Implémentation des fonctionnalités de modification et de suppression des pesées pour les administrateurs.</li>
            <li>Création du menu statistique et de l'ensemble des rapports associés (liste des syndicats par type de déchet, total par syndicat et type de déchet, total entre deux dates).</li>
            <li>Développement de la fonctionnalité d'ajout de nouvelles pesées, accessible aux transporteurs et potentiellement aux administrateurs.</li>
            <li>Gestion globale de la partie administrative du site.</li>
          </ul>
          <br></br>
          <p className="section-description">
            Mon binôme s'est quant à lui concentré sur la création de la base de données, la mise en place du style visuel (CSS) et l'implémentation du système d'authentification des utilisateurs.
          </p>
        </section>

        <section className="site-architecture centered-section">
          <h2 className="section-title">Aperçu du Modèle Conceptuel de Données</h2>
          {/* Remplacer cette image par le schéma MCD généré pour le projet Ecolotri */}
          <img src="/imagesProjet/mcd ecolotri.png" alt="Modèle Conceptuel de Données du projet Ecolotri" className="site-map-imageEcolotri centered-image" style={{ maxWidth: '80%' }} />
          <br></br>
          <p className="section-description">
            Ce MCD organise les données d'Ecolotri autour de trois éléments : les Syndicats (regroupements de communes avec leurs informations), les Pesées (enregistrements de chaque pesée avec date, poids, etc.), et les Types de Déchets (catégories de déchets).

            Chaque Pesée est obligatoirement liée à un seul Syndicat et concerne un seul Type de Déchet. Un Syndicat peut avoir plusieurs Pesées, et un Type de Déchet peut être associé à plusieurs Pesées.

            En bref, il structure les informations pour suivre les pesées de déchets par syndicat et par type.
          </p>
          <br></br><br></br><br></br>
        </section>

        <section className="project-preview centered-section">
          <h2 className="section-title">Aperçu du site Ecolotri</h2>
          <p className="section-description">
            Découvrez les différentes pages et fonctionnalités du site Ecolotri dans la vidéo de présentation ci-dessous.          
          </p>
          <div className="video-container centered-element">
            <video src="/videosProjet/captureEcolotri.mp4" controls width="640" height="360">
              Votre navigateur ne supporte pas la lecture de vidéos.
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

export default ProjectEcolotri;