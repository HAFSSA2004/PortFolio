import React from 'react';
import './style.css';
function CarteProfil({nom,age,profession,image}){
    return(
         <div className='card' >
            <img src={image} className='card-img-top' alt={nom} />
            <div className='card-body'>
                <h5 className='card-text'>Nom :{nom}</h5>
                <p className='card-text'>Age :{age}</p>
                <p className='card-text'>Professio :{profession}</p>

        </div>
       </div>
    )
}
export default CarteProfil;