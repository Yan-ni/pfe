import React, { useState, useContext } from 'react';
import { Modal, Input } from '../basicComponents';

export default function ModifierTechnicien({ ModifierModalDisplay, setModifierModalDisplay, displayClickOption, index, rowsData, updateRowsData ,listeIdFournisseur}) {
  const [id,setId]=useState(rowsData[index].id);
  const [nom,setNom]=useState(rowsData[index].nom);
  const [prenom,setPrenom]=useState(rowsData[index].prenom);
  const [email,setEmail]=useState(rowsData[index].email);
  const [adresse,setAdresse]=useState(rowsData[index].adresse);
  const [telephone,setTelephone]=useState(rowsData[index].telephone);  
  const [idFournisseur,setIdFournisseur]=useState(rowsData[index].idFournisseur);

  const handleActionButton = () => {
    let newRowsData = [...rowsData];
    newRowsData[index] = {id: id,nom: nom, prenom:prenom, telephone:telephone,email:email,idFournisseur:idFournisseur,adresse:adresse}  
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
      title="Modifier le Technicien"
      actionButton="Modifier"
      onActionButton={() => handleActionButton()}
      onDismissButton={() => handleDismissButton()}>
            <div className="input-groupe">
        <Input
          id="id"
          defaultValue={rowsData[index].id}
          onChange={(e) => setId(e.target.value)}>
          id
        </Input>
        <Input
          id="nom"
          defaultValue={rowsData[index].nom}
          onChange={(e) => setNom(e.target.value)}>
          Nom
        </Input>
        <Input
        id="prenom"
        defaultValue={rowsData[index].prenom}
        onChange={(e) => setPrenom(e.target.value)}>
          prenom
        </Input>
      </div>
      <div className="input-groupe-second">
      <Input
          id="telephone"
          defaultValue={rowsData[index].telephone}
          onChange={(e) => setTelephone(e.target.value)}>
          telephone
        </Input>
        <Input
        id="email"
        type="email"
        defaultValue={rowsData[index].email}
        onChange={(e) => setEmail(e.target.value)}>
          Email
        </Input>
        <Input
        dataListOptions={listeIdFournisseur}
        list="datalist"
        id="id fournisseur"
        defaultValue={rowsData[index].idFournisseur}
        onChange={(e) => setIdFournisseur(e.target.value)}>
          fournisseur
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