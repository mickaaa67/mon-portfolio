import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./Portfolio";
import ProjectONF from "./pages/ProjectONF";
import ProjectJung from "./pages/ProjectJung";
import ProjectBricoBrac from "./pages/ProjectBricobrac"; // Importe la page pour BricoBrac
import ProjectFormatech from "./pages/ProjectFormatech"; // Importe la page pour FormaTech
import ProjectEcolotri from "./pages/ProjectEcolotri"; // Importe la page pour Ecolotri
import ProjectServiceNow from "./pages/ProjectServiceNow"; // Importe la page pour ServiceNow
import PolitiqueConfidentialite from './PolitiqueConfidentialite'; // Importe la page de confidentialité
import Layout from './Layout'; // Importe le layout
import ScrollToTop from "./ScrollToTop"; // importe le composant





export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/projects/onf" element={<ProjectONF />} />
        <Route path="/projects/jung" element={<ProjectJung />} />
        <Route path="/projects/bricobrac" element={<ProjectBricoBrac />} /> 
        <Route path="/projects/formatech" element={<ProjectFormatech />} /> 
        <Route path="/projects/ecolotri" element={<ProjectEcolotri />} /> 
        <Route path="/projects/servicenow" element={<ProjectServiceNow />} />
        <Route path="/politique-de-confidentialite" element={<PolitiqueConfidentialite />} /> 
        <Route path="/layout" element={<Layout />} /> 
      </Routes>
    </Router>
  );
}