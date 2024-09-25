package main

import (
	"project/config"
	"project/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	// Connexion à la base de données
	config.ConnectDatabase()

	// Définir les routes d'administration
	routes.AdminRoutes(router)

	// Lancer le serveur sur le port 8080
	router.Run(":8080")
}
