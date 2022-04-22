import React, { useState, useContext, useEffect } from "react";
import { Button } from "../components/basicComponents";
import AddFournisseur from "../components/fournisseur/AddFournisseur";
import "../assets/styles/fournisseur.css";
import { observer } from "mobx-react";
import { APIStoreContext } from "../APIStoreContext";
import SearchInput from "../components/SearchInput";
import TableRow from "../components/basicComponents/TableRow";

function Fournisseur() {
  const [addFournisseurModalDisplay, setAddFournisseurModalDisplay] = useState(false);
  const [searchText, setSearchText] = useState();
  const [rowsData, setRowsData] = useState([
    {id:123,nom:"algerie telecom",email:"contact@algerie-telecom.com",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},
    {id:123,nom:"algerie telecom",email:"contact@algerie-telecom.com",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                      
    {id:123,nom:"algerie telecom",email:"contact@algerie-telecom.com",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                      
    {id:123,nom:"algerie telecom",email:"contact@algerie-telecom.com",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                     
  ])
  const { fournisseurStore } = useContext(APIStoreContext);

  useEffect(() => {
    fournisseurStore.loadFournisseurs();
  }, []);

  return (
    <>
    <div className="flexN">
    <div className="fournisseur">
      <h1>Fournisseur</h1>
      <Button onClick={() => setAddFournisseurModalDisplay(true)}>Ajouter un fournisseur</Button>

      <AddFournisseur
        addFournisseurModalDisplay={addFournisseurModalDisplay}
        setAddFournisseurModalDisplay={setAddFournisseurModalDisplay} />
      <SearchInput searchParams={["nom", "email"]} onChange={(e) => setSearchText(e.target.value)}/>
    </div>
      <div className="table">
        <div className="tableHeader">
        <div><p>Id</p></div>
        <div><p>Nom</p></div>
        <div><p>Email</p></div>
        <div><p>Adresse</p></div>
        </div>
        <div className="tableBody">
        <TableRow rowsData={rowsData}/>
        </div>
        </div>
      </div>
      </>
  );
}

export default observer(Fournisseur);
