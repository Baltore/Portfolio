package models

type Education struct {
	ID          uint   `gorm:"primaryKey"`
	SchoolName  string `json:"school_name" binding:"required"`
	Diplome     string `json:"diplome" binding:"required"`
	Description string `json:"description"`
	StartDate   string `json:"start_date" binding:"required"`
	EndDate     string `json:"end_date"`
}
