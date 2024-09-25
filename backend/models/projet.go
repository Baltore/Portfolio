package models

type Projet struct {
	ID          uint   `gorm:"primaryKey"`
	Name        string `json:"name" binding:"required"`
	Description string `json:"description"`
	Technologie string `json:"technologie" binding:"required"`
	StartDate   string `json:"start_date"`
	EndDate     string `json:"end_date"`
	Lien        string `json:"lien"`
}
