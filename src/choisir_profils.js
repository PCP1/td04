import React from 'react';


const choisir_profils = ({filterProfils}) => {
    return(
        <div className="btn-container">
            <button className="content-btn"
                onClick={()=>filterProfils('Jeanne')}>Jeanne</button>    

                <button className="content-btn"
                onClick={()=>filterProfils('Martine')}>Martine</button>   

                <button className="content-btn"
                onClick={()=>filterProfils('Alexander')}>Alexander</button>            
        </div>
    );
}
export default choisir_profils;