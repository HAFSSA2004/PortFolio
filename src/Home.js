import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Home.css';
//import Test from './Test/Test';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [showLinks, setShowLinks] = useState(false);

  useEffect(() => {
    setShowLinks(false);
  }, [location.pathname]);

  return (
    <div className={isHomePage ? 'background' : ''}>
      {isHomePage && <img className="background-image" src="bg5.jpg" alt="Background" />}

      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-light">Portfolio</Link>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded={showLinks ? 'true' : 'false'}
            aria-label="Toggle navigation"
            onClick={() => setShowLinks(!showLinks)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

         <div className={`collapse navbar-collapse ${showLinks ? 'show' : ''}`} id="navbarNav">
  <ul className="navbar-nav">
    <li className="nav-item">
      <Link to="/" className="nav-link text-light"></Link>
    </li>
   
  </ul>
</div>


          <div className="theme-switch">
       
          </div>
        </div>
      </nav>

      {isHomePage && (
  <div className="info-container">
    <h2 className="hello-text info-text mt-1">Bienvenue sur mon portfolio</h2>
    <h2 className="developer-text info-text">Hafssa El Bouhli – Développeuse Full Stack</h2>
    <p className="specialization-text info-text">
      Je crée des applications web modernes et dynamiques, mettant en valeur mes compétences en React.js, Node.js, Laravel, MySQL, Tailwind CSS et WordPress. Découvrez mes projets et mon savoir-faire technique à travers ce portfolio.
    </p>
  </div>
)}


      {/* Cards Section */}
      {isHomePage && (
        <>
        <div className="cards-container">
            <div className="cards">
            <a href="https://pfe-teal.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img src="recru.png" alt="Plateforme de recrutement" className="card-img" />
            </a>
            <h3>Plateforme de recrutement</h3>
            <p>Gestion des offres, candidatures et profils utilisateurs pour les recruteurs et candidats.</p>
          </div>

          <div className="cards">
            <a href="https://annonce-ecru.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img src="an.png" alt="Plateforme d'annonces" className="card-img" />
            </a>
            <h3>Plateforme d'annonces</h3>
            <p>Publication, gestion et exploration d’annonces via une interface moderne.</p>
          </div>
           <div className="cards">
  <a href="http://127.0.0.1:8000/" target="_blank" rel="noopener noreferrer">
    <img src="j.png" alt="Jewelry Store" className="card-img" />
  </a>
  <h3>Jewelry Store</h3>
  <p>Site e-commerce développé avec Laravel, incluant gestion du catalogue, panier et navigation sécurisée.</p>
</div>
        <div className="cards">
            <Link to="/TodoApp">
              <img src="tod.png" alt="ToDo List" className="card-img" />
            </Link>
            <h3>ToDo List</h3>
            <p>Application web pour gérer efficacement vos tâches quotidiennes.</p>
          </div>

 </div>
<div className='cards-container'>
   

          <div className="cards">
  <a href="https://game-fe5161.gitlab.io" target="_blank" rel="noopener noreferrer">
    <img src="ro.png" alt="Rock Paper Scissors Game" className="card-img" />
  </a>
  <h3>Rock Paper Scissors Game</h3>
  <p>Interactive web game to play Rock-Paper-Scissors against the computer.</p>
</div>
</div>
        
       
        </>
      )}
    </div>
  );
}

export default Navbar;
