import React from 'react';

import informations from './informations.js';

const page_profils=({informations})=>{
    return(
        <div className="section-center">
          {informations.map((element) =>{ const{id, nom, prenom, date_naissance, image, message}=element;
              
              return(
                <div key={id}>

                  <img src={image} alt={nom} className="photo"></img>

                  <p>
                    <span className="nom">{nom}</span>
                    <span className="prenom">{prenom}</span>
                  </p>

                  <h3>{date_naissance}</h3>
                  
                  <div className="post-container">
                    <p>{message}</p>
                  </div>
                </div>  
              );
          })

          }
        </div>
    );
}
export default page_profils;