import React, { useState, useContext } from 'react';
import { Modal, Input } from '../basicComponents';
import { APIStoreContext } from '../../APIStoreContext';

export default function AddTechnicien({ addTechnicienModalDisplay, setAddTechnicienModalDisplay ,rowsData ,setRowsData ,listeIdFournisseur}) {
  const [nom, setNom] = useState('');
  const [telephone, setTelephone] = useState('');
  const [id, setId] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [adresse, setAdresse] = useState('');
  const [idFournisseur, setIdFournisseur] = useState('');

  const { technicienStore } = useContext(APIStoreContext);

  const generateRandomId = () => {
    let listeId = rowsData.map(a => a.id);
    let tmp;
    for (let int = 0; int < 1000; int++) {
      if(int<10){
        tmp="00".concat(int.toString());
      }else if(9<int<100){
        tmp="0".concat(int.toString());
      }else{
        tmp=int.toString();
      }
      if(!listeId.includes(tmp)){
        break;
      }
    }
    return tmp
  }

  const handleActionButton = () => {
    let newRow = {id: generateRandomId(),nom: nom, prenom:prenom, telephone:telephone,email:email,idFournisseur:idFournisseur,adresse:adresse};
    setRowsData(rowsData => [...rowsData, newRow]);
    setNom('');  
    setTelephone('');  
    setId('');  
    setPrenom('');  
    setEmail('');  
    setAdresse('');  
    setIdFournisseur('');  
    setAddTechnicienModalDisplay(false);
    // technicienStore
    // .addTechnicien({id: generateRandomId(), id, nom, prenom, email, telephone, idFournisseur, adresse})
    // .then(() => setAddTechnicienModalDisplay(false))
      }

  const handleDismissButton = () => {
    setNom('');  
    setTelephone('');  
    setId('');  
    setPrenom('');  
    setEmail('');  
    setAdresse('');  
    setIdFournisseur('');  
    setAddTechnicienModalDisplay(false);
      }

  return (
    <Modal
      display={addTechnicienModalDisplay}
      title="Ajouter un technicien"
      actionButton="Ajouter"
      onActionButton={() => handleActionButton()}
      onDismissButton={() => handleDismissButton()}>
      <div className="input-groupe">

        <Input
          id="nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}>
          Nom
        </Input>
        <Input
        id="prenom"
        value={prenom}
        onChange={(e) => setPrenom(e.target.value)}>
          prenom
        </Input>
      </div>
      <div className="input-groupe-second">
      <Input
          id="telephone"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}>
          telephone
        </Input>
        <Input
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}>
          Email
        </Input>
        <Input
        dataListOptions={listeIdFournisseur}
        list="datalist"
        id="id fournisseur"
        value={idFournisseur}
        onChange={(e) => setIdFournisseur(e.target.value)}>
          fournisseur
        </Input>
      </div>
      <Input 
        id="adresse"
        value={adresse}
        onChange={(e) => setAdresse(e.target.value)}>
        Adresse
      </Input>
    </Modal>
  )
}
