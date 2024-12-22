import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
//import Home from "./Home";
import TodoApp from "./Todolist/TodoApp";
import Calculator from "./Calculator/Calculator";
import Api from "./Api/Api";
import Profils from "./CartProfil/Profils";
//import { ThemeProvider,useTheme } from "./Theme/Theme";
import './App.css'; // Assuming all the CSS files are imported here
import Navbar from "./Home"; // Import the Navbar component

//import Test from "./Test/Test";

function App() {
  const location = useLocation();
  
  React.useEffect(() => {
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

  return (
    <div>
      {/* Navbar is now outside the Routes component and will appear on all pages */}
      <Navbar />
      
      {/* Main routing logic */}
      <Routes>
         {/*   <Route path="/" element={<Home />} /> */}
    
        <Route path="/TodoApp" element={<TodoApp />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/api" element={<Api />} />
        <Route path="/cart" element={<Profils />} />
      </Routes>
    </div>
  );
}

export default App;
