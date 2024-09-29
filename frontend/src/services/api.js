import axios from 'axios';

// Configuration globale pour Axios (baseURL peut être ajustée si besoin)
const api = axios.create({
  baseURL: 'http://localhost:8080',  // L'URL de ton backend (assure-toi qu'il fonctionne sur ce port)
});

// Gestion des requêtes pour la section AboutMe
export const getAboutMe = () => api.get('/admin/aboutme');
export const addAboutMe = (data) => api.post('/admin/aboutme', data);
export const updateAboutMe = (id, data) => api.put(`/admin/aboutme/${id}`, data);
export const deleteAboutMe = (id) => api.delete(`/admin/aboutme/${id}`);


// Gestion des requêtes pour la section Éducation
export const getEducations = () => api.get('/admin/educations');
export const addEducations = (data) => api.post('/admin/educations', data);
export const updateEducations = (id, data) => api.put(`/admin/educations/${id}`, data);
export const deleteEducations = (id) => api.delete(`/admin/educations/${id}`);

// Gestion des requêtes pour la section Projet
export const getProjets = () => api.get('/admin/projets');
export const addProjets = (data) => api.post('/admin/projets', data);
export const updateProjets = (id, data) => api.put(`/admin/projets/${id}`, data);
export const deleteProjets = (id) => api.delete(`/admin/projets/${id}`);

// Gestion des requêtes pour la section Expérience
export const getExperiences = () => api.get('/admin/experiences');
export const addExperiences = (data) => api.post('/admin/experiences', data);
export const updateExperiences = (id, data) => api.put(`/admin/experiences/${id}`, data);
export const deleteExperiences = (id) => api.delete(`/admin/experiences/${id}`);

// Gestion des requêtes pour les Compétences
export const getSkills = () => api.get('/admin/skills');
export const addSkills = (data) => api.post('/admin/skills', data);
export const updateSkills = (id, data) => api.put(`/admin/skills/${id}`, data);
export const deleteSkills = (id) => api.delete(`/admin/skills/${id}`);

// Gestion des requêtes pour les Contacts
export const getContacts = () => api.get('/admin/contacts');
export const addContacts = (data) => api.post('/admin/contacts', data);
export const updateContacts = (id, data) => api.put(`/admin/contacts/${id}`, data);
export const deleteContacts = (id) => api.delete(`/admin/contacts/${id}`);
