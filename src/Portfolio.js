import React from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Site e-commerce pour l'ONF",
    description: "Développement d'un site de e-commerce pour la vente d’équipements.",
    technologies: ["PHP", "MySQL", "Bootstrap"],
    year: "2023",
    image: "/images/onf.png",
    link: "/projects/onf",
  },
  {
    title: "Optimisation back-end chez Jung",
    description: "Amélioration du traitement des données.",
    technologies: ["C#", "JavaScript"],
    year: "2023",
    image: "/images/jung.png",
    link: "/projects/jung",
  },
];

export default function Portfolio() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Mickael Hoffer - Développeur Web</h1>
      <div>
        {projects.map((project, index) => (
          <Card key={index}>
            <CardContent>
              <img src={project.image} alt={project.title} style={{ width: "100%", height: "auto" }} />
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <p>{project.technologies.join(", ")}</p>
              <p>{project.year}</p>
              <Link to={project.link}>Voir plus</Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
