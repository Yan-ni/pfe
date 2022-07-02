import React, { useState, useContext } from 'react';
import { Modal, Input } from '../basicComponents';
import { APIStoreContext } from '../../APIStoreContext';

export default function AddPlateforme({ addPlateformeModalDisplay, setAddPlateformeModalDisplay, rowsData, setRowsData}) {
  const [id, setId] = useState('');
  const [nom, setNom] = useState('');

  const { plateformeStore } = useContext(APIStoreContext);

  const generateRandomId = () => {
    let tmp= Math.floor(Math.random() * 99999).toString();
    let listeId = rowsData.map(a => a.id);
      while(listeId.includes(tmp)){
        tmp= Math.floor(Math.random() * 99999).toString();
      }
    return tmp;
  }

  const handleActionButton = () => {
    let newRow = {id: generateRandomId(),nom: nom};
    setRowsData(rowsData => [...rowsData, newRow]);
    setNom('');   
    setId('');
    setAddPlateformeModalDisplay(false);
    // plateformeStore
    // .addPlateforme({id: generateRandomId(), nom, email, adresse})
    // .then(() => setAddPlateformeModalDisplay(false))
      }
  const handleDismissButton = () => {
    setNom('');  
    setId('');  
    setAddPlateformeModalDisplay(false);
      }

  return (
    <Modal
      display={addPlateformeModalDisplay}
      title="Ajouter un Plateforme"
      actionButton="Ajouter"
      onActionButton={() => handleActionButton()}
      onDismissButton={() => handleDismissButton()}>
        <Input
        id="nom"
        value={nom}
        onChange={(e) => setNom(e.target.value)}>
          nom
        </Input>
    </Modal>
  )
}
