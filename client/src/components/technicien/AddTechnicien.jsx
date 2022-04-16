import React, { useState, useContext } from 'react';
import { Modal, Input } from '../basicComponents';
import { APIStoreContext } from '../../APIStoreContext';

export default function AddTechnicien({ addTechnicienModalDisplay, setAddTechnicienModalDisplay }) {
  const [nom, setNom] = useState('');
  const [telephone, setTelephone] = useState('');
  const [id, setId] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [adresse, setAdresse] = useState('');
  const [idFournisseur, setIdFournisseur] = useState('');

  const { technicienStore } = useContext(APIStoreContext);

  /**
   * I don't know if the Id is provided by the user or it is generated
   * autonatically by the server. there for now Im just generating the
   * Id randomly on the client side.
  */
  const generateRandomId = () => Math.floor(Math.random() * 999).toString();

  return (
    <Modal
      display={addTechnicienModalDisplay}
      title="Ajouter un technicien"
      actionButton="Ajouter"
      onActionButton={() => {
        technicienStore
          .addTechnicien({id: generateRandomId(), id, nom, prenom, email, telephone, idFournisseur, adresse})
          .then(() => setAddTechnicienModalDisplay(false))
      }}
      onDismissButton={() => setAddTechnicienModalDisplay(false)}>
      <div className="input-groupe">
        <Input
          id="id"
          placeholder="id"
          value={id}
          onChange={(e) => setId(e.target.value)}>
          id
        </Input>
        <Input
          id="nom"
          placeholder="john"
          value={nom}
          onChange={(e) => setNom(e.target.value)}>
          Nom
        </Input>
        <Input
        id="prenom"
        placeholder="mike doe"
        value={prenom}
        onChange={(e) => setPrenom(e.target.value)}>
          prenom
        </Input>
      </div>
      <div className="input-groupe-second">
      <Input
          id="telephone"
          placeholder="0555451157"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}>
          telephone
        </Input>
        <Input
        id="email"
        type="email"
        placeholder="contact@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}>
          Email
        </Input>
        <Input
        dataListOptions={["012","152","001","160"]}
        list="datalist"
        id="id fournisseur"
        placeholder="845"
        value={idFournisseur}
        onChange={(e) => setIdFournisseur(e.target.value)}>
          fournisseur
        </Input>
      </div>
      <Input 
        id="adresse"
        placeholder="Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"
        value={adresse}
        onChange={(e) => setAdresse(e.target.value)}>
        Adresse
      </Input>
    </Modal>
  )
}
