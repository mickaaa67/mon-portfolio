import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

function ProjectFormaTech() {
  return (
    <div className="project-page centered-content">
      <header className="project-header">
        <Link to="/" className="back-button">
          <FaArrowLeft />
        </Link>
        <div className="title-logo">
          <h1 className="project-title">Projet FormaTech - Application Web de Gestion de Formations</h1>
          <img src="/imagesProjet/LogoFormaTech.png" alt="Logo FormaTech" className="project-logo centered-image" />
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
          <li>La gestion des utilisateurs (création, modification, suppression des comptes).</li>
          <li>L'administration des promotions (gestion des cohortes d'apprenants).</li>
          <li>La gestion des salles (affectation des salles aux sessions de formation).</li>
          <li>La fonctionnalité d'ajout, de modification et de suppression des informations relatives aux formations, modules et cours.</li>
          {/* Ajoutez ici les autres aspects spécifiques sur lesquels tu as travaillé */}
        </ul>
        <br></br>
        <p>
          La gestion de projet a été assurée à l'aide d'outils collaboratifs tels que Trello pour le suivi des tâches et GitHub pour la gestion du code source, simulant ainsi des conditions de travail réelles.
        </p>
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
          Pour avoir un aperçu visuel des différentes pages et fonctionnalités de l'application web FormaTech, veuillez consulter la vidéo de présentation ci-dessous.
        </p>
        <div className="video-container centered-element">
          <video src="/videosProjet/presentationFormaTech.mp4" controls width="640" height="360">
          </video>
        </div>
      </section>

      <footer className="project-footer">
        <Link to="/projects">Retour à la liste des projets</Link>
      </footer>
    </div>
  );
}

export default ProjectFormaTech;