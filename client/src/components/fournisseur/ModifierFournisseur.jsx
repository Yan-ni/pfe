import React, { useState, useContext } from 'react';
import { Modal, Input } from '../basicComponents';

export default function ModifierFournisseur({ ModifierModalDisplay, setModifierModalDisplay, displayClickOption, index, rowsData, updateRowsData }) {
    const handleActionButton = () => {
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
          defaultValue={rowsData[index].id}>
          Id
        </Input>
        <Input
          id="nom"
          defaultValue={rowsData[index].nom}>
          Nom
        </Input>
        <Input
        id="email"
        type="email"
        defaultValue={rowsData[index].email}>
          Email
        </Input>
      </div>
      <Input 
        id="adresse"
        defaultValue={rowsData[index].adresse}>
        Adresse
      </Input>
    </Modal>
  )
}