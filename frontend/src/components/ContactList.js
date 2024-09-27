/*
import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { Button, List, ListItem, ListItemText } from '@mui/material';
import ContactForm from './ContactForm';

const ContactList = () => {
    const [contacts, setContacts] = useState([]);
    const [selectedContact, setSelectedContact] = useState(null);
    const [isFormVisible, setFormVisible] = useState(false);

    const fetchContacts = async () => {
        const response = await api.getContacts();
        setContacts(response.data.contacts);
    };

    useEffect(() => {
        fetchContacts();
    }, []);

    const handleEdit = (contact) => {
        setSelectedContact(contact);
        setFormVisible(true);
    };

    const handleDelete = async (id) => {
        await api.deleteContact(id);
        fetchContacts();
    };

    const handleFormSuccess = () => {
        fetchContacts();
        setSelectedContact(null);
        setFormVisible(false);
    };

    return (
        <div>
            <h2>Contacts</h2>
            {isFormVisible ? (
                <ContactForm contact={selectedContact} onSuccess={handleFormSuccess} />
            ) : (
                <Button onClick={() => setFormVisible(true)} variant="contained">Ajouter un Contact</Button>
            )}
            <List>
                {contacts.map(contact => (
                    <ListItem key={contact.id}>
                        <ListItemText primary={`${contact.nom} ${contact.prenom}`} />
                        <Button onClick={() => handleEdit(contact)}>Modifier</Button>
                        <Button onClick={() => handleDelete(contact.id)}>Supprimer</Button>
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default ContactList;

*/