package main

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"
	"text/template"

	"golang.org/x/crypto/bcrypt"
	_ "github.com/mattn/go-sqlite3"
)

var db *sql.DB
var tmpl = template.Must(template.ParseGlob("templates/*"))

// Fonction pour initialiser la base de données
func initDB() {
	var err error
	db, err = sql.Open("sqlite3", "./auth.db")
	if err != nil {
		log.Fatal(err)
	}

	// Crée la table des utilisateurs si elle n'existe pas
	createTableSQL := `CREATE TABLE IF NOT EXISTS users (
		"idUser" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
		"username" TEXT NOT NULL UNIQUE,
		"password" TEXT NOT NULL
	);`

	_, err = db.Exec(createTableSQL)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Base de données initialisée!")
}

func main() {
	// Initialisation de la base de données
	initDB()
	defer db.Close()

	// Définition des routes
	http.HandleFunc("/login", loginPage)
	http.HandleFunc("/register", registerPage)
	http.HandleFunc("/registerUser", registerUser)
	http.HandleFunc("/loginUser", loginUser)

	fmt.Println("Serveur démarré sur :8080")
	http.ListenAndServe(":8080", nil)
}

// Handler pour afficher la page de connexion
func loginPage(w http.ResponseWriter, r *http.Request) {
	tmpl.ExecuteTemplate(w, "login.html", nil)
}

// Handler pour afficher la page d'inscription
func registerPage(w http.ResponseWriter, r *http.Request) {
	tmpl.ExecuteTemplate(w, "register.html", nil)
}

// Handler pour gérer l'inscription d'un nouvel utilisateur
func registerUser(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		http.Redirect(w, r, "/register", http.StatusSeeOther)
		return
	}

	username := r.FormValue("username")
	password := r.FormValue("password")

	// Hashage du mot de passe avant de le stocker
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		http.Error(w, "Erreur lors du hashage du mot de passe", http.StatusInternalServerError)
		return
	}

	// Insérer l'utilisateur dans la base de données
	insertUserSQL := `INSERT INTO users (username, password) VALUES (?, ?)`
	_, err = db.Exec(insertUserSQL, username, string(hashedPassword))

	if err != nil {
		http.Error(w, "Utilisateur déjà existant ou erreur interne", http.StatusInternalServerError)
		return
	}

	// Redirection vers la page de login après l'inscription
	http.Redirect(w, r, "/login", http.StatusSeeOther)
}

// Handler pour gérer la connexion de l'utilisateur
func loginUser(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		http.Redirect(w, r, "/login", http.StatusSeeOther)
		return
	}

	username := r.FormValue("username")
	password := r.FormValue("password")

	// Récupérer le mot de passe haché de l'utilisateur depuis la base de données
	var storedHashedPassword string
	err := db.QueryRow("SELECT password FROM users WHERE username = ?", username).Scan(&storedHashedPassword)

	if err != nil {
		http.Error(w, "Nom d'utilisateur ou mot de passe invalide", http.StatusUnauthorized)
		return
	}

	// Comparer le mot de passe entré avec le mot de passe haché stocké
	err = bcrypt.CompareHashAndPassword([]byte(storedHashedPassword), []byte(password))
	if err != nil {
		http.Error(w, "Nom d'utilisateur ou mot de passe invalide", http.StatusUnauthorized)
		return
	}

	// Si les informations sont correctes, afficher un message de bienvenue
	fmt.Fprintf(w, "Bienvenue %s!", username)
}
