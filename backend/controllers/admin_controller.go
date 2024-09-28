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

// CRUD pour les Aboutme
func GetAboutMe(c *gin.Context) {
	var aboutme []models.AboutMe
	if err := config.DB.Find(&aboutme).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, aboutme)
}

func UpdateAboutMe(c *gin.Context) {
	var aboutme models.AboutMe
	if err := config.DB.Where("id = ?", c.Param("id")).First(&aboutme).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "AboutMe not found"})
		return
	}

	if err := c.ShouldBindJSON(&aboutme); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	config.DB.Save(&aboutme)
	c.JSON(http.StatusOK, gin.H{"message": "AboutMe updated successfully"})
}

func DeleteAboutMe(c *gin.Context) {
	var aboutme models.AboutMe
	if err := config.DB.Where("id = ?", c.Param("id")).First(&aboutme).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "AboutMe not found"})
		return
	}

	config.DB.Delete(&aboutme)
	c.JSON(http.StatusOK, gin.H{"message": "AboutMe deleted successfully"})
}

// CRUD pour les Projets
func GetProjets(c *gin.Context) {
	var projets []models.Projet
	if err := config.DB.Find(&projets).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, projets)
}

func UpdateProjet(c *gin.Context) {
	var projet models.Projet
	if err := config.DB.Where("id = ?", c.Param("id")).First(&projet).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Projet not found"})
		return
	}

	if err := c.ShouldBindJSON(&projet); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	config.DB.Save(&projet)
	c.JSON(http.StatusOK, gin.H{"message": "Projet updated successfully"})
}

func DeleteProjet(c *gin.Context) {
	var projet models.Projet
	if err := config.DB.Where("id = ?", c.Param("id")).First(&projet).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Projet not found"})
		return
	}

	config.DB.Delete(&projet)
	c.JSON(http.StatusOK, gin.H{"message": "Projet deleted successfully"})
}

// CRUD pour l'Education
func GetEducations(c *gin.Context) {
	var educations []models.Education
	if err := config.DB.Find(&educations).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, educations)
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
	if err := config.DB.Find(&experiences).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, experiences)
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
	if err := config.DB.Find(&skills).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, skills)
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
