// src/Portfolio.js
import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const projects = [
  {
    title: "Site e-commerce pour l'ONF",
    description:
      "Développement d'un site de e-commerce pour la vente d'équipements de protection individuelle.",
    technologies: ["PHP", "MySQL", "Bootstrap"],
    year: "2023",
    image: "/images/onf.png",
    link: "/projects/onf",
  },
  {
    title: "Optimisation back-end chez Jung Logistique",
    description:
      "Amélioration du traitement des données pour une réduction de 40% du temps d'exécution.",
    technologies: ["C#", "JavaScript"],
    year: "2023",
    image: "/images/jung.png",
    link: "/projects/jung",
  },
];

export default function Portfolio() {
  return (
    <div className="container">
      <div className="header-info">
        <h1>Mickael Hoffer</h1>
        <h2>Développeur Web Full Stack</h2>
        <div className="socials-header">
          <a href="https://github.com/tonprofil" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/tonprofil" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="grid">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <img src={project.image} alt={project.title} />
            <h2 className="text-xl">{project.title}</h2> {/* Utilise la classe existante text-xl */}
            <p className="mt-2">{project.description}</p>
            <p className="text-sm mt-2"><strong>Technologies :</strong> {project.technologies.join(", ")}</p>
            <p className="text-sm text-gray-400">{project.year}</p>
            <Link to={project.link} className="button">Voir plus</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
