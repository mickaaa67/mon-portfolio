import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Layout from "../Layout";
import NavBar from "../NavBar";

function ProjectServiceNow() {
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
          <div className="titlelogodaramic">
            <div className="title-row">
              <Link to="/" className="back-button">
                <FaArrowLeft />
              </Link>
              <h1 className="project-title">
                Stage ServiceNow - Optimisation de la Gestion des Services IT chez Daramic
              </h1>
            </div>
            <div className="logos-container">
              <img
                src="/imagesProjet/logoServiceNow.jpg"
                alt="Logo ServiceNow"
                style={{ maxHeight: '200px' }}
              />
              <img
                src="/imagesProjet/logoDaramic.jpg"
                alt="Logo Daramic"
                style={{ maxHeight: '300px' }}
              />
            </div>
          </div>
        </header>
        <section className="project-presentation">
          <h2 className="section-title">Mon expérience de stage chez Daramic</h2>
          <br></br><br></br>
          <p>
            Mon premier stage en entreprise s'est déroulé pendant cinq semaines enrichissantes chez <strong>Daramic</strong>, une entreprise située à Sélestat. Daramic est un leader mondial dans la fabrication et la fourniture de séparateurs de batterie haute performance pour les secteurs automobile, industriel et les applications spéciales. L'usine de Sélestat, où j'ai effectué mon stage, joue un rôle clé dans la production de ces composants essentiels.
          </p>
          <br></br><br></br>
          <p>
            ServiceNow est une plateforme cloud puissante conçue pour aider les entreprises à gérer et automatiser leurs flux de travail numériques. Principalement connue pour ses solutions de gestion des services informatiques (ITSM), ServiceNow s'étend bien au-delà, offrant des outils pour la gestion des services clients, des ressources humaines, de la sécurité et bien d'autres domaines. L'objectif principal est d'améliorer l'efficacité, de réduire les coûts et d'offrir de meilleures expériences aux employés et aux clients en centralisant les processus sur une seule plateforme.
          </p>
          <br></br><br></br>
          <img src="/imagesProjet/Capture ServiceNow 1.png" alt="Aperçu de ServiceNow" className="site-map-image centered-image" />
          <br></br><br></br>
          <h3>Missions principales : Analyse et Optimisation des Actifs Applicatifs</h3>
          <br></br>
          <p>
            Durant ce stage, ma mission principale a consisté à contribuer à l'amélioration de la gestion des actifs applicatifs de Daramic, un aspect crucial pour assurer l'efficacité et la fiabilité des services IT au sein de l'organisation.
          </p>
          <br></br><br></br>
          <img src="/imagesProjet/Capture ServiceNow 2.png" alt="Aperçu de ServiceNow" className="site-map-image centered-image" />
          <br></br><br></br>
          <h3>Mes réalisations et compétences développées :</h3>
          <br></br>
          <ul className="indent-list">
            <li><strong>Optimisation de la base d'actifs ServiceNow :</strong> Revue, vérification et mise à jour des services et de leurs informations clés (serveurs, équipes). Identification et ajout des services business manquants.</li>
            <li><strong>Alignement de la supervision SquaredUp :</strong> Adaptation des tableaux de bord de supervision suite aux mises à jour de la base d'actifs ServiceNow. Initiation à la supervision SCOM.</li>
            <li><strong>Autonomie et analyse technique :</strong> Développement de l'autonomie et des compétences d'analyse technique essentielles pour un poste d'analyste application.</li>
            <li><strong>Configuration ServiceNow :</strong> Renforcement des compétences de navigation et de configuration de la plateforme ServiceNow via la gestion des actifs applicatifs.</li>
            {/* Tu peux ajouter ici d'autres compétences ou réalisations spécifiques */}
          </ul>
          <br></br><br></br>
          <p>
          <strong>Aperçu de la base d'actifs ServiceNow :</strong> 
          </p>
          <br></br>
          <p>Cette section illustre mon travail sur la base d'actifs applicatifs de ServiceNow. J'ai été responsable de l'identification et de l'ajout des entrées manquantes, ainsi que de la mise à jour et de la vérification de l'exactitude des informations existantes pour assurer une gestion précise des actifs IT.</p>
          <br></br><br></br>
          <img src="/imagesProjet/Capture ServiceNow 4.png" alt="Aperçu de ServiceNow" className="site-map-image centered-image" />
          <br></br><br></br>
          <p>
          <strong>Aperçu de SquaredUp :</strong>
          </p>
          <br></br>
          <p>Ma découverte et mon utilisation de l'outil de supervision SquaredUp ont eu lieu durant la dernière semaine de mon stage. Par conséquent, mon expérience avec cette plateforme fut brève et constitue une introduction à ses fonctionnalités.</p>
          <br></br><br></br>
          <img src="/imagesProjet/Capture ServiceNow 3.png" alt="Aperçu de ServiceNow" className="site-map-image centered-image" />
          <br></br><br></br>
        </section>
        <section className="project-presentation">
          <h2 className="section-title">Informations Complémentaires</h2>
          <br></br>
          <p>
            <strong>Confidentialité et Aperçu Visuel :</strong> Pour des raisons de confidentialité, les images présentées sur cette page sont des illustrations génériques destinées à donner un aperçu de l'application ServiceNow. Elles ne reflètent pas directement les configurations spécifiques réalisées durant mon stage.
          </p>
          <br></br><br></br>
          <p>
            <strong>Nature du Stage et Compétences Acquises :</strong> Bien que ce stage ne soit pas axé sur le développement, il m'a permis de découvrir une autre facette essentielle de l'informatique. J'ai pu mettre en pratique la documentation via des fichiers Word et Excel, explorer et tester des bases de données, et acquérir des notions de réseau en effectuant des tests de connectivité (ping) sur les serveurs référencés dans les bases de données applicatives. J'ai développé des compétences précieuses en analyse technique, en gestion de données et en autonomie.
          </p>
          <br></br><br></br>
          <p>
            J'ai été encadré par Steve Fuchs, et cette expérience chez Daramic m'a permis de comprendre l'importance d'une gestion précise des actifs IT et des outils de supervision comme ServiceNow et SquaredUp dans un environnement industriel.
          </p>
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

export default ProjectServiceNow;