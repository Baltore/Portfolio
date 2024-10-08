import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importation des composants nécessaires pour le routage
import Home from './pages/Home';
import Education from './pages/Education';
import Projet from './pages/Projet';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import AdminPage from './pages/AdminPage';
import Skill from './pages/Skill';
import AboutMe from './pages/AboutMe';
import Login from "./pages/Login";

const App = () => { // Déclaration du composant fonctionnel App
  return (
    <Router> {/* Utilisation du Router pour gérer la navigation */}
      <Routes> {/* Définition des routes de l'application */}
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projets" element={<Projet />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skill />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;