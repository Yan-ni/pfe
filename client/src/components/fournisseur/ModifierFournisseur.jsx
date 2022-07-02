import React, { useState, useContext } from 'react';
import { Modal, Input } from '../basicComponents';

export default function ModifierFournisseur({ ModifierModalDisplay, setModifierModalDisplay, displayClickOption, index, rowsData, updateRowsData}) {
  const [id,setId]=useState(rowsData[index].id);
  const [nom,setNom]=useState(rowsData[index].nom);
  const [email,setEmail]=useState(rowsData[index].email);
  const [adresse,setAdresse]=useState(rowsData[index].adresse);

  const handleActionButton = () => {
    let newRowsData = [...rowsData];
    newRowsData[index] = {id: id,nom: nom,email:email,adresse:adresse}  
    updateRowsData(newRowsData);
        setModifierModalDisplay(false);
        displayClickOption();
      }
    const handleDismissButton = () => {
    setModifierModalDisplay(false);
    displayClickOption();
  }

  return (
    <Modal
      display={ModifierModalDisplay}
      title="Modifier le Fournisseur"
      actionButton="Modifier"
      onActionButton={() => handleActionButton()}
      onDismissButton={() => handleDismissButton()}>
      <div className="modifier-input-groupe">
         <Input
          id="id"
          defaultValue={rowsData[index].id}
          onChange={(e) => setId(e.target.value)}>
          Id
        </Input>
        <Input
          id="nom"
          defaultValue={rowsData[index].nom}
          onChange={(e) => setNom(e.target.value)}>
          Nom
        </Input>
        <Input
        id="email"
        type="email"
        defaultValue={rowsData[index].email}
        onChange={(e) => setEmail(e.target.value)}>
          Email
        </Input>
      </div>
      <Input 
        id="adresse"
        defaultValue={rowsData[index].adresse}
        onChange={(e) => setAdresse(e.target.value)}>
        Adresse
      </Input>
    </Modal>
  )
}