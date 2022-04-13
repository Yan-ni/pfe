import React, { useState, useContext } from 'react';
import { Modal, Input } from '../basicComponents';
import { APIStoreContext } from '../../APIStoreContext';

export default function AddFournisseur({ addFournisseurModalDisplay, setAddFournisseurModalDisplay }) {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [adresse, setAdresse] = useState('');

  const { fournisseurStore } = useContext(APIStoreContext);

  /**
   * I don't know if the Id is provided by the user or it is generated
   * autonatically by the server. there for now Im just generating the
   * Id randomly on the client side.
  */
  const generateRandomId = () => Math.floor(Math.random() * 999).toString();

  return (
    <Modal
      display={addFournisseurModalDisplay}
      title="Ajouter un Fournisseur"
      actionButton="Ajouter"
      onActionButton={() => {
        fournisseurStore
          .addFournisseur({id: generateRandomId(), nom, email, adresse})
          .then(() => setAddFournisseurModalDisplay(false))
      }}
      onDismissButton={() => setAddFournisseurModalDisplay(false)}>
      <div className="input-groupe">
        <Input
          id="nom"
          placeholder="Algerie Telecom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}>
          Nom
        </Input>
        <Input
        id="email"
        type="email"
        placeholder="contact@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}>
          Email
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
