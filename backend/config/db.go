package config

import (
	"project/models"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var DB *gorm.DB // Variable pour stocker l'instance de la base de données

// Connect établit la connexion à la base de données et effectue les migrations
func Connect() {
	database, err := gorm.Open(sqlite.Open("bdd.db"), &gorm.Config{}) // Ouverture de la base de données SQLite
	if err != nil {
		panic("Failed to connect to the database!")
	}
	DB = database // Affectation de l'instance de la base de données à la variable DB

	// Ajoute l'appel à AutoMigrate ici
	err = DB.AutoMigrate( // Effectue la migration automatique des modèles vers la base de données
		&models.Contact{},
		&models.Education{},
		&models.Experience{},
		&models.Projet{},
		&models.Skill{},
		&models.AboutMe{},
		&models.Admin{},
	)
	if err != nil {
		panic("Failed to migrate database!") // Panic en cas d'échec de migration
	}
}
