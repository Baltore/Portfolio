package controllers

import (
	"net/http"
	"project/config"
	"project/models"

	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
)

// Fonction de connexion
func Login(c *gin.Context) {
	var admin models.Admin

	var input struct {
		Username string `json:"username" binding:"required"`
		Password string `json:"password" binding:"required"`
	}

	// Récupération des données du formulaire de connexion
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Username and password required"})
		return
	}

	// Vérification des identifiants dans la base de données
	if err := config.DB.Where("username = ?", input.Username).First(&admin).Error; err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid credentials"})
		return
	}

	// Vérification du mot de passe (assurez-vous que admin.Password est haché)
	if err := bcrypt.CompareHashAndPassword([]byte(admin.Password), []byte(input.Password)); err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid credentials"})
		return
	}

	// Si les identifiants sont corrects, on retourne un succès
	c.JSON(http.StatusOK, gin.H{"message": "Login successful"})
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

func CreateAboutMe(c *gin.Context) {
	var aboutme models.AboutMe
	if err := c.ShouldBindJSON(&aboutme); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	if err := config.DB.Create(&aboutme).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Unable to create AboutMe"})
		return
	}
	c.JSON(http.StatusCreated, aboutme)
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

// CRUD pour l'Education
func GetEducations(c *gin.Context) {
	var educations []models.Education
	if err := config.DB.Find(&educations).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, educations)
}

func CreateEducation(c *gin.Context) {
	var education models.Education
	if err := c.ShouldBindJSON(&education); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	if err := config.DB.Create(&education).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Unable to create Education"})
		return
	}
	c.JSON(http.StatusCreated, education)
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

// CRUD pour les Projets
func GetProjets(c *gin.Context) {
	var projets []models.Projet
	if err := config.DB.Find(&projets).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, projets)
}

func CreateProjet(c *gin.Context) {
	var projet models.Projet
	if err := c.ShouldBindJSON(&projet); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	if err := config.DB.Create(&projet).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Unable to create Projet"})
		return
	}
	c.JSON(http.StatusCreated, projet)
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

// CRUD pour l'Experience
func GetExperiences(c *gin.Context) {
	var experiences []models.Experience
	if err := config.DB.Find(&experiences).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, experiences)
}

func CreateExperience(c *gin.Context) {
	var experience models.Experience
	if err := c.ShouldBindJSON(&experience); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	if err := config.DB.Create(&experience).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Unable to create Experience"})
		return
	}
	c.JSON(http.StatusCreated, experience)
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

func CreateContact(c *gin.Context) {
	var contact models.Contact
	if err := c.ShouldBindJSON(&contact); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	if err := config.DB.Create(&contact).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Unable to create Contact"})
		return
	}
	c.JSON(http.StatusCreated, contact)
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

func CreateSkill(c *gin.Context) {
	var skill models.Skill
	if err := c.ShouldBindJSON(&skill); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	if err := config.DB.Create(&skill).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Unable to create Skill"})
		return
	}
	c.JSON(http.StatusCreated, skill)
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
