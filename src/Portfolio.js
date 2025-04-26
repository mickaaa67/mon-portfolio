import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaCode, FaBriefcase, FaEnvelope, FaMicrochip, FaGavel } from "react-icons/fa";
import { useState } from 'react'; // Importez useState

const projects = [
  {
    title: "Site e-commerce pour l'ONF",
    description:
      "Site de vente de vêtements et d'équipements de protection individuelle.",
    technologies: ["PHP", "MySQL", "Bootstrap"],
    year: "2023",
    image: "/images/onf.png",
    link: "/projects/onf",
  },
  {
    title: "Optimisation back-end chez Jung Logistique",
    description:
      "Extranet de l'entreprise.",
    technologies: ["C#", "JavaScript"],
    year: "2023-2024",
    image: "/images/jung.png",
    link: "/projects/jung",
  },
  {
    title: "Ecolotri",
    description:
      "Site de gestion de déchets",
    technologies: ["Html", "Css", "Php", "MySQL"],
    year: "2023",
    image: "/images/jung.png",
    link: "/projects/ecolotri",
  },
  {
    title: "ServiceNow",
    description:
      "Site de gestion de déchets",
    technologies: ["HTML", "CSS", "PHP", "MySQL"],
    year: "2023",
    image: "/images/jung.png",
    link: "/projects/servicenow",
  },
  {
    title: "BricoBrac",
    description:
      "Site vitrine de bricolage. Gestion utilisateurs (admin/clients). Modification articles. Système de commande.",
    technologies: ["HTML", "CSS", "PHP", "MySQL", "Trello", "GitHub"],
    year: "2024-2025",
    image: "/images/bricobrac.png",
    link: "/projects/bricobrac",
  },
  {
    title: "FormaTech",
    description:
      "Application web gestion formations. Gestion utilisateurs, promotions, salles. Ajout/modification infos.",
    technologies: ["HTML", "CSS", "PHP", "MySQL", "Trello", "GitHub"],
    year: "2024-2025",
    image: "/images/formatech.png",
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
    // Ici, tu peux ajouter la logique pour envoyer le formulaire
    console.log('Message envoyé:', message);
    // Réinitialiser le formulaire après l'envoi (optionnel)
    setMessage('');
  };

  return (
    <div className="container">
      <div className="header-info animated-text">
        <h1>Mickael Hoffer</h1>
        <h2>Développeur Web Full Stack</h2>
        <br></br>
        <div className="socials-header">
          <a href="https://github.com/tonprofil" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/tonprofil" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:votre.email@example.com" className="email-icon"> {/* Ajoutez un lien mailto */}
            <FaEnvelope />
          </a>
        </div>
      </div>

      <section id="about" className="section about-section">
        <div className="about-text">
        <h2 class="text-4xl sm:text-6xl text-start font-bold pb-4">Présentation 👨🏻‍💻</h2>
          <p>
            Jeune développeur de 21 ans, passionné par le développement web, Titulaire d'un BTS Services Informatiques aux Organisations option Solutions Logicielles et Applications Métiers qui m'a permis de structuré mes compétences. Fort de plusieurs réalisations qui témoignent de ma motivation, je recherche activement un poste de développeur web en alternance pour un an, dans le cadre de ma préparation à la Licence professionnelle Développement Web Communication et Apprentissages.
          </p>
            <a href="/Curriculum Vitae/cv_mickael_hoffer.pdf" target="_blank" rel="noopener noreferrer" className="button">
              Voir mon CV
            </a>
        </div>
        <div className="about-image">
          <img src="/images/présentation.png" alt="Illustration à propos de moi" />
        </div>
      </section>
      <br></br><br></br><br></br>
      <section id="parcours-pro" className="parcours-pro-section">
        <h2>Mon Parcours Professionnel en Informatique 💻 </h2>
        <div className="timeline-container">
          <div className="timeline-column experiences">
            <h3>Expériences Professionnelles</h3>
            <div className="timeline-item">
              <div className="timeline-point"></div>
              <div className="timeline-date">octobre 2024 - novembre 2024</div>
              <div className="timeline-content">Stage en Informatique chez Webtech, Strasbourg </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-point"></div>
              <div className="timeline-date">septembre 2023 - septembre 2024</div>
              <div className="timeline-content">Assistant Projet en Alternance, chez Jung Logistique, Sélestat</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-point"></div>
              <div className="timeline-date">février 2023 - avril 2023</div>
              <div className="timeline-content">Stage en Informatique à L'Office National des Forêts, Colmar
                <br />
                (deuxième période)
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-point"></div>
              <div className="timeline-date">mai 2022 - juillet 2022</div>
              <div className="timeline-content">Stage en Informatique chez Daramic, Sélestat
                <br />
                (première période)
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
                Brevet de Technicien Supérieur Services Informatiques aux Organisations Option Solutions Logicielles et Applications Métiers en alternance.
                <br />
                IRIS, Strasbourg
              </div>
            </div>
            <div className="timeline-item formation-item">
              <div className="timeline-point"></div>
              <div className="timeline-date">septembre 2021 - juillet 2023</div>
              <div className="timeline-content">
                Brevet de Technicien Supérieur Services Informatiques aux Organisations Option Solutions Logicielles et Applications Métiers en initial.
                <br />
                Lycée Camille Sée, Colmar
              </div>
            </div>
            <div className="timeline-item formation-item last">
              <div className="timeline-point"></div>
              <div className="timeline-date">septembre 2018 - juillet 2021</div>
              <div className="timeline-content">Baccalauréat Technologique, Sciences et Technologies de l'Industrie et du Développement Durable option Systèmes d'Information et Numérique. Lycée Polyvalent Jean-Baptiste Schwilgué, Sélestat</div>
            </div>
          </div>
        </div>
      </section>
      <br></br><br></br><br></br>
      <section id="skills" className="section">
        <h2> Mes compétences</h2>
        <br />
        <div className="skills-container">
          <div className="skill-group">
            <h3>Front-end</h3>
            <div className="skill-list">
              <div className="skill-item-large">
                <img src="/images/html.png" alt="HTML" className="skill-icon-large" />
                <span>HTML</span>
              </div>
              <div className="skill-item-large">
                <img src="/images/css.png" alt="CSS" className="skill-icon-large" />
                <span>CSS</span>
              </div>
              <div className="skill-item-large">
                <img src="/images/javascript.png" alt="JavaScript" className="skill-icon-large" />
                <span>JavaScript</span>
              </div>
              <div className="skill-item-large">
                <img src="/images/react.png" alt="ReactJS" className="skill-icon-large" />
                <span>ReactJS</span>
              </div>
            </div>
          </div>
          <div className="skill-group">
            <h3>Back-end</h3>
            <div className="skill-list">
              <div className="skill-item-large">
                <img src="/images/php.png" alt="PHP" className="skill-icon-large" />
                <span>PHP</span>
              </div>
              <div className="skill-item-large">
                <img src="/images/sql.png" alt="SQL" className="skill-icon-large" />
                <span>SQL</span>
              </div>
              <div className="skill-item-large">
                <img src="/images/csharp.png" alt="C#" className="skill-icon-large" />
                <span>C#</span>
              </div>
              <div className="skill-item-large">
                <img src="/images/java.png" alt="Java" className="skill-icon-large" />
                <span>Java</span>
              </div>
              <div className="skill-item-large">
                <img src="/images/python.png" alt="Python" className="skill-icon-large" />
                <span>Python</span>
              </div>
            </div>
          </div>
          <div className="skill-group">
            <h3>Outils & Environnement</h3>
            <div className="skill-list">
              <div className="skill-item-large">
                <img src="/images/vscode.png" alt="VS Code" className="skill-icon-large" />
                <span>VS Code</span>
              </div>
              <div className="skill-item-large">
                <img src="/images/canva.png" alt="Canva" className="skill-icon-large" />
                <span>Canva</span>
              </div>
              <div className="skill-item-large">
                <img src="/images/git.png" alt="Git" className="skill-icon-large" />
                <span>Git</span>
              </div>
              <div className="skill-item-large">
                <img src="/images/github.png" alt="GitHub" className="skill-icon-large" />
                <span>GitHub</span>
              </div>
              <div className="skill-item-large">
                <img src="/images/docker.png" alt="Docker" className="skill-icon-large" />
                <span>Docker</span>
              </div>
            </div>
          </div>
          <div className="skill-group">
            <h3>CMS</h3>
            <div className="skill-list">
              <div className="skill-item-large">
                <img src="/images/wordpress.png" alt="Wordpress" className="skill-icon-large" />
                <span>Wordpress</span>
              </div>
              <div className="skill-item-large">
                <img src="/images/prestashop.png" alt="Prestashop" className="skill-icon-large" />
                <span>Prestashop</span>
              </div>
              <div className="skill-item-large">
                <img src="/images/shopify.png" alt="Shopify" className="skill-icon-large" />
                <span>Shopify</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br></br><br></br><br></br>
      <section id="projects" className="section">
        <h2>Mes projets</h2>
        <br></br>
        <div className="grid">
          {projects.map((project, index) => (
            <div className="card" key={index}>
              <img src={project.image} alt={project.title} />
              <h2 className="text-xl">{project.title}</h2>
              <p className="mt-2">{project.description}</p>
              <p className="text-sm mt-2"><strong>Technologies :</strong> {project.technologies.join(", ")}</p>
              <p className="text-sm text-gray-400">{project.year}</p>
              <Link to={project.link} className="button">Voir plus</Link>
            </div>
          ))}
        </div>
      </section>
      <br></br><br></br><br></br><br></br><br></br><br></br>
      <section id="contact" className="section">
        <h2>Contactez-moi ! ✉️</h2>
        <p>N'hésitez pas à me contacter directement par email.</p>
        <div className="contact-form">
          <form action="#" method="POST" onSubmit={handleSubmit}> {/* Ajoutez onSubmit */}
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
              <p className="character-count">{message.length}/{maxLength}</p> {/* Ajoutez le compteur */}
            </div>
            <p className="required-field">* Champ obligatoire</p>
            <div className="form-consent">
              <input type="checkbox" id="consent" name="consent" required />
              <label htmlFor="consent">En soumettant ce formulaire, j'accepte que mes données personnelles soient utilisées pour vous recontacter. Pour connaître et exercer vos droits, veuillez consulter la <a href="/politique-de-confidentialite" target="_blank" rel="noopener noreferrer">politique de confidentialité</a>.</label>
            </div>
            <button type="submit" className="button">Envoyer le message</button>
          </form>
        </div>
      </section>
    </div>
  );
}