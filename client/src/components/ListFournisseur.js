
// to be deleted . . . 

import "../styles/fournisseurs.css";
import { useContext, useEffect } from "react";
import { APIStoreContext } from "../APIStoreContext";
import { observer } from "mobx-react";

function ListFournisseur() {
  const APIStore = useContext(APIStoreContext);

  useEffect(() => {
    APIStore.loadFournisseurs();
  }, []);

  return (
    <div className="table">
      <div className="table__header">
        <div className="header__item table__col ta_start">ID</div>
        <div className="header__item table__col ta_start">Nom :</div>
        <div className="header__item table__col ta_start">Prenom :</div>
        <div className="header__item table__col ta_start">Adresse :</div>
        <div className="header__item table__col btn btn__ajouter">AJOUTER</div>
      </div>
      {
        APIStore.fournisseurs.map(({id, nom, prenom, adresse}) =>
          <div className="table__row">
            <div className="table__data table__col ta_start">{id}</div>
            <div className="table__data table__col ta_start">{nom}</div>
            <div className="table__data table__col ta_start">{prenom}</div>
            <div className="table__data table__col ta_start">{adresse}</div>
            <div className="table__data table__col btn btn__supprimer">SUPPRIMER</div>
          </div>
        )
      }
    </div>
  );
}

export default observer(ListFournisseur);