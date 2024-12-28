import React from 'react';
import './style.css';

export default function ListeProfils({ profils, suprimerP }) {
  return (
    <div className="cards-containers">
      {profils.map((profil, index) => (
        <div key={index} className="col-lg-3 col-md-4 col-sm-6">
          <div className="card shadow-sm">
            <img
              src={profil.image}
              alt={profil.nom}
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title ps-0 ms-0">{profil.nom}</h5>
              <p className="card-text mb-1">
                Age: <span className="text-secondary">{profil.age}</span>
              </p>
              <p className="card-text">
                Profession: <span className="text-secondary">{profil.profession}</span>
              </p>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <input
                  type="submit"
                  value="Delete"
                  onClick={() => suprimerP(index)}
                  style={{
                    backgroundColor: 'red',
                    width: '48%',
                    border: 'none',
                    padding: '5px',
                    color: 'white',
                    borderRadius: '5px',
                    fontSize: '16px',
                    fontFamily: 'sans-serif',
                  }}
                />
                <input
                  type="button"
                  value="Show Details"
                  className="btn btn-primary"
                  onClick={() =>
                    alert(
                      `Name: ${profil.nom}\nAge: ${profil.age}\nProfession: ${profil.profession}`
                    )
                  }
                  style={{
                    backgroundColor: 'blue',
                    width: '48%',
                    border: 'none',
                    padding: '5px 0',
                    color: 'white',
                    borderRadius: '5px',
                    fontSize: '16px',
                    fontFamily: 'sans-serif',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
