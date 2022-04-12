import React from 'react'
import { Modal, Input } from '../basicComponents';

export default function AddFournisseur({ addFournisseurModalDisplay, setAddFournisseurModalDisplay }) {
  return (
    <Modal
      display={addFournisseurModalDisplay}
      title="Ajouter un Fournisseur"
      actionButton="Ajouter"
      onActionButton={() => setAddFournisseurModalDisplay(false)}
      onDismissButton={() => setAddFournisseurModalDisplay(false)}>
      <div className="input-groupe">
        <Input id="nom" placeholder="Algerie Telecom">Nom</Input>
        <Input id="email" placeholder="contact@email.com">Email</Input>
      </div>

      <Input id="adresse" placeholder="Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger">Adresse</Input>
    </Modal>
  )
}
