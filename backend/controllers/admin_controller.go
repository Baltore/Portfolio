package controllers

import (
	"net/http"
	"project/config"
	"project/models"

	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
)

// Fonction pour l'authentification de l'admin
func Login(c *gin.Context) {
	var input struct {
		Username string `json:"username" binding:"required"`
		Password string `json:"password" binding:"required"`
	}

	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	var admin models.Admin
	if err := config.DB.Where("username = ?", input.Username).First(&admin).Error; err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid username or password"})
		return
	}

	if err := bcrypt.CompareHashAndPassword([]byte(admin.Password), []byte(input.Password)); err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid username or password"})
		return
	}

	// Si l'authentification est réussie
	c.JSON(http.StatusOK, gin.H{"message": "Login successful"})
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
