import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:8080/admin/login', { username, password });
      
      // Vérification de la réponse
      if (response.data.message === "Login successful") {
        localStorage.setItem('isAuthenticated', 'true');
        navigate('/admin');
      } else {
        setError('Nom d\'utilisateur ou mot de passe incorrect.');
      }
    } catch (error) {
      console.error('Erreur lors de la tentative de connexion :', error);
      setError("Identifiant ou Mot de passe incorrect.");
    }
  };
  

  return (
    <div>
    <header className="header">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutme">About Me</Link></li>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/projets">Projects</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        </header>
        <div className="login-container">
          <h2>Connexion</h2>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label>Nom d'utilisateur</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Mot de passe</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit">Se connecter</button>
          </form>
        </div>
    </div>
  );
};

export default Login;
