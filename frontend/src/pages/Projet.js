import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
      <h1>Projets</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
      {projets.map(projet => (
        <li key={projet.ID}>
          <h2>{projet.Name}</h2>
          <p>Description: {projet.Description}</p>
          <p>Tecnologie: {projet.Technologie}</p>
          <p>Démarrage: {projet.StartDate}</p>
          <p>Fin: {projet.EndDate}</p>
          <p>Lien: <a href={projet.Lien} target="_blank" rel="noopener noreferrer">{projet.Lien}</a></p>
        </li>
      ))}
    </ul>
    </div>
  );
};

export default Projet;
