package models

type Experience struct {
	ID          uint   `gorm:"primaryKey"`
	WorkName    string `json:"work_name" binding:"required"`
	Description string `json:"description"`
	StartDate   string `json:"start_date" binding:"required"`
	EndDate     string `json:"end_date"`
}
