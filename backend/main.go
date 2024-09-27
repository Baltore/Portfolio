package main

import (
	"net/http"
	"project/config"
	"project/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	// Endpoint de test
	router.GET("/test", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"message": "Server is running!"})
	})

	// Connexion à la base de données
	config.Connect()

	// Définir les routes d'administration
	routes.AdminRoutes(router)

	// Lancer le serveur sur le port 8080
	router.Run(":8080")
}
