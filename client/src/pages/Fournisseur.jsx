import React, { useState, useContext, useEffect } from "react";
import { Button } from "../components/basicComponents";
import AddFournisseur from "../components/fournisseur/AddFournisseur";
import "../assets/styles/fournisseur.css";
import { observer } from "mobx-react";
import { APIStoreContext } from "../APIStoreContext";

function Fournisseur() {
  const [addFournisseurModalDisplay, setAddFournisseurModalDisplay] = useState(false);

  const { fournisseurStore } = useContext(APIStoreContext);

  useEffect(() => {
    fournisseurStore.loadFournisseurs();
  }, []);

  return (
    <div className="fournisseur">
      <h1>Fournisseur</h1>
      <Button onClick={() => setAddFournisseurModalDisplay(true)}>Ajouter un fournisseur</Button>

      <AddFournisseur
        addFournisseurModalDisplay={addFournisseurModalDisplay}
        setAddFournisseurModalDisplay={setAddFournisseurModalDisplay} />
    </div>
  );
}

export default observer(Fournisseur);