import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Home.css';
import Test from './Test/Test';
import { useLanguage } from './LanguageContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [showLinks, setShowLinks] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    setShowLinks(false);
  }, [location.pathname]);

  const getLanguageText = () => {
    switch (language) {
      case 'fr':
        return {
          hello: 'Hello FS203',
          developer: 'Je suis un développeur Full Stack',
          specialization: 'Spécialisé dans le développement frontend et backend, créant des applications dynamiques et conviviales.',
        };
      case 'es':
        return {
          hello: 'Hola FS203',
          developer: 'Soy un desarrollador Full Stack',
          specialization: 'Especializado en desarrollo frontend y backend, creando aplicaciones dinámicas y fáciles de usar.',
        };
      default:
        return {
          hello: 'Hello FS203',
          developer: 'I am a Full Stack Developer Student',
          specialization: 'Specializing in both frontend and backend development, creating dynamic, user-friendly applications.',
        };
    }
  };

  const { hello, developer, specialization } = getLanguageText();

  const handleLanguageToggle = () => {
    if (language === 'en') {
      toggleLanguage('fr');
    } else if (language === 'fr') {
      toggleLanguage('es');
    } else {
      toggleLanguage('en');
    }
  };

  return (
    <div className={isHomePage ? 'background' : ''}>
      {isHomePage && <img className="background-image" src="bg5.jpg" alt="Background" />}

      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-light">My Project</Link>
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
                <Link to="/" className="nav-link text-light">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/TodoApp" className="nav-link text-light">ToDo List</Link>
              </li>
              <li className="nav-item">
                <Link to="/calculator" className="nav-link text-light">Calculator</Link>
              </li>
              <li className="nav-item">
                <Link to="/api" className="nav-link text-light">Api</Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link text-light">Card Profil</Link>
              </li>
            </ul>
          </div>

          <div className="theme-switch">
            <Test />
          </div>
        </div>
      </nav>

      {isHomePage && (
        <div className="language-toggle" onClick={handleLanguageToggle} style={{ cursor: 'pointer' }}>
          <img
            src={language === 'fr' ? 'france.png' : language === 'es' ? 'spain.png' : 'eng.png'}
            alt="Language Toggle"
            style={{ width: '50px', height: 'auto' }}
          />
        </div>
      )}

      {isHomePage && (
        <div className="info-container">
          <h2 className="hello-text info-text">{hello}</h2>
          <h2 className="developer-text info-text">{developer}</h2>
          <p className="specialization-text info-text">{specialization}</p>
        </div>
      )}

      {/* Cards Section */}
      {isHomePage && (
        <div className="cards-container">
          <div className="card">
          <Link to="/TodoApp">  <img src="todp.png" alt="ToDo List" className="card-img" /></Link>
            <h3>ToDo List</h3>
            <p>Manage your tasks effectively with our ToDo List app.</p>
           
          </div>
          <div className="card">
          <Link to="/calculator"><img src="calc.png" alt="Calculator" className="card-img" /></Link>
          
            <h3>Calculator</h3>
            <p>Perform calculations easily with our smart calculator.</p>
          
          </div>
          <div className="card">
          <Link to="/api">  <img src="api.png" alt="API" className="card-img" /></Link>
          
            <h3>API Data</h3>
            <p>Explore APIs and fetch dynamic data effortlessly.</p>
           
          </div>
          <div className="card">
          <Link to="/cart" ><img src="profile.jpg" alt="Profile" className="card-img" /></Link>
            <h3>Profile</h3>
            <p>View and manage user profiles with our card feature.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
