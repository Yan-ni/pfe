
// to be deleted . . . 

import "../styles/fournisseurs.css"

function ListFournisseur({ fournisseurs }) {

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
                fournisseurs.map(e => 
                    <div className="table__row">
                        <div className="table__data table__col ta_start">{e.id}</div>
                        <div className="table__data table__col ta_start">{e.nom}</div>
                        <div className="table__data table__col ta_start">{e.prenom}</div>
                        <div className="table__data table__col ta_start">{e.adresse}</div>
                        <div className="table__data table__col btn btn__supprimer">SUPPRIMER</div>
                     </div>
                )
            }
        </div>
     );
}

export default ListFournisseur;