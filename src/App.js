
import React, {useState} from 'react';
import choisir_profils from './choisir_profils';
import page_profils from './page_profils.js';
import informations from './informations.js';


function App(){
  
  

    const[profils, setProfils] = useState([]); 
    function filterProfils(active_profile) {
    const newprofil = informations.filter((item) => item.prenom === active_profile);
    setProfils(newprofil);
    //console.log(newprofil);
    //console.log('Le Clique fonctionne')
  }
 /// return <h1>Hello, World</h1>;
  return (
  <div>
    <div className ="header">
                <choisir_profils 
                filterProfils= {filterProfils}>
                </choisir_profils>
            </div>
     <div className="main">
            <page_profils 
            informations = {profils}>
            </page_profils>
            </div>
  </div>

  );
}



export default App;
