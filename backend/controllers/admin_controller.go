package controllers

import (
	"net/http"
	"project/config"
	"project/models"

	"github.com/gin-gonic/gin"
)

// GetPerson retourne les informations d'une personne
func GetPerson(c *gin.Context) {
	var person models.Person // Assure-toi d'avoir un modèle pour la personne
	if err := config.DB.First(&person).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Person not found"})
		return
	}
	c.JSON(http.StatusOK, person)
}

// CRUD pour les Projets
func GetProjects(c *gin.Context) {
	var projets []models.Projet
	config.DB.Find(&projets)
	c.JSON(http.StatusOK, gin.H{"projects": projets})
}

func CreateProject(c *gin.Context) {
	var projet models.Projet
	if err := c.ShouldBindJSON(&projet); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	config.DB.Create(&projet)
	c.JSON(http.StatusOK, gin.H{"message": "Project created successfully", "project": projet})
}

func UpdateProject(c *gin.Context) {
	var projet models.Projet
	if err := config.DB.Where("id = ?", c.Param("id")).First(&projet).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Project not found"})
		return
	}

	if err := c.ShouldBindJSON(&projet); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	config.DB.Save(&projet)
	c.JSON(http.StatusOK, gin.H{"message": "Project updated successfully"})
}

func DeleteProject(c *gin.Context) {
	var projet models.Projet
	if err := config.DB.Where("id = ?", c.Param("id")).First(&projet).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Project not found"})
		return
	}

	config.DB.Delete(&projet)
	c.JSON(http.StatusOK, gin.H{"message": "Project deleted successfully"})
}

// CRUD pour l'Education
func GetEducations(c *gin.Context) {
	var educations []models.Education
	config.DB.Find(&educations)
	c.JSON(http.StatusOK, gin.H{"educations": educations})
}

func CreateEducation(c *gin.Context) {
	var education models.Education
	if err := c.ShouldBindJSON(&education); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	config.DB.Create(&education)
	c.JSON(http.StatusOK, gin.H{"message": "Education created successfully", "education": education})
}

func UpdateEducation(c *gin.Context) {
	var education models.Education
	if err := config.DB.Where("id = ?", c.Param("id")).First(&education).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Education not found"})
		return
	}

	if err := c.ShouldBindJSON(&education); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	config.DB.Save(&education)
	c.JSON(http.StatusOK, gin.H{"message": "Education updated successfully"})
}

func DeleteEducation(c *gin.Context) {
	var education models.Education
	if err := config.DB.Where("id = ?", c.Param("id")).First(&education).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Education not found"})
		return
	}

	config.DB.Delete(&education)
	c.JSON(http.StatusOK, gin.H{"message": "Education deleted successfully"})
}

// CRUD pour l'Experience
func GetExperiences(c *gin.Context) {
	var experiences []models.Experience
	config.DB.Find(&experiences)
	c.JSON(http.StatusOK, gin.H{"experiences": experiences})
}

func CreateExperience(c *gin.Context) {
	var experience models.Experience
	if err := c.ShouldBindJSON(&experience); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	config.DB.Create(&experience)
	c.JSON(http.StatusOK, gin.H{"message": "Experience created successfully", "experience": experience})
}

func UpdateExperience(c *gin.Context) {
	var experience models.Experience
	if err := config.DB.Where("id = ?", c.Param("id")).First(&experience).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Experience not found"})
		return
	}

	if err := c.ShouldBindJSON(&experience); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	config.DB.Save(&experience)
	c.JSON(http.StatusOK, gin.H{"message": "Experience updated successfully"})
}

func DeleteExperience(c *gin.Context) {
	var experience models.Experience
	if err := config.DB.Where("id = ?", c.Param("id")).First(&experience).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Experience not found"})
		return
	}

	config.DB.Delete(&experience)
	c.JSON(http.StatusOK, gin.H{"message": "Experience deleted successfully"})
}

// CRUD pour les Skills
func GetSkills(c *gin.Context) {
	var skills []models.Skill
	config.DB.Find(&skills)
	c.JSON(http.StatusOK, gin.H{"skills": skills})
}

func CreateSkill(c *gin.Context) {
	var skill models.Skill
	if err := c.ShouldBindJSON(&skill); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	config.DB.Create(&skill)
	c.JSON(http.StatusOK, gin.H{"message": "Skill created successfully", "skill": skill})
}

func UpdateSkill(c *gin.Context) {
	var skill models.Skill
	if err := config.DB.Where("id = ?", c.Param("id")).First(&skill).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Skill not found"})
		return
	}

	if err := c.ShouldBindJSON(&skill); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	config.DB.Save(&skill)
	c.JSON(http.StatusOK, gin.H{"message": "Skill updated successfully"})
}

func DeleteSkill(c *gin.Context) {
	var skill models.Skill
	if err := config.DB.Where("id = ?", c.Param("id")).First(&skill).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Skill not found"})
		return
	}

	config.DB.Delete(&skill)
	c.JSON(http.StatusOK, gin.H{"message": "Skill deleted successfully"})
}

// GetContacts retourne la liste des contacts
func GetContacts(c *gin.Context) {
	var contacts []models.Contact
	if err := config.DB.Find(&contacts).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, contacts)
}

// CreateContact ajoute un nouveau contact
func CreateContact(c *gin.Context) {
	var contact models.Contact
	if err := c.ShouldBindJSON(&contact); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	// Ajout du contact à la base de données
	if err := config.DB.Create(&contact).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Unable to create contact"})
		return
	}
	c.JSON(http.StatusCreated, contact)
}

// UpdateContact modifie un contact existant
func UpdateContact(c *gin.Context) {
	id := c.Param("id")
	var contact models.Contact

	// Vérifie si le contact existe
	if err := config.DB.Where("id = ?", id).First(&contact).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Contact not found"})
		return
	}

	if err := c.ShouldBindJSON(&contact); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Met à jour le contact dans la base de données
	if err := config.DB.Save(&contact).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Unable to update contact"})
		return
	}

	c.JSON(http.StatusOK, contact)
}

// DeleteContact supprime un contact
func DeleteContact(c *gin.Context) {
	id := c.Param("id")
	var contact models.Contact

	// Vérifie si le contact existe
	if err := config.DB.Where("id = ?", id).First(&contact).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Contact not found"})
		return
	}

	// Supprime le contact de la base de données
	if err := config.DB.Delete(&contact).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Unable to delete contact"})
		return
	}

	c.JSON(http.StatusNoContent, nil)
}
