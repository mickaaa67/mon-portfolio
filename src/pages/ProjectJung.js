import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function ProjectJung() {
  return (
    <div className="p-8 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold text-blue-400 mb-4">Optimisation back-end chez Jung Logistique</h1>
      <img src="/images/jung.png" alt="Projet Jung" className="rounded shadow mb-6" />
      <p className="text-gray-300 mb-4">
        Mission de 3 semaines pour optimiser le traitement de données d’une application logistique.
        Grâce à des améliorations en C# et SQL, le temps d’exécution a été réduit de 40%.
      </p>
      <ul className="list-disc list-inside text-blue-300 mb-6">
        <li>Refactorisation du code</li>
        <li>Analyse des goulots d’étranglement</li>
        <li>Tests unitaires & documentation</li>
      </ul>
      <Link to="/" className="text-blue-500 hover:underline">← Retour au portfolio</Link>
    </div>
  );
}
