package routes

import (
	"project/controllers"

	"github.com/gin-gonic/gin"
)

func AdminRoutes(router *gin.Engine) {
	adminGroup := router.Group("/admin")
	{

		// Routes pour les projets
		adminGroup.GET("/projects", controllers.GetProjects)
		adminGroup.POST("/projects", controllers.CreateProject)
		adminGroup.PUT("/projects/:id", controllers.UpdateProject)
		adminGroup.DELETE("/projects/:id", controllers.DeleteProject)

		// Routes pour les Contacts
		adminGroup.GET("/contacts", controllers.GetContacts)
		adminGroup.POST("/contacts", controllers.CreateContact)
		adminGroup.PUT("/contacts/:id", controllers.UpdateContact)
		adminGroup.DELETE("/contacts/:id", controllers.DeleteContact)

		// Routes pour l'éducation
		adminGroup.GET("/educations", controllers.GetEducations)
		adminGroup.POST("/educations", controllers.CreateEducation)
		adminGroup.PUT("/educations/:id", controllers.UpdateEducation)
		adminGroup.DELETE("/educations/:id", controllers.DeleteEducation)

		// Routes pour les expériences
		adminGroup.GET("/experiences", controllers.GetExperiences)
		adminGroup.POST("/experiences", controllers.CreateExperience)
		adminGroup.PUT("/experiences/:id", controllers.UpdateExperience)
		adminGroup.DELETE("/experiences/:id", controllers.DeleteExperience)

		// Routes pour les skills
		adminGroup.GET("/skills", controllers.GetSkills)
		adminGroup.POST("/skills", controllers.CreateSkill)
		adminGroup.PUT("/skills/:id", controllers.UpdateSkill)
		adminGroup.DELETE("/skills/:id", controllers.DeleteSkill)

		// Route pour obtenir les informations d'une personne
		adminGroup.GET("/person", controllers.GetPerson)
	}
}
