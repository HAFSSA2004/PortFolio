import React, { useState } from 'react';
import './style.css';
import ListeProfils from './ListeProfils';
import FormulaireProfile from './FormulaireProfil';
import Navbar from "../Home";
function Profils() {
  const [profils, setProfils] = useState([
    { nom: 'John', age: 25, profession: 'Developer', image: 'p1.png' },
    { nom: 'Emily', age: 30, profession: 'Designer', image: 'p3.png' },
    { nom: 'Michael', age: 28, profession: 'Engineer', image: 'p2.png' },
    { nom: 'Sophia', age: 22, profession: 'Artist', image: 'image.png' }
  ]);

  const AjouterP = (profil) => {
    const newP = [...profils, profil];
    setProfils(newP);
  };

  const suprimerP = (index) => {
    const newP = profils.filter((_, i) => i !== index);
    setProfils(newP);
  };

  return (
   <div>
    <Navbar/>
     <div className="container mt-5">
      <FormulaireProfile AjouterP={AjouterP} />
      <ListeProfils profils={profils} suprimerP={suprimerP} />
    </div>
   </div>
  );
}

export default Profils;