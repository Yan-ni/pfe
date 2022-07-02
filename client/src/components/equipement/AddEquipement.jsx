import React, { useState, useContext } from 'react';
import { Modal, Input } from '../basicComponents';
import { APIStoreContext } from '../../APIStoreContext';

export default function AddEquipement({ addEquipementModalDisplay, setAddEquipementModalDisplay ,rowsData ,setRowsData ,listeIdPlateforme}) {
  const [numeroDeSerie,setNumeroDeSerie] = useState('');
  const [codeFRU, setCodeFRU] = useState('');
  const [nomDequipement,setNomDequipement] = useState('');
  const [idSite, setIdSite] = useState('');
  const [idPlateforme, setIdPlatforme] = useState('');
  const [severite, setSeverite] = useState('');
  const [date_mise_marche, setDate_mise_marche] = useState('');
  const [date_fin_service, setDate_fin_service] = useState('');

  const { equipementStore } = useContext(APIStoreContext);



  const handleActionButton = () => {
    console.log(date_mise_marche);
    let newRow = {numeroDeSerie:numeroDeSerie, codeFRU:codeFRU, nomDequipement:nomDequipement, idSite:idSite, idPlateforme:idPlateforme, severite:severite, date_mise_marche:date_mise_marche, date_fin_service:date_fin_service};
    setRowsData(rowsData => [...rowsData, newRow]);
    setNumeroDeSerie('');  
    setCodeFRU('');  
    setNomDequipement(''); 
    setIdSite('');   
    setIdPlatforme('');  
    setSeverite('');  
    setDate_mise_marche('');  
    setDate_fin_service('');   
    setAddEquipementModalDisplay(false);
    // onActionButton={() => {
    //   equipementStore
    //     .addEquipement({id: id, numeroDeSerie, codeFRU, nomDequipement, idSite, idPlateforme, severite, date_mise_marche, date_fin_service})
    //     .then(() => setAddEquipementModalDisplay(false))
      }
  const handleDismissButton = () => {
    setNumeroDeSerie('');  
    setCodeFRU('');  
    setNomDequipement(''); 
    setIdSite('');   
    setIdPlatforme('');  
    setSeverite('');  
    setDate_mise_marche('');  
    setDate_fin_service(''); 
    setAddEquipementModalDisplay(false);
      }
  return (
    <Modal
      display={addEquipementModalDisplay}
      title="Ajouter un Equipement"
      actionButton="Ajouter"
      onActionButton={() => handleActionButton()}
      onDismissButton={() => handleDismissButton()}>
      <div className="input-groupe">
        <Input
          id="NumeroDeSerie"
          value={numeroDeSerie}
          onChange={(e) => setNumeroDeSerie(e.target.value)}>
          Numero De Serie
        </Input>
        <Input
          id="nomdequipement"
          value={nomDequipement}
          onChange={(e) => setNomDequipement(e.target.value)}>
          Nom d'equipement
        </Input>
      </div>
      <div className="input-groupe">
       <Input   
          id="Severite"
          value={severite}
          onChange={(e) => setSeverite(e.target.value)}>
          Severite
        </Input>
       <Input
        id="codeFRU"
        value={codeFRU}
        onChange={(e) => setCodeFRU(e.target.value)}>
          code FRU
        </Input>
        <Input
        dataListOptions={listeIdPlateforme}
        list="datalist"
        id="idPlatforme"
        value={idPlateforme}
        onChange={(e) => setIdPlatforme(e.target.value)}>
          plateforme
        </Input>
      </div>
      <div className="input-groupe">
        <Input
        id="codeSite"
        value={idSite}
        onChange={(e) => setIdSite(e.target.value)}>
          site
        </Input>
       <Input
        id="MiseEnMarche"
        type="date"
        value={date_mise_marche}
        onChange={(e) => setDate_mise_marche(e.target.value)}>
          Mise en marche
        </Input>
        <Input
          id="finDeService"
          type="date"
          value={date_fin_service}
          onChange={(e) => setDate_fin_service(e.target.value)}>
          Fin de service
        </Input>
      </div>
    </Modal>
  )
}
