import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
    </div>
  );
};

export default Skill;
