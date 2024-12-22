// ListeProfils.js
import React from 'react';
import './style.css';

export default function ListeProfils({ profils, suprimerP }) {
  return (
    <div className="row g-4 mt-5">
      {profils.map((profil, index) => (
        <div key={index} className="col-lg-3 col-md-4 col-sm-6">
          <div className="card shadow-sm">
            <img
              src={profil.image}
              alt={profil.nom}
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title ps-0">{profil.nom}</h5>
              <p className="card-text mb-1">Age: <span className="text-secondary">{profil.age}</span></p>
              <p className="card-text">Profession: <span className="text-secondary">{profil.profession}</span></p>

              <input type="submit" value="Delete"   onClick={() => suprimerP(index)} style={{backgroundColor:'red',width:'50%',border:'none',padding:'5px',color:'white',borderRadius:'5px',fontSize:'20px',fontFamily:'sans-serif'}} />
              
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
