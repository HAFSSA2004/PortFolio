import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Home.css';  
import Test from './Test/Test';
import { useLanguage } from './LanguageContext';  // Correctly import the custom hook

function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [showLinks, setShowLinks] = useState(false);

  const { language, toggleLanguage } = useLanguage();  // Get language and toggle function

  useEffect(() => {
    if (isHomePage) {
      setShowLinks(true);
    }
  }, [isHomePage]);

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

  const { hello, developer, specialization } = getLanguageText(); // Get the translated text

  return (
    <div className={isHomePage ? 'background' : ''}>
      {isHomePage && (
        <img className="background-image" src="land.jpeg" alt="Background" />
      )}
      <div className="navbar">
        <div className="navbar-logo">
          <h2>My Project</h2>
        </div>

       
        
        <div className="navbar-links">
          {showLinks && (
            <>
              <Link to='/' className="nav-link">Home</Link>
              <Link to='/TodoApp' className="nav-link">ToDo List</Link>
              <Link to='/calculator' className="nav-link">Calculator</Link>
              <Link to='/api' className="nav-link">Api</Link>
              <Link to='/cart' className="nav-link">Card Profil</Link>
            </>
          )}
        </div>
        <div className="theme-switch">
          <Test />
        </div>
      </div>
      
      {isHomePage && (
  <div className="info-container">
    <h2 className="hello-text info-text">{hello}</h2> {/* Apply specific class for animation */}
    <h2 className="developer-text info-text">{developer}</h2> {/* Apply specific class for animation */}
    <p className="specialization-text info-text">{specialization}</p> {/* Apply specific class for animation */}
  </div>
)}

      
      {/* Language toggle button, visible only on the home page */}
      {isHomePage && (
        <div className="language-toggle">
          <button onClick={toggleLanguage}>
            {language === 'en' ? 'Français' : language === 'fr' ? 'Español' : 'English'}
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
