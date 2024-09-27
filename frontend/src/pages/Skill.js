import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Skill = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get('/admin/skills'); // Change l'URL si nécessaire
        setSkills(response.data.skills);
      } catch (error) {
        console.error("Error fetching skill data:", error);
      }
    };

    fetchSkills();
  }, []);

  return (
    <div>
      <h1>Compétences</h1>
      <ul>
        {skills.map(skill => (
          <li key={skill.id}>
            <h2>{skill.name}</h2>
            <p>{skill.level}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skill;
