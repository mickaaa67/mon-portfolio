import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./Portfolio";
import ProjectONF from "./pages/ProjectONF";
import ProjectJung from "./pages/ProjectJung";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/projects/onf" element={<ProjectONF />} />
        <Route path="/projects/jung" element={<ProjectJung />} />
      </Routes>
    </Router>
  );
}
