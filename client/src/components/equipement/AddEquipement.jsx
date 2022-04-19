import React, { useState, useContext } from 'react';
import { Modal, Input } from '../basicComponents';
import { APIStoreContext } from '../../APIStoreContext';

export default function AddEquipement({ addEquipementModalDisplay, setAddEquipementModalDisplay }) {
  const [numeroDeSerie, setNumeroDeSerie] = useState('');
  const [nomDequipement,setNomDequipement] = useState('');
  const [codeFRU, setCodeFRU] = useState('');
  const [severite,setSeverite] = useState('');
  const [codeSite, setCodeSite] = useState('');
  const [miseEnMarche, setMiseEnMarche] = useState('');
  const [finDeService, setFinDeService] = useState('');
  const [idPlatforme, setIdPlatforme] = useState('');

  const { equipementStore } = useContext(APIStoreContext);

  /**
   * I don't know if the Id is provided by the user or it is generated
   * autonatically by the server. there for now Im just generating the
   * Id randomly on the client side.
  */
  const generateRandomId = () => Math.floor(Math.random() * 999).toString();

  return (
    <Modal
      display={addEquipementModalDisplay}
      title="Ajouter un Equipement"
      actionButton="Ajouter"
      onActionButton={() => {
        equipementStore
          .addEquipement({id: generateRandomId(), numeroDeSerie, nomDequipement, codeFRU, severite, codeSite, miseEnMarche, finDeService, idPlatforme})
          .then(() => setAddEquipementModalDisplay(false))
      }}
      onDismissButton={() => setAddEquipementModalDisplay(false)}>
      <div className="input-groupe">
        <Input
          id="NumeroDeSerie"
          placeholder="65B13FF000037"
          value={numeroDeSerie}
          onChange={(e) => setNumeroDeSerie(e.target.value)}>
          Numero De Serie
        </Input>
        <Input
          id="nomdequipement"
          placeholder="Serveur de sauvguarde"
          value={nomDequipement}
          onChange={(e) => setNomDequipement(e.target.value)}>
          Nom d'equipement
        </Input>
      </div>
      <div className="input-groupe">
       <Input
          dataListOptions={["01","12","02","15"]}
          list="datalist"
          id="Severite"
          placeholder="02"
          value={severite}
          onChange={(e) => setSeverite(e.target.value)}>
          Severite
        </Input>
       <Input
        id="codeFRU"
        placeholder="65456120"
        value={codeFRU}
        onChange={(e) => setCodeFRU(e.target.value)}>
          code FRU
        </Input>
        <Input
        dataListOptions={["012","152","001","160"]}
        list="datalist"
        id="idPlatforme"
        type="datalist"
        placeholder="65456120"
        value={idPlatforme}
        onChange={(e) => setIdPlatforme(e.target.value)}>
          plateforme
        </Input>
      </div>
      <div className="input-groupe">
        <Input
        dataListOptions={["012","152","001","160"]}
        list="datalist"
        id="codeSite"
        placeholder="1566"
        value={codeSite}
        onChange={(e) => setCodeSite(e.target.value)}>
          site
        </Input>
       <Input
        id="MiseEnMarche"
        type="date"
        value={miseEnMarche}
        onChange={(e) => setMiseEnMarche(e.target.value)}>
          Mise en marche
        </Input>
        <Input
          id="finDeService"
          type="date"
          value={finDeService}
          onChange={(e) => setFinDeService(e.target.value)}>
          Fin de service
        </Input>
      </div>
    </Modal>
  )
}
