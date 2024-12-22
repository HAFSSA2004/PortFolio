import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Home.css';  
import Test from './Test/Test';

function Navbar() {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const [showLinks, setShowLinks] = useState(false);

    useEffect(() => {
        if (isHomePage) {
            setShowLinks(true);
        }
    }, [isHomePage]);

    return (
        <div className={isHomePage ? 'background' : ''}>
            {isHomePage && (
                <img className="background-image" src="v6.png" alt="Background" />
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
                    <h2 className="info-text">I am a Full Stack Developer</h2>
                    <p className="info-text">Specializing in both frontend and backend development, creating dynamic, user-friendly applications.</p>
                </div>
            )}
        </div>
    );
}

export default Navbar;
