import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function ProjectONF() {
  return (
    <div className="p-8 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold text-blue-400 mb-4">Site e-commerce pour l'ONF</h1>
      <img src="/images/onf.png" alt="Projet ONF" className="rounded shadow mb-6" />
      <p className="text-gray-300 mb-4">
        Ce projet consistait à développer un site de e-commerce pour l'Office National des Forêts
        afin de vendre des équipements de protection individuelle. Réalisé avec PHP, MySQL, CSS et Bootstrap.
      </p>
      <ul className="list-disc list-inside text-blue-300 mb-6">
        <li>Fonctionnalité de panier</li>
        <li>Interface utilisateur responsive</li>
        <li>Connexion / inscription sécurisée</li>
      </ul>
      <Link to="/" className="text-blue-500 hover:underline">← Retour au portfolio</Link>
    </div>
  );
}
