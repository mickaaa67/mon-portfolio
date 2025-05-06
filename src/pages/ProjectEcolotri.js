import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

function ProjectEcolotri() {
  return (
    <div className="project-page centered-content">
      <header className="project-header">
        <Link to="/projects" className="back-button">
          <FaArrowLeft />
        </Link>
        <div className="title-logo">
          <h1 className="project-title">Projet Ecolotri - Application de Suivi des Collectes</h1>
          <img src="/imagesProjet/logoEcolotri.jpg" alt="Logo Ecolotri" className="project-logo centered-image" style={{ width: '200px', height: 'auto' }} />
        </div>
      </header>

      <section className="project-presentation">
        <h2 className="section-title">Présentation du projet Ecolotri</h2>
        <br></br>
        <p className="section-description">
          Le projet Ecolotri est un site web développé en groupe de deux durant un cours de 4 heures en première année de BTS. L'objectif principal était de créer une plateforme pour le suivi et la gestion des données de pesée des déchets collectés par la société Ecolotri.
        </p>
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
          Mon collègue s'est quant à lui concentré sur la création de la base de données, la mise en place du style visuel (CSS) et l'implémentation du système d'authentification des utilisateurs.
        </p>
      </section>

      <section className="site-architecture centered-section">
        <h2 className="section-title">Aperçu du Modèle Conceptuel de Données (MCD) du projet Ecolotri</h2>
        {/* Remplacer cette image par le schéma MCD généré pour le projet Ecolotri */}
        <img src="/imagesProjet/mcd ecolotri.png" alt="Modèle Conceptuel de Données du projet Ecolotri" className="site-map-imageEcolotri centered-image" style={{ maxWidth: '80%' }} />
        <br></br>
        <p className="section-description">
          Ce Modèle Conceptuel de Données (MCD) illustre l'organisation des informations pour le projet Ecolotri. Les entités principales comprennent les <strong>Utilisateurs</strong> (administrateurs et transporteurs) qui se connectent au système. Les <strong>Pesées</strong> constituent le cœur des données, enregistrant des informations telles que le syndicat, l'immatriculation du camion, le type de déchet, et le poids. Des entités comme <strong>Syndicat</strong> et <strong>TypeDechet</strong> permettent de catégoriser les données. Le MCD détaille également les relations entre ces entités pour assurer la cohérence et l'intégrité des informations, notamment la relation entre les utilisateurs et les pesées qu'ils créent ou gèrent, ainsi que les liens vers les tables de référence pour les syndicats et les types de déchets utilisés dans les statistiques.
        </p>
      </section>

      <section className="project-preview centered-section">
        <h2 className="section-title">Aperçu du site Ecolotri</h2>
        <p className="section-description">
          Pour avoir un aperçu visuel des différentes pages et fonctionnalités du site Ecolotri, veuillez consulter la vidéo de présentation ci-dessous.
        </p>
        <div className="video-container centered-element">
          <video src="/videosProjet/presentationEcolotri.mp4" controls width="640" height="360">
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
        </div>
      </section>

      <footer className="project-footer">
        <Link to="/projects">Retour à la liste des projets</Link>
      </footer>
    </div>
  );
}

export default ProjectEcolotri;