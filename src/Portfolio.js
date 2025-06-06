import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaCode, FaBriefcase, FaEnvelope, FaMicrochip, FaGavel } from "react-icons/fa";
import { useRef,useState } from 'react'; 
import emailjs from '@emailjs/browser';
import Layout from "./Layout";
import NavBar from "./NavBar";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const projects = [
  {
    title: "Site e-commerce pour l'ONF",
    description:
      "Site de vente de vêtements et d'équipements de protection individuelle (EPI).",
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap", "GitHub"],
    year: "2023",
    image: "/imagesProjet/logo_ONF.png",
    link: "/projects/onf",
  },
  {
    title: "Optimisation back-end chez Jung Logistique",
    description:
      "Projet d'optimisation de l'architecture back-end/front-end de l'extranet de l'entreprise.",
    technologies: ["C#", "JavaScript", "GitHub"],
    year: "2023-2024",
    image: "/imagesProjet/logoJung.png",
    link: "/projects/jung",
  },
  {
    title: "Ecolotri",
    description:
      "Site web pour la gestion et le suivi des pesées de déchets collectés",
    technologies: ["HTML", "CSS", "PHP", "MySQL", "GitHub"],
    year: "2023",
    image: "/imagesProjet/logoEcolotri.jpg",
    link: "/projects/ecolotri",
  },
  {
    title: "ServiceNow",
    description:
      "Contribution à l'optimisation de la gestion des actifs applicatifs avec ServiceNow et découverte de la supervision IT (SquaredUp, SCOM) chez Daramic.",
    technologies: ["ServiceNow", "SquaredUp", "SCOM", "Excel"],
    year: "2022",
    image: "/imagesProjet/logoServiceNOOOW.png",
    link: "/projects/servicenow",
  },
  {
    title: "BricoBrac",
    description:
      "Site web pour une chaîne de magasins de bricolage familiale.",
    technologies: ["HTML", "CSS", "PHP", "MySQL", "JavaScript", "Trello", "GitHub"],
    year: "2024",
    image: "/imagesProjet/logoBricoBrac.png",
    link: "/projects/bricobrac",
  },
  {
    title: "FormaTech",
    description:
      "Site web conçue pour la gestion complète des formations, des modules et des cours au sein d'un organisme de formation",
    technologies: ["HTML", "CSS", "PHP", "MySQL", "JavaScript", "Trello", "GitHub"],
    year: "2024",
    image: "/imagesProjet/LogoFormaTech.png",
    link: "/projects/formatech",
  },
];

