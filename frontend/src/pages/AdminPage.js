import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // Utilisation de useNavigate
import './AdminPage.css';

const AdminPage = () => {
  const [selectedPage, setSelectedPage] = useState('');

  // Les données des différentes sections
  const [educationData, setEducationData] = useState([]);
  const [projetsData, setProjetsData] = useState([]);
  const [experienceData, setExperienceData] = useState([]);
  const [skillsData, setSkillsData] = useState([]);
  const [contactsData, setContactsData] = useState([]);
  const [aboutmeData, setAboutMeData] = useState([]);

  // Les données en cours de modification
  const [editData, setEditData] = useState(null);
  const [newData, setNewData] = useState({});

  const navigate = useNavigate(); // Utilisation de useNavigate pour la navigation

  // Fonction de chargement des données
  const fetchData = async () => {
    try {
      const aboutmeResponse = await axios.get('http://localhost:8080/admin/aboutme');
      const educationResponse = await axios.get('http://localhost:8080/admin/educations');
      const projetsResponse = await axios.get('http://localhost:8080/admin/projets');
      const experienceResponse = await axios.get('http://localhost:8080/admin/experiences');
      const skillsResponse = await axios.get('http://localhost:8080/admin/skills');
      const contactsResponse = await axios.get('http://localhost:8080/admin/contacts');

      setAboutMeData(aboutmeResponse.data);
      setEducationData(educationResponse.data);
      setProjetsData(projetsResponse.data);
      setExperienceData(experienceResponse.data);
      setSkillsData(skillsResponse.data);
      setContactsData(contactsResponse.data);
    } catch (error) {
      console.error('Erreur lors du chargement des données :', error);
    }
  };

  // Appel de fetchData lorsque le composant se monte
  useEffect(() => {
    fetchData();
  }, []);

  // Gérer l'édition des données
  const handleEdit = (item) => {
    setEditData(item);  // Permet de modifier la ligne sélectionnée
  };

  const handleConfirmEdit = async (id) => {
    try {
      const url = `http://localhost:8080/admin/${selectedPage}/${id}`; // URL dynamique selon la page sélectionnée
      await axios.put(url, editData);  // Envoie les données modifiées
      alert('Modifications enregistrées avec succès !');
      setEditData(null);  // Réinitialise l'édition
      fetchData();  // Recharger les données après la modification
    } catch (error) {
      console.error('Erreur lors de la mise à jour :', error);
      alert('Une erreur est survenue lors de la mise à jour.');
    }
  };

  // Fonction pour supprimer un objet
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/admin/${selectedPage}/${id}`);
      alert("Suppression réussie !");
      fetchData(); // Recharger les données après suppression
    } catch (error) {
      console.error('Erreur lors de la suppression des données :', error);
      alert("Erreur lors de la suppression des données.");
    }
  };

  // Gérer l'ajout d'une nouvelle entrée
  const handleAddNew = async () => {
    try {
      await axios.post(`http://localhost:8080/admin/${selectedPage}`, newData);
      alert("Ajout réussi !");
      setNewData({}); // Réinitialiser le formulaire
      fetchData(); // Recharger les données
    } catch (error) {
      console.error('Erreur lors de l\'ajout de nouvelles données :', error);
      alert("Erreur lors de l'ajout.");
    }
  };

  const handleInputChange = (field, value) => {
    setEditData({ ...editData, [field]: value });
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login'); // Redirige vers la page de connexion
};

  const fieldLabels = {
    Prenom: 'Prénom',
    Nom: 'Nom',
    Description: 'Description',
    Email: 'Email',
    Telephone: 'Téléphone',
    Diplome: 'Diplôme',
    SchoolName: 'École',
    StartDate: 'Date de début',
    EndDate: 'Date de fin',
    Name: 'Nom du Projet',
    Technologie: 'Technologie',
    Lien: 'Lien',
    WorkName: 'Nom du Travail',
    SkillName: 'Compétence',
    LvlCompetence: 'Niveau de Compétence'
  };
  
  // Rendre une section
  const renderTableSection = (title, data, fields) => (
    <section className="admin">
      <h2>{title}</h2>
      <div className="table-container">
        <div className="column-header">
          <h3>Information</h3>
          <div className="separator" />
          <h3>Modification</h3>
        </div>
        {data.map((item) => (
          <div key={item.ID} className="table-row">
            <div className="info-column">
              {fields.map(field => (
                <p key={field}>
                  <strong>{fieldLabels[field]} :</strong> {item[field]}
                </p>
              ))}
            </div>
            <div className="separator" />
            <div className="modify-column">
              {editData?.ID === item.ID ? (
                <>
                  {fields.map(field => (
                    <input
                      key={field}
                      type="text"
                      value={editData[field] || ""}
                      onChange={(e) => handleInputChange(field, e.target.value)}
                    />
                  ))}
                  <button
                    className="confirm-button"
                    onClick={() => handleConfirmEdit(item.ID)}
                  >
                    Confirmer
                  </button>
                </>
              ) : (
                <button className="modify-button" onClick={() => handleEdit(item)}>Modifier</button>
              )}
              <button className="delete-button" onClick={() => handleDelete(item.ID)}>Supprimer</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  // Formulaire pour ajouter de nouvelles données
  const renderAddNewForm = (fields) => (
    <div className="add-new-form">
      <h3>Ajouter un nouvel élément</h3>
      {fields.map(field => (
        <input
          key={field}
          type="text"
          placeholder={`New ${fieldLabels[field]}`}
          value={newData[field] || ""}
          onChange={(e) => setNewData({ ...newData, [field]: e.target.value })}
        />
      ))}
      <button className="add-button" onClick={handleAddNew}>Ajouter</button>
    </div>
  );

  // Afficher les sections selon la sélection
  const renderSelectedSection = () => {
    switch (selectedPage) {
      case 'aboutme':
        return (
          <>
            {renderTableSection('À Propos de Moi', aboutmeData, ['Prenom', 'Nom', 'Description', 'Email', 'Telephone'])}
            {renderAddNewForm(['Prenom', 'Nom', 'Description', 'Email', 'Telephone'])}
          </>
        );
      case 'educations':
        return (
          <>
            {renderTableSection('Éducation', educationData, ['Diplome', "SchoolName", "StartDate", "EndDate"])}
            {renderAddNewForm(['Diplome', "SchoolName", "StartDate", "EndDate"])}
          </>
        );
      case 'projets':
        return (
          <>
            {renderTableSection('Projets', projetsData, ['Name', "Description", "Technologie", "StartDate", "EndDate", "Lien"])}
            {renderAddNewForm(['Name', "Description", "Technologie", "StartDate", "EndDate", "Lien"])}
          </>
        );
      case 'experiences':
        return (
          <>
            {renderTableSection('Expérience', experienceData, ['WorkName', "Description", "StartDate", "EndDate"])}
            {renderAddNewForm(['WorkName', "Description", "StartDate", "EndDate"])}
          </>
        );
      case 'skills':
        return (
          <>
            {renderTableSection('Compétences', skillsData, ['SkillName', "LvlCompetence"])}
            {renderAddNewForm(['SkillName', "LvlCompetence"])}
          </>
        );
      case 'contacts':
        return (
          <>
            {renderTableSection('Contacts', contactsData, ['Nom', "Prenom", "Email", "Telephone"])}
            {renderAddNewForm(['Nom', "Prenom", "Email", "Telephone"])}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <header className="header">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutme">About Me</Link></li>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/projets">Projects</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        </header>
      <div>
        <h1>Administration</h1>
        <div className="page-selection">
          <label>Quelle page voulez-vous modifier ?</label>
          <select value={selectedPage} onChange={(e) => setSelectedPage(e.target.value)}>
            <option value="">Sélectionnez une page</option>
            <option value="aboutme">À propos de moi</option>
            <option value="educations">Éducation</option>
            <option value="projets">Projets</option>
            <option value="experiences">Expériences</option>
            <option value="skills">Compétences</option>
            <option value="contacts">Contacts</option>
          </select>
        </div>
      <main>
        {renderSelectedSection()}
        <button onClick={handleLogout} className="buttonDeco">Se déconnecter</button>
      </main>
    </div>
    </div>
  );
};

export default AdminPage;
