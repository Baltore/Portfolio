package config

import (
	"project/models"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {
	database, err := gorm.Open(sqlite.Open("bdd.db"), &gorm.Config{})
	if err != nil {
		panic("Failed to connect to the database!")
	}
	DB = database

	// Ajoute l'appel à AutoMigrate ici
	err = DB.AutoMigrate(
		&models.Contact{},
		&models.Education{},
		&models.Experience{},
		&models.Projet{},
		&models.Skill{},
		&models.AboutMe{},
	)
	if err != nil {
		panic("Failed to migrate database!")
	}
}
