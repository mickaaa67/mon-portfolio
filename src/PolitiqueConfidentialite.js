import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaGithub, FaLinkedin, FaCode, FaBriefcase, FaEnvelope, } from 'react-icons/fa';
import Navbar from "./NavBar";
import Layout from "./Layout";
import NavBar from "./NavBar";

function PolitiqueConfidentialite() {
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
      <br></br>
      <div className="privacy-container">
        <header className="privacy-header">
          <div className="title-row">
            <Link to="/#contact" className="back-button">
              <FaArrowLeft />
            </Link>
            <h1 className="privacy-title">Politique de Confidentialité</h1>
          </div>
        </header>
        <main className="privacy-content">
          <section>
            <h2>Introduction</h2>
            <p>
              Cette politique de confidentialité décrit comment vos informations personnelles sont collectées, utilisées et partagées lorsque vous visitez mon portfolio.
            </p>
          </section>

          <section>
            <h2>Collecte des Informations Personnelles</h2>
            <p>Je peux collecter certaines informations personnelles lorsque vous interagissez avec mon portfolio, notamment :</p>
            <ul>
              <li>Les informations que vous me fournissez directement via le formulaire de contact (nom, email, téléphone, message, objet).</li>
              <li>Des informations techniques telles que votre adresse IP, le type de navigateur, le système d'exploitation, les pages que vous consultez sur mon site, la date et l'heure de votre visite. Ces informations sont généralement collectées de manière anonyme via des outils d'analyse web.</li>
            </ul>
          </section>

          <section>
            <h2>Utilisation de vos Informations Personnelles</h2>
            <p>Les informations personnelles collectées peuvent être utilisées pour :</p>
            <ul>
              <li>Répondre à vos demandes et questions soumises via le formulaire de contact.</li>
              <li>Améliorer et personnaliser votre expérience utilisateur sur mon portfolio.</li>
              <li>Analyser l'utilisation de mon site web pour l'améliorer (par exemple, comprendre quelles pages sont les plus populaires).</li>
              <li>Vous informer des mises à jour de mon portfolio ou vous contacter pour d'autres raisons professionnelles, si vous y avez consenti.</li>
            </ul>
          </section>

          <section>
            <h2>Partage de vos Informations Personnelles</h2>
            <p>Je m'engage à ne pas vendre, louer ou partager vos informations personnelles avec des tiers à des fins commerciales sans votre consentement explicite, sauf dans les cas suivants :</p>
            <ul>
              <li>Avec des prestataires de services tiers qui m'aident à exploiter mon portfolio ou à fournir des services en mon nom (par exemple, l'analyse web). Ces prestataires sont tenus de protéger vos informations conformément à cette politique.</li>
              <li>Si la loi l'exige ou en réponse à une procédure judiciaire.</li>
              <li>Pour protéger mes droits, ma propriété ou ma sécurité, ou ceux d'autrui.</li>
            </ul>
          </section>

          <section>
            <h2>Vos Droits Concernant vos Informations Personnelles</h2>
            <p>Conformément aux lois applicables sur la protection des données, vous disposez des droits suivants concernant vos informations personnelles :</p>
            <ul>
              <li>Le droit d'accéder aux informations personnelles que je détiens à votre sujet.</li>
              <li>Le droit de rectifier toute information inexacte ou incomplète.</li>
              <li>Le droit de demander la suppression de vos informations personnelles, sous certaines conditions.</li>
              <li>Le droit de vous opposer au traitement de vos informations personnelles, sous certaines conditions.</li>
              <li>Le droit de demander la limitation du traitement de vos informations personnelles, sous certaines conditions.</li>
              <li>Le droit à la portabilité de vos données.</li>
              <li>Le droit de retirer votre consentement à tout moment si le traitement est basé sur le consentement.</li>
            </ul>
            <p>Pour exercer ces droits, veuillez me contacter via les informations fournies sur la page de contact de mon portfolio.</p>
          </section>

          <section>
            <h2>Sécurité de vos Informations Personnelles</h2>
            <p>
              Je prends des mesures de sécurité raisonnables pour protéger vos informations personnelles contre la perte, le vol, l'utilisation abusive et l'accès non autorisé. Cependant, aucune transmission sur Internet n'est totalement sécurisée.
            </p>
          </section>

          <section>
            <h2>Modifications de cette Politique de Confidentialité</h2>
            <p>
              Je peux mettre à jour cette politique de confidentialité de temps à autre. Toute modification sera affichée sur cette page.
            </p>
            <p className="last-updated">Dernière mise à jour : [15/05/2025]</p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>Si vous avez des questions concernant cette politique, veuillez me contacter via le formulaire de contact.</p>
          </section>
        </main>
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

export default PolitiqueConfidentialite;
