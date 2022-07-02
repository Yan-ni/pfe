import React, { useState, useContext } from 'react';
import { Modal, Input } from '../basicComponents';

export default function ModifierFournisseur({ ModifierModalDisplay, setModifierModalDisplay, displayClickOption, index, rowsData, updateRowsData}) {
  const [id,setId]=useState(rowsData[index].id);
  const [nom,setNom]=useState(rowsData[index].nom);

  const handleActionButton = () => {
    let newRowsData = [...rowsData];
    newRowsData[index] = {id: id,nom: nom}  
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
      title="Modifier la plateforme"
      actionButton="Modifier"
      onActionButton={() => handleActionButton()}
      onDismissButton={() => handleDismissButton()}>
      <Input 
        id="nom"
        defaultValue={rowsData[index].nom}
        onChange={(e) => setNom(e.target.value)}>
        Nom
      </Input>
    </Modal>
  )
}