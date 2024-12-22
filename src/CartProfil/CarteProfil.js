import React from 'react';
import './style.css';
function CarteProfil({nom,age,profession,image}){
    const afficherNom = () => { 
        alert(`Vous avez sélectionné : ${nom}`); 
      }; 
    
    return(
        <div className='card' >
            <img src={image} className='card-img-top' alt={nom} />
            <div className='card-body'>
                <h5 className='card-text'>Nom :{nom}</h5>
                <p className='card-text'>Age :{age}</p>
                <p className='card-text'>Professio :{profession}</p>
                <button onClick={afficherNom} className="btn btn-outline-warning"> 
          Voir Plus 
        </button> 
            </div>

        </div>
    )
}
export default CarteProfil;