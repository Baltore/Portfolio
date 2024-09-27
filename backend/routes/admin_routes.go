package routes

import (
	"project/controllers"

	"github.com/gin-gonic/gin"
)

func AdminRoutes(router *gin.Engine) {
	adminGroup := router.Group("/admin")
	{

		// Routes pour les projets
		adminGroup.GET("/project", controllers.GetProjects)
		adminGroup.PUT("/project/:id", controllers.UpdateProject)
		adminGroup.DELETE("/project/:id", controllers.DeleteProject)

		// Routes pour les Contacts
		adminGroup.GET("/contacts", controllers.GetContacts)
		adminGroup.PUT("/contact/:id", controllers.UpdateContact)
		adminGroup.DELETE("/contact/:id", controllers.DeleteContact)

		// Routes pour l'éducation
		adminGroup.GET("/education", controllers.GetEducations)
		adminGroup.PUT("/education/:id", controllers.UpdateEducation)
		adminGroup.DELETE("/education/:id", controllers.DeleteEducation)

		// Routes pour les expériences
		adminGroup.GET("/experience", controllers.GetExperiences)
		adminGroup.PUT("/experience/:id", controllers.UpdateExperience)
		adminGroup.DELETE("/experience/:id", controllers.DeleteExperience)

		// Routes pour les skills
		adminGroup.GET("/skills", controllers.GetSkills)
		adminGroup.PUT("/skills/:id", controllers.UpdateSkill)
		adminGroup.DELETE("/skills/:id", controllers.DeleteSkill)

		// Route pour obtenir les informations d'une personne
		adminGroup.GET("/person", controllers.GetPerson)
	}
}
