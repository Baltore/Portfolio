package models

// Définition de la structure Skill représentant le modèle de la table "skills"
type Skill struct {
	ID            uint `gorm:"primaryKey"`
	SkillName     string
	LvlCompetence string
}

// Retourne le nom de la table associée à ce modèle
func (Skill) TableName() string {
	return "skills"
}
