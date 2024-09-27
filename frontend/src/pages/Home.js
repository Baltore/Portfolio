
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Pour le style personnalisé

const Home = () => {
  return (
    <div className="home">
      <header>
        <nav>
          <ul>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/projects">Projet</Link></li>
            <li><Link to="/experience">Expérience</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/skill">Skills</Link></li>
            <li><Link to="/admin">Admin</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Bienvenue sur mon Portfolio</h1>
          <p>Découvrez mon parcours, mes projets, mes compétences et plus encore.</p>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Mon Portfolio</p>
      </footer>
    </div>
  );
};

export default Home;
