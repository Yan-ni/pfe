import React, { useState, useContext } from 'react';
import { Modal, Input } from '../basicComponents';

export default function ModifierEquipement({ ModifierModalDisplay, setModifierModalDisplay, displayClickOption, index, rowsData, updateRowsData,listeId}) {
  const [numeroDeSerie,setNumeroDeSerie] = useState(rowsData[index].numeroDeSerie);
  const [codeFRU, setCodeFRU] = useState(rowsData[index].codeFRU);
  const [nomDequipement,setNomDequipement] = useState(rowsData[index].nomDequipement);
  const [idSite, setIdSite] = useState(rowsData[index].idSite);
  const [idPlateforme, setIdPlatforme] = useState(rowsData[index].idPlateforme);
  const [severite, setSeverite] = useState(rowsData[index].severite);
  const [date_mise_marche, setDate_mise_marche] = useState(rowsData[index].date_mise_marche);
  const [date_fin_service, setDate_fin_service] = useState(rowsData[index].date_fin_service);

  const handleActionButton = () => {
    let newRowsData = [...rowsData];
    newRowsData[index] = {numeroDeSerie:numeroDeSerie, codeFRU:codeFRU, nomDequipement:nomDequipement, idSite:idSite, idPlateforme:idPlateforme, severite:severite, date_mise_marche:date_mise_marche, date_fin_service:date_fin_service}  
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
      title="Modifier l'equipement"
      actionButton="modifier"
      onActionButton={() => handleActionButton()}
      onDismissButton={() => handleDismissButton()}>
      <div className="input-groupe">
        <Input
          id="NumeroDeSerie"
          defaultValue={numeroDeSerie}
          onChange={(e) => setNumeroDeSerie(e.target.value)}>
          Numero De Serie
        </Input>
        <Input
          id="nomdequipement"
          defaultValue={nomDequipement}
          onChange={(e) => setNomDequipement(e.target.value)}>
          Nom d'equipement
        </Input>
      </div>
      <div className="input-groupe">
       <Input   
          id="Severite"
          defaultValue={severite}
          onChange={(e) => setSeverite(e.target.value)}>
          Severite
        </Input>
       <Input
        id="codeFRU"
        defaultValue={codeFRU}
        onChange={(e) => setCodeFRU(e.target.value)}>
          code FRU
        </Input>
        <Input
        dataListOptions={listeId}
        list="datalist"
        id="idPlatforme"
        defaultValue={idPlateforme}
        onChange={(e) => setIdPlatforme(e.target.value)}>
          plateforme
        </Input>
      </div>
      <div className="input-groupe">
        <Input
        id="codeSite"
        defaultValue={idSite}
        onChange={(e) => setIdSite(e.target.value)}>
          site
        </Input>
       <Input
        id="MiseEnMarche"
        type="date"
        defaultValue={date_mise_marche}
        onChange={(e) => setDate_mise_marche(e.target.value)}>
          Mise en marche
        </Input>
        <Input
          id="finDeService"
          type="date"
          defaultValue={date_fin_service}
          onChange={(e) => setDate_fin_service(e.target.value)}>
          Fin de service
        </Input>
      </div>
    </Modal>
  )
}