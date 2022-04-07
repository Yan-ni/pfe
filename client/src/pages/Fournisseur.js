import ListFournisseur from "../components/ListFournisseur";
import { useContext } from "react";
import { FournisseurContext } from "../FournisseurContext";
import "../styles/fournisseurs.css"

function Fournisseur() {
    const { fournisseur } = useContext(FournisseurContext);

    return ( 
        <div className="Fournisseurs_Container" >
            <ListFournisseur fournisseurs={fournisseur}></ListFournisseur>
        </div>
     );
}

export default Fournisseur;