import React, { useState } from "react";
import Button from "../components/basicComponents/Button";
import AddFournisseur from "../components/fournisseur/AddFournisseur";
import "../assets/styles/fournisseur.css";
import edit from "../assets/images/edit.svg"

function Fournisseur() {
  const [addFournisseurModalDisplay, setAddFournisseurModalDisplay] = useState(false);

  return (
    <div className="fournisseur">
      <h1>Fournisseur</h1>
      <Button onClick={() => setAddFournisseurModalDisplay(true)}>Ajouter un fournisseur</Button>

      <AddFournisseur addFournisseurModalDisplay={addFournisseurModalDisplay} setAddFournisseurModalDisplay={setAddFournisseurModalDisplay} />
      
      <div className="table-container">
        <div className="table-header">
          <div className="header-item"><p>Id</p></div>
          <div className="header-item"><p>Nom</p></div>
          <div className="header-item"><p>Email</p></div>
          <div className="header-item"><p>Adresse</p></div>
        </div>
        
        <div className="table-body">
        {/* template body row */}
          <div className="table-row">
            <div className="body-item"><p>123</p></div>
            <div className="body-item"><p>Algerie Telecom</p></div>
            <div className="body-item"><p>contact@algerie-telecom.com</p></div>
            <div className="body-item"><p>Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger</p></div>
            <div className="body-item"><img src={edit} alt="options" /></div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Fournisseur;