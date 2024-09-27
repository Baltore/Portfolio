import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Contact.css'; 

const Contact = () => {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState(null); // État pour stocker les messages d'erreur

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        // Utiliser l'URL complète
        const response = await axios.get('http://localhost:8080/admin/contacts');
        setContacts(response.data);
      } catch (error) {
        console.error("Error fetching contact data:", error);
        setError("Impossible de récupérer les données des contacts."); // Message d'erreur
      }
    };

    fetchContacts();
  }, []);

  return (
    <div>
      <header className="header">
        <nav>
          <ul>
            <li><Link to="http://localhost:3000">Home</Link></li>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/projets">Projet</Link></li>
            <li><Link to="/experience">Expérience</Link></li>
            <li><Link to="/skill">Skills</Link></li>
            <li><Link to="/admin">Admin</Link></li>
          </ul>
        </nav>
      </header>
      <body>
      <h1>Liste des Contacts</h1>
      <section className="contact-container">
        {contacts.map(contact => (
        <form key={contact.ID} className="contact-item">
            <label for="numero">{contact.ID}</label>
            <label for="nom">Nom : {contact.Nom}</label>
            <label for="prenom">Prenom : {contact.Prenom}</label>
            <label for="email">Email : {contact.Email}</label>
            <label for="phone">Téléphone : {contact.Telephone}</label>
        </form>
        ))}
      </section>
      </body>

      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Contact;
