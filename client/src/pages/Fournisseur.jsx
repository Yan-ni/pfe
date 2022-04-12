import React, { useState } from "react";
import Button from "../components/basicComponents/Button";
import AddFournisseur from "../components/fournisseur/AddFournisseur";
import "../assets/styles/fournisseur.css";

function Fournisseur() {
  const [addFournisseurModalDisplay, setAddFournisseurModalDisplay] = useState(false);

  return (
    <div className="fournisseur">
      <h1>Fournisseur</h1>
      <Button onClick={() => setAddFournisseurModalDisplay(true)}>Ajouter un fournisseur</Button>

      <AddFournisseur addFournisseurModalDisplay={addFournisseurModalDisplay} setAddFournisseurModalDisplay={setAddFournisseurModalDisplay} />
    </div>
  );
}

export default Fournisseur;