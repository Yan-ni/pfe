import React, { useState, useContext } from 'react';
import { Modal, Input } from '../basicComponents';

export default function ModifierTechnicien({ ModifierModalDisplay, setModifierModalDisplay, displayClickOption, index, rowsData, updateRowsData }) {
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
      title="Modifier le Technicien"
      actionButton="Modifier"
      onActionButton={() => handleActionButton()}
      onDismissButton={() => handleDismissButton()}>
            <div className="input-groupe">
        <Input
          id="id"
          placeholder="id"
          value={rowsData[index].id}
          onChange={(e) => setId(e.target.value)}>
          id
        </Input>
        <Input
          id="nom"
          placeholder="john"
          value={rowsData[index].nom}
          onChange={(e) => setNom(e.target.value)}>
          Nom
        </Input>
        <Input
        id="prenom"
        placeholder="mike doe"
        value={rowsData[index].prenom}
        onChange={(e) => setPrenom(e.target.value)}>
          prenom
        </Input>
      </div>
      <div className="input-groupe-second">
      <Input
          id="telephone"
          placeholder="0555451157"
          value={rowsData[index].telephone}
          onChange={(e) => setTelephone(e.target.value)}>
          telephone
        </Input>
        <Input
        id="email"
        type="email"
        placeholder="contact@email.com"
        value={rowsData[index].email}
        onChange={(e) => setEmail(e.target.value)}>
          Email
        </Input>
        <Input
        dataListOptions={["001","002","003","004"]}
        list="datalist"
        id="id fournisseur"
        placeholder="005"
        value={rowsData[index].idFournisseur}
        onChange={(e) => setIdFournisseur(e.target.value)}>
          fournisseur
        </Input>
      </div>
      <Input 
        id="adresse"
        placeholder="Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"
        value={rowsData[index].adresse}
        onChange={(e) => setAdresse(e.target.value)}>
        Adresse
      </Input>
    </Modal>
  )
}