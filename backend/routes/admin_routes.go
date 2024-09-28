package routes

import (
	"project/controllers"

	"github.com/gin-gonic/gin"
)

func AdminRoutes(router *gin.Engine) {
	adminGroup := router.Group("/admin")
	{
		// Routes pour les Aboutme
		adminGroup.GET("/aboutme", controllers.GetAboutMe)
		adminGroup.PUT("/aboutme/:id", controllers.UpdateAboutMe)
		adminGroup.DELETE("/aboutme/:id", controllers.DeleteAboutMe)

		// Routes pour les projets
		adminGroup.GET("/projets", controllers.GetProjets)
		adminGroup.PUT("/projet/:id", controllers.UpdateProjet)
		adminGroup.DELETE("/projet/:id", controllers.DeleteProjet)

		// Routes pour les Contacts
		adminGroup.GET("/contacts", controllers.GetContacts)
		adminGroup.PUT("/contact/:id", controllers.UpdateContact)
		adminGroup.DELETE("/contact/:id", controllers.DeleteContact)

		// Routes pour l'éducation
		adminGroup.GET("/educations", controllers.GetEducations)
		adminGroup.PUT("/education/:id", controllers.UpdateEducation)
		adminGroup.DELETE("/education/:id", controllers.DeleteEducation)

		// Routes pour les expériences
		adminGroup.GET("/experiences", controllers.GetExperiences)
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
