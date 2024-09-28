import React, { useEffect, useState } from 'react';
import { getEducations, getProjets, getExperiences, getSkills, getContacts, updateEducation, updateProjet, updateExperience, updateSkill, updateContact } from '../services/api'; // Import des services
import { Link } from 'react-router-dom';

const AdminPage = () => {
  const [educationData, setEducationData] = useState([]);
  const [projetsData, setProjetsData] = useState([]);
  const [experienceData, setExperienceData] = useState([]);
  const [skillsData, setSkillsData] = useState([]);
  const [contactsData, setContactsData] = useState([]);
  const [editData, setEditData] = useState(null); // Pour gérer l'édition

  useEffect(() => {
    // Charger les données dès le chargement de la page
    const fetchData = async () => {
      try {
        const educationResponse = await getEducations();
        const projetsResponse = await getProjets();
        const experienceResponse = await getExperiences();
        const skillsResponse = await getSkills();
        const contactsResponse = await getContacts();

        setEducationData(educationResponse.data);
        setProjetsData(projetsResponse.data);
        setExperienceData(experienceResponse.data);
        setSkillsData(skillsResponse.data);
        setContactsData(contactsResponse.data);
      } catch (error) {
        console.error('Erreur lors du chargement des données :', error);
      }
    };

    fetchData();
  }, []);

  // Fonction pour gérer l'enregistrement des modifications
  const handleSave = async (entityType, updatedData) => {
    try {
      switch (entityType) {
        case 'education':
          await updateEducation(updatedData.id, updatedData);
          setEducationData(prevData => prevData.map(item => (item.id === updatedData.id ? updatedData : item)));
          break;
        case 'projet':
          await updateProjet(updatedData.id, updatedData);
          setProjetsData(prevData => prevData.map(item => (item.id === updatedData.id ? updatedData : item)));
          break;
        case 'experience':
          await updateExperience(updatedData.id, updatedData);
          setExperienceData(prevData => prevData.map(item => (item.id === updatedData.id ? updatedData : item)));
          break;
        case 'skill':
          await updateSkill(updatedData.id, updatedData);
          setSkillsData(prevData => prevData.map(item => (item.id === updatedData.id ? updatedData : item)));
          break;
        case 'contact':
          await updateContact(updatedData.id, updatedData);
          setContactsData(prevData => prevData.map(item => (item.id === updatedData.id ? updatedData : item)));
          break;
        default:
          console.error('Type d’entité inconnu');
      }
      setEditData(null); // Fermer l'édition après la sauvegarde
    } catch (error) {
      console.error('Erreur lors de la sauvegarde des données :', error);
    }
  };

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
            <li><Link to="/skill">Skills</Link></li>
          </ul>
        </nav>
      </header>
      <body>
      <h1>Page d'Administration</h1>

      <section>
        <h2>Éducation</h2>
        {educationData.map((edu) => (
          <div key={edu.id}>
            {editData?.id === edu.id ? (
              <input
                type="text"
                value={editData.school_name}
                onChange={(e) => setEditData({ ...editData, school_name: e.target.value })}
              />
            ) : (
              <p>{edu.school_name}</p>
            )}
            <button onClick={() => setEditData(edu)}>Modifier</button>
            {editData?.id === edu.id && <button onClick={() => handleSave('education', editData)}>Enregistrer</button>}
          </div>
        ))}
      </section>

      <section>
        <h2>Projets</h2>
        {projetsData.map((projet) => (
          <div key={projet.id}>
            {editData?.id === projet.id ? (
              <input
                type="text"
                value={editData.name}
                onChange={(e) => setEditData({ ...editData, name: e.target.value })}
              />
            ) : (
              <p>{projet.name}</p>
            )}
            <button onClick={() => setEditData(projet)}>Modifier</button>
            {editData?.id === projet.id && <button onClick={() => handleSave('projet', editData)}>Enregistrer</button>}
          </div>
        ))}
      </section>

      <section>
        <h2>Expérience</h2>
        {experienceData.map((exp) => (
          <div key={exp.id}>
            {editData?.id === exp.id ? (
              <input
                type="text"
                value={editData.work_name}
                onChange={(e) => setEditData({ ...editData, work_name: e.target.value })}
              />
            ) : (
              <p>{exp.work_name}</p>
            )}
            <button onClick={() => setEditData(exp)}>Modifier</button>
            {editData?.id === exp.id && <button onClick={() => handleSave('experience', editData)}>Enregistrer</button>}
          </div>
        ))}
      </section>

      <section>
        <h2>Compétences</h2>
        {skillsData.map((skill) => (
          <div key={skill.id}>
            {editData?.id === skill.id ? (
              <input
                type="text"
                value={editData.skill_name}
                onChange={(e) => setEditData({ ...editData, skill_name: e.target.value })}
              />
            ) : (
              <p>{skill.skill_name}</p>
            )}
            <button onClick={() => setEditData(skill)}>Modifier</button>
            {editData?.id === skill.id && <button onClick={() => handleSave('skill', editData)}>Enregistrer</button>}
          </div>
        ))}
      </section>

      <section>
        <h2>Contacts</h2>
        {contactsData.map((contact) => (
          <div key={contact.id}>
            {editData?.id === contact.id ? (
              <input
                type="text"
                value={editData.nom}
                onChange={(e) => setEditData({ ...editData, nom: e.target.value })}
              />
            ) : (
              <p>{contact.nom}</p>
            )}
            <button onClick={() => setEditData(contact)}>Modifier</button>
            {editData?.id === contact.id && <button onClick={() => handleSave('contact', editData)}>Enregistrer</button>}
          </div>
        ))}
      </section>
      </body>
    </div>
  );
};

export default AdminPage;
