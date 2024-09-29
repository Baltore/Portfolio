import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Projet = () => {
  const [projets, setProjets] = useState([]);
  const [error, setError] = useState(null); // État pour stocker les messages d'erreur

  useEffect(() => {
    const fetchProjets = async () => {
      try {
        // Utiliser l'URL complète
        const response = await axios.get('http://localhost:8080/admin/projets');
        setProjets(response.data);
      } catch (error) {
        console.error("Error fetching projet data:", error);
        setError("Impossible de récupérer les données des projets."); // Message d'erreur
      }
    };

    fetchProjets();
  }, []);

  return (
    <div>
      <header className="header">
        <nav>
          <ul>
            <li><Link to="http://localhost:3000">Home</Link></li>
            <li><Link to="/aboutme">About Me</Link></li>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/experience">Expérience</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/admin">Admin</Link></li>
          </ul>
        </nav>
      </header>
      <body>
      <h1>Projets</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
      {projets.map(projet => (
        <li key={projet.ID}>
          <h2>{projet.Name}</h2>
          <p>Description: {projet.Description}</p>
          <p>Tecnologie: {projet.Technologie}</p>
          <p>Date : {projet.StartDate} / {projet.EndDate}</p>
          <p>Lien: <a href={projet.Lien} target="_blank" rel="noopener noreferrer">{projet.Lien}</a></p>
        </li>
      ))}
    </ul>
    </body>
    </div>
  );
};

export default Projet;
