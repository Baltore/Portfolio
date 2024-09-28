import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Skill = () => {
  const [skills, setSkills] = useState([]);
  const [error, setError] = useState(null); // État pour stocker les messages d'erreur

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        // Utiliser l'URL complète
        const response = await axios.get('http://localhost:8080/admin/skills');
        setSkills(response.data);
      } catch (error) {
        console.error("Error fetching skill data:", error);
        setError("Impossible de récupérer les données des compétences."); // Message d'erreur
      }
    };

    fetchSkills();
  }, []);

  return (
    <div>
      <header className="header">
        <nav>
          <ul>
            <li><Link to="http://localhost:3000">Home</Link></li>
            <li><Link to="/aboutme">About Me</Link></li>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/projets">Projet</Link></li>
            <li><Link to="/experience">Expérience</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/admin">Admin</Link></li>
          </ul>
        </nav>
      </header>
      <body>
      <h1>Compétences</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {skills.map(skill => (
          <li key={skill.ID}>
            <h2>{skill.SkillName}</h2>
            <p>Niveau: {skill.LvlCompetence}</p>
          </li>
        ))}
      </ul>
      </body>
    </div>
  );
};

export default Skill;
