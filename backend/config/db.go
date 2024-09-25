package config

import (
	"log"
	"project/models"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectDatabase() {
	// Connexion à la base de données SQLite
	database, err := gorm.Open(sqlite.Open("bdd.db"), &gorm.Config{})
	if err != nil {
		log.Fatal("Failed to connect to database:", err)
	}

	// Migration des tables pour synchroniser les modèles avec la base de données
	err = database.AutoMigrate(
		&models.Admin{},
		&models.Contact{},
		&models.Education{},
		&models.Experience{},
		&models.Projet{},
		&models.Skill{},
	)

	if err != nil {
		log.Fatal("Failed to migrate database:", err)
	}

	DB = database
}