export default function Portfolio() {
  const [message, setMessage] = useState('');
  const maxLength = 1500;

  const handleMessageChange = (event) => {
    if (event.target.value.length <= maxLength) {
      setMessage(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_eztljvy', 'template_31zdrqv', event.target,'m7FHoEFgqZ8dyqNAv')
    .then(
      (result) => {
        console.log(result.text);
        alert('Message envoyé avec succès !');
      },
      (error) => {
        console.log(error.text);
        alert('Une erreur est survenue. Veuillez réessayer.');
      }
    );

    event.target.reset();
    setMessage('');
  };

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100); // petit délai pour que le DOM soit chargé
      }
    }
  }, [location]);

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
      <br id="about"></br><br></br>
      <div className="container">
        <div className="header-info animated-text">
          <h1>Mickael Hoffer</h1>
          <h2>Développeur Web Full Stack</h2>
          <br></br>
          <div className="socials-header">
            <a href="https://github.com/mickaaa67" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/mickael-hoffer-906a072aa/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:mickael.hoffer@gmail.com" className="email-icon"> {/* Ajoutez un lien mailto */}
              <FaEnvelope />
            </a>
          </div>
        </div>
        <br></br><br></br>
        <section className="section about-section">
          <div className="about-text">
          <h2 class="text-4xl sm:text-6xl text-start font-bold pb-4">Présentation 👨🏻‍💻</h2>
          <br></br>
            <p>
              Jeune développeur de 22 ans, passionné par le développement web, titulaire d'un BTS Services Informatiques aux Organisations option Solutions Logicielles et Applications Métiers qui m'a permis de structuré mes compétences.<br></br><br></br> Fort de plusieurs réalisations qui témoignent de ma motivation, je recherche activement un poste de développeur web en alternance pour octobre 2025 et pour une durée de 1 an, dans le cadre de ma préparation à la Licence professionnelle Développement Web Communication et Apprentissages.
            </p>
            <br></br>
              <a href="https://drive.google.com/file/d/1CCWlH_0rMgtzOo7kwbWNHDxoHhtoUvlX/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="button">
                Voir mon CV
              </a>
          </div>
          <div className="about-image">
            <img src="/images/présentation.png" alt="Illustration à propos de moi" />
          </div>
        </section >
        <br id="parcours-pro"></br><br></br><br></br>
        <section  className="parcours-pro-section">
          <h2>Mon parcours professionnel en informatique 💻 </h2>
          <div className="timeline-container">
            <div className="timeline-column experiences">
              <h3>Expériences Professionnelles</h3>
              <div className="timeline-item">
                <div className="timeline-point"></div>
                <div className="timeline-date">octobre 2024 - novembre 2024</div>
                <div className="timeline-content">Stage en Informatique<br></br>S2i Evolution - Création de sites web, Strasbourg </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-point"></div>
                <div className="timeline-date">septembre 2023 - septembre 2024</div>
                <div className="timeline-content">Assistant Projet en Alternance <br></br>Jung Logistique - Transport Routier, Sélestat</div>
              </div>
              <div className="timeline-item">
                <div className="timeline-point"></div>
                <div className="timeline-date">février 2023 - avril 2023</div>
                <div className="timeline-content">Stage en Informatique (deuxième période)<br></br>L'ONF - Gestion des forêts, Colmar
                  <br />
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-point"></div>
                <div className="timeline-date">mai 2022 - juillet 2022</div>
                <div className="timeline-content">Stage en Informatique (première période)<br></br> Daramic - Industrie Plastique, Sélestat
                  <br />
                </div>
              </div>
            </div>
            <div className="timeline-line"></div>
            <div className="timeline-column formations">
              <h3>Formations</h3>
              <div className="timeline-item formation-item">
                <div className="timeline-point"></div>
                <div className="timeline-date">septembre 2023 - juillet 2024</div>
                <div className="timeline-content">
                  Brevet de Technicien Supérieur Services Informatiques aux Organisations option Solutions Logicielles et Applications Métiers en Alternance.
                  <br />
                  IRIS MediaSchool, Strasbourg
                </div>
              </div>
              <div className="timeline-item formation-item">
                <div className="timeline-point"></div>
                <div className="timeline-date">septembre 2021 - juillet 2023</div>
                <div className="timeline-content">
                  Brevet de Technicien Supérieur Services Informatiques aux Organisations option Solutions Logicielles et Applications Métiers en Initial.
                  <br />
                  Lycée Camille Sée, Colmar
                </div>
              </div>
              <div className="timeline-item formation-item last">
                <div className="timeline-point"></div>
                <div className="timeline-date">septembre 2018 - juillet 2021</div>
                <div className="timeline-content">Baccalauréat Technologique, Sciences et Technologies de l'Industrie et du Développement Durable option Systèmes d'Information et Numérique. <br></br>Lycée Polyvalent Jean-Baptiste Schwilgué, Sélestat</div>
              </div>
            </div>
          </div>
        </section>
        <br id="skills"></br><br></br><br></br>
        <section className="section">
          <h2> Mes compétences</h2>
          <br />
          <p class="instruction-text">* Passez la souris sur chaque compétence pour en découvrir les détails et mon niveau de maîtrise *</p>
          <br></br>
          <div className="skills-container">
            <div className="skill-list">
              {[
                { name: "HTML", icon: "/images/html.png", level: "Solide expertise dans la structuration sémantique de contenu web et la création de pages performantes. Utilisé comme base pour tous mes projets, garantissant une compatibilité cross-navigateur et une accessibilité optimale. ⭐⭐⭐⭐" },
                { name: "CSS", icon: "/images/css.png", level: "Connaissances approfondies en stylisation web, avec une maîtrise des techniques de responsive design (Media Queries, Flexbox, Grid) pour une adaptation parfaite sur tous les appareils. Usage régulier pour la création d'interfaces utilisateur esthétiques et fonctionnelles. ⭐⭐⭐⭐" },
                { name: "Bootstrap", icon: "/images/Bootstrap.png", level: "Bases solides de ce framework CSS pour le développement rapide d'interfaces web responsives et modernes. Utilisé sur plusieurs projets personnels pour accélérer le prototypage et l'intégration visuelle. ⭐⭐⭐" },
                { name: "JavaScript", icon: "/images/javascript.png", level: "Bases solides acquises en programmation côté client, essentielles pour rendre les interfaces web interactives et dynamiques. Actuellement en cours d'approfondissement via des projets personnels et l'exploration de nouvelles fonctionnalités du langage. ⭐⭐⭐" }
              ].map((skill, index) => (
                <div className="skill-item-large tooltip-wrapper" key={index}>
                  <img src={skill.icon} alt={skill.name} className="skill-icon-large" />
                  <span>{skill.name}</span>
                  <div className="tooltip">
                    <span className="tooltip-text">
                      {skill.level.replace(/ ⭐+$/, '')}
                    </span>
                    <div className="tooltip-stars">
                      {skill.level.match(/⭐+/)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="skill-group">
              <h3>Back-end</h3>
              <div className="skill-list">
                {[
                  { name: "PHP", icon: "/images/php.png", level: "Bases solides en développement back-end, mises en pratique en autonomie et lors de mon stage à l'ONF. ⭐⭐⭐" },
                  { name: "SQL", icon: "/images/sql.png", level: "Maîtrise confirmée des requêtes SQL et de la gestion de bases de données relationnelles, appliquée dans la majorité de mes projets. ⭐⭐⭐⭐" },
                  { name: "C#", icon: "/images/csharp.png", level: "Bases acquises en programmation orientée objet, explorées lors de cours et de travaux pratiques. ⭐⭐⭐" },
                  { name: "Java", icon: "/images/java.png", level: "Maîtrise des bases, principalement acquise en environnement académique. ⭐⭐⭐" },
                  { name: "Python", icon: "/images/python.png", level: "Maîtrise des bases, avec un focus sur l'algorithmie, acquise en BTS et approfondie en autodidact.  ⭐⭐⭐" },
                  { name: "Node.js", icon: "/images/nodeJS.png", level: "Bonnes bases pour le développement back-end JavaScript, en cours d'approfondissement en autodidacte. ⭐⭐⭐" }
                ].map((skill, index) => (
                <div className="skill-item-large tooltip-wrapper" key={index}>
                  <img src={skill.icon} alt={skill.name} className="skill-icon-large" />
                  <span>{skill.name}</span>
                  <div className="tooltip">
                    <span className="tooltip-text">
                      {skill.level.replace(/ ⭐+$/, '')}
                    </span>
                    <div className="tooltip-stars">
                      {skill.level.match(/⭐+/)}
                    </div>
                  </div>
                </div>
              ))}
              </div>
            </div>
            <div className="skill-group">
              <h3>Framework</h3>
              <div className="skill-list">
                {[
                  { name: ".NET", icon: "/images/NET.png", level: "Bonne maîtrise - appliquée concrètement durant mon alternance chez Jung Logistique. ⭐⭐⭐⭐" },
                  { name: "Laravel", icon: "/images/Laravel.png", level: "Utilisé activement durant mon alternance pour le développement back-end d'une application de gestion de stock. ⭐⭐⭐" },
                  { name: "ReactJS", icon: "/images/react.png", level: "Bonne maîtrise pour la création d'interfaces utilisateur modernes et interactives, approfondie en autodidact et l'application sur plusieurs projets personnels.  ⭐⭐⭐⭐" },
                  { name: "Symfony", icon: "/images/Symfony.png", level: "Maîtrise des bases du framework PHP pour le développement web structuré. Compétence acquise en autodidacte et actuellement mise en pratique sur un projet personnel de plateforme de publication de contenu. ⭐⭐⭐" }
                ].map((skill, index) => (
                <div className="skill-item-large tooltip-wrapper" key={index}>
                  <img src={skill.icon} alt={skill.name} className="skill-icon-large" />
                  <span>{skill.name}</span>
                  <div className="tooltip">
                    <span className="tooltip-text">
                      {skill.level.replace(/ ⭐+$/, '')}
                    </span>
                    <div className="tooltip-stars">
                      {skill.level.match(/⭐+/)}
                    </div>
                  </div>
                </div>
              ))}
              </div>
            </div>
            <div className="skill-group">
              <h3>Outils & Environnement</h3>
              <div className="skill-list">
                {[
                  { name: "VS Code", icon: "/images/vscode.png", level: "Très bonne maîtrise  indispensable pour le développement de tous mes projets personnels et professionnels, grâce à ses nombreuses extensions et son environnement personnalisable. ⭐⭐⭐⭐" },
                  { name: "Microsoft SQL Server", icon: "/images/SqlServer.png", level: "Bonne maîtrise de ce système de gestion de base de données relationnelles, utilisé activement durant mon alternance chez Jung Logistique pour la création et l'optimisation de requêtes visant à faciliter et fluidifier la recherche et l'obtention de résultats. ⭐⭐⭐⭐" },
                  { name: "Canva", icon: "/images/canva.png", level: "Très bonne maitrise, utilisé régulièrement pour la création de supports visuels (logos, infographies) et la mise en forme de documents professionnels (CV, lettres de motivation). ⭐⭐⭐⭐" },
                  { name: "Git", icon: "/images/git.png", level: "Maîtrise des fondamentaux du contrôle de version distribué, essentiel pour la gestion de l'historique et la collaboration sur le code de mes projets. ⭐⭐⭐" },
                  { name: "GitHub", icon: "/images/github.png", level: "Bonne maîtrise de cette plateforme de collaboration et d'hébergement de code, utilisée quotidiennement pour le versioning de mes projets personnels, ainsi que de manière intensive durant mon stage à l'ONF et mon alternance chez Jung Logistique. ⭐⭐⭐⭐" },
                  { name: "Docker", icon: "/images/docker.png", level: "Compétence en conteneurisation, appliquée pour l'hébergement du site développé durant mon stage à l'ONF sur un environnement OVH. J'ai exploré son rôle dans la simplification du déploiement. ⭐⭐" },
                  { name: "Jira", icon: "/images/Jira.png", level: "Assez bonne maîtrise de cet outil de gestion de projet agile, acquis par autoformation. Je l'utilise pour le suivi des tâches, la planification des sprints et l'organisation de mes projets personnels. ⭐⭐⭐" },
                  { name: "Trello", icon: "/images/trello.png", level: "Assez bonne maîtrise de Trello pour la gestion visuelle de projets et le suivi des workflows, utilisé activement sur mes projets BricoBrac et Formatech. ⭐⭐⭐" },
                  { name: "Yarn", icon: "/images/yarn.png", level: "Assez bonne maîtrise de ce gestionnaire de paquets JavaScript pour la gestion des dépendances et l'optimisation des performances des projets front-end, acquise en autodidacte. ⭐⭐⭐" },
                  { name: "npm", icon: "/images/npm.png", level: "Assez bonne maîtrise de ce gestionnaire de paquets JavaScript, essentiel pour l'installation et la gestion des librairies dans mes projets de développement web, acquise en autodidacte. ⭐⭐⭐" }
                ].map((skill, index) => (
                <div className="skill-item-large tooltip-wrapper" key={index}>
                  <img src={skill.icon} alt={skill.name} className="skill-icon-large" />
                  <span>{skill.name}</span>
                  <div className="tooltip">
                    <span className="tooltip-text">
                      {skill.level.replace(/ ⭐+$/, '')}
                    </span>
                    <div className="tooltip-stars">
                      {skill.level.match(/⭐+/)}
                    </div>
                  </div>
                </div>
              ))}
              </div>
            </div>
            <div className="skill-group">
              <h3>CMS (Système de gestion de contenu)</h3>
              <div className="skill-list">
                {[
                  { name: "Wordpress", icon: "/images/wordpress.png", level: "Maîtrise assez bonne, utilisé pour la création de sites web vitrines et le développement personnalisé de thèmes/plugins. Utilisé en cours pour une page de location de bateau. ⭐⭐⭐" },
                  { name: "Shopify", icon: "/images/shopify.png", level: "Familiarité avec cette plateforme e-commerce, utilisée pour un projet personnel axé sur la création rapide de boutiques en ligne pour le dropshipping. J'ai appris à configurer une boutique, gérer les produits et les thèmes. ⭐⭐⭐" }
                ].map((skill, index) => (
                <div className="skill-item-large tooltip-wrapper" key={index}>
                  <img src={skill.icon} alt={skill.name} className="skill-icon-large" />
                  <span>{skill.name}</span>
                  <div className="tooltip">
                    <span className="tooltip-text">
                      {skill.level.replace(/ ⭐+$/, '')}
                    </span>
                    <div className="tooltip-stars">
                      {skill.level.match(/⭐+/)}
                    </div>
                  </div>
                </div>
              ))}
              </div>
            </div>
          </div>
        </section>
        <br id="projects"></br><br></br><br></br>
        <section className="section">
          <h2>Mes projets </h2>
          <br></br>
          <div className="grid">
            {projects.map((project, index) => (
              <div className="card" key={index}>
                <img src={project.image} alt={project.title} />
                <h2 className="text-xl">{project.title}</h2>
                <br></br>
                <p className="mt-2"><strong>Description :</strong> {project.description}</p>
                <br></br>
                <p className="text-sm mt-2"><strong>Technologies :</strong> {project.technologies.join(", ")}</p>
                <br></br>
                <p className="text-sm text-gray-400"><strong>Année :</strong> {project.year}</p>
                <Link to={project.link} className="button">Voir plus</Link>
              </div>
            ))}
          </div>
        </section>
        <br></br><br></br><br></br><br></br><br></br><br></br>
        <section id="contact" className="section">
          <h2>Formulaire de contact ✉️</h2>
          <p>N'hésitez pas à me contacter directement par email.</p>
          <div className="contact-form">
            <form onSubmit={handleSubmit}> {/* onSubmit lié à la fonction handleSubmit */}
              <div className="form-group">
                <label htmlFor="name">Nom *</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Téléphone</label>
                <input type="tel" id="phone" name="phone" />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Objet *</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  value={message}
                  onChange={handleMessageChange}
                  maxLength={maxLength}
                />
                <p className="character-count">{message.length}/{maxLength}</p>
              </div>
              <p className="required-field">* Champ obligatoire</p>
              <div className="form-consent">
                <input type="checkbox" id="consent" name="consent" required />
                <label htmlFor="consent">
                  En soumettant ce formulaire, j'accepte que mes données personnelles soient utilisées pour vous recontacter. Pour connaître et exercer vos droits, veuillez consulter la <a href="/politique-de-confidentialite" target="_blank" rel="noopener noreferrer">politique de confidentialité</a>.
                </label>
              </div>
              <button type="submit" className="button">Envoyer le message</button>
            </form>
          </div>
        </section>
        <br></br><br></br><br></br><br></br><br></br>
      </div>
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