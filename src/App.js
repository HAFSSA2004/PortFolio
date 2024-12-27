import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import TodoApp from "./Todolist/TodoApp";
import Calculator from "./Calculator/Calculator";
import Api from "./Api/Api";
import Profils from "./CartProfil/Profils";
import NotFound from "./NotFound";
import './App.css'; // Assuming all the CSS files are imported here
//import Navbar from "./Home"; // Import the Navbar component
import { LanguageProvider } from './LanguageContext'; // Correctly import the LanguageProvider
import Home from "./Home"; // Import Home component
import Loader from "./Loader";

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Simulate a loading delay for the loader (e.g., 2 seconds)
    const timer = setTimeout(() => {
      setLoadingComplete(true);
    }, 2000); // Adjust the timeout as needed (2000ms = 2 seconds)

    return () => clearTimeout(timer); // Cleanup the timer when the component unmounts
  }, []);

  useEffect(() => {
    // Remove all possible body classes first
    document.body.classList.remove("home-body", "todo-body", "calculator-body", 'card');
    
    // Apply styles based on the current route
    if (location.pathname === "/TodoApp") {
      document.body.classList.add("todo-body");
    } else if (location.pathname === "/Calculator") {
      document.body.classList.add("calculator-body");
    } else if (location.pathname === "/Api") {
      document.body.classList.add("api-body");
    } else if (location.pathname === "/CarteProfil") {
      document.body.classList.add("card");
    } else {
      document.body.classList.add("home-body");
    }
  }, [location]);

  // Render the loader while the app is loading
  if (!loadingComplete) {
    return <Loader />;
  }

  return (
    <LanguageProvider> {/* Wrap the app with LanguageProvider */}
      <div>
        {/* Navbar is now outside the Routes component and will appear on all pages */}
        
        {/* Main routing logic */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/TodoApp" element={<TodoApp />} />
          <Route path="/Calculator" element={<Calculator />} />
          <Route path="/api" element={<Api />} />
          <Route path="/cart" element={<Profils />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </LanguageProvider>
  );
}

export default App;
