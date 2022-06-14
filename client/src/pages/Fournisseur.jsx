import React, { useState, useContext, useEffect } from "react";
import { Button } from "../components/basicComponents";
import AddFournisseur from "../components/fournisseur/AddFournisseur";
import { observer } from "mobx-react";
import "../assets/styles/fournisseur.css";
import { APIStoreContext } from "../APIStoreContext";
import SearchInput from "../components/SearchInput";
import TableRow from "../components/basicComponents/TableRow";

function Fournisseur() {
  const [addFournisseurModalDisplay, setAddFournisseurModalDisplay] = useState(false);
  const [searchText, setSearchText] = useState();

  const [rowsData, setRowsData] = useState([
    {id:125,nom:"algerie telecom",email:"contact@algerie-telecom.com",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                      
    {id:126,nom:"algerie telecom",email:"contact@algerie-telecom.com",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                      
    {id:127,nom:"algerie telecom",email:"contact@algerie-telecom.com",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                      
    {id:128,nom:"algerie telecom",email:"contact@algerie-telecom.com",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                      
    {id:129,nom:"algerie telecom",email:"contact@algerie-telecom.com",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"}, 
    {id:130,nom:"algerie telecom",email:"contact@algerie-telecom.com",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},
    {id:131,nom:"algerie telecom",email:"contact@algerie-telecom.com",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                      
    {id:132,nom:"algerie telecom",email:"contact@algerie-telecom.com",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                      
    {id:133,nom:"algerie telecom",email:"contact@algerie-telecom.com",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                      
    {id:134,nom:"algerie telecom",email:"contact@algerie-telecom.com",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                      
    {id:135,nom:"algerie telecom",email:"contact@algerie-telecom.com",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                      
    {id:136,nom:"algerie telecom",email:"contact@algerie-telecom.com",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                      
    {id:137,nom:"algerie telecom",email:"contact@algerie-telecom.com",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                      
    {id:138,nom:"algerie telecom",email:"contact@algerie-telecom.com",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                      
    {id:139,nom:"algerie telecom",email:"contact@algerie-telecom.com",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                      
    {id:140,nom:"algerie telecom",email:"contact@algerie-telecom.com",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                      
    {id:141,nom:"algerie telecom",email:"contact@algerie-telecom.com",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                     
  ])

  const { fournisseurStore } = useContext(APIStoreContext);

  useEffect(() => {
    fournisseurStore.loadFournisseurs();
  }, []);

  return (
 <>
    <div className="main">
      <div className="header">
        <h1>Fournisseur</h1>
        <Button onClick={() => setAddFournisseurModalDisplay(true)}>Ajouter un fournisseur</Button>
        <AddFournisseur
          addFournisseurModalDisplay={addFournisseurModalDisplay}
          setAddFournisseurModalDisplay={setAddFournisseurModalDisplay} />
        <SearchInput searchParams={["nom", "email"]} onChange={(e) => setSearchText(e.target.value)}/>
      </div>
      <div className="tableHeader">
          <p>Id</p>
          <p>Nom</p>
          <p>Email</p>
          <p>Adresse</p>
        </div>
        <div className="tableBody">
          <TableRow rowsData={rowsData} setRowsData={setRowsData} page="fournisseur"/>
        </div>
    </div>
            </>);
}

export default observer(Fournisseur);
