package models

type Admin struct {
	ID       uint   `gorm:"primaryKey"`
	Username string `json:"username" binding:"required"`
	Password string `json:"password" binding:"required" gorm:"unique"`
}

func (Admin) TableName() string {
	return "admins"
}
