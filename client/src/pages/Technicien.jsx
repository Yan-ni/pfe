import React, { useState, useContext, useEffect } from "react";
import { Button } from "../components/basicComponents";
import AddTechnicien from "../components/technicien/AddTechnicien";
import { observer } from "mobx-react";
import "../assets/styles/technicien.css";
import { APIStoreContext } from "../APIStoreContext";
import SearchInput from "../components/SearchInput";
import TableRow from "../components/basicComponents/TableRow";

function Technicien() {
  const [addTechnicienModalDisplay, setAddTechnicienModalDisplay] = useState(false);
  const [searchText, setSearchText] = useState();

  const [rowsData, setRowsData] = useState([
    {id:125,nom:"algerie telecom",prenom:"mohamed alberke",telephone:"0569741028",email:"contact@algerie-telecom.com",fournisseur:"129",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                      
    {id:126,nom:"algerie telecom",prenom:"mohamed alberke",telephone:"0569741028",email:"contact@algerie-telecom.com",fournisseur:"129",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                      
    {id:127,nom:"algerie telecom",prenom:"mohamed alberke",telephone:"0569741028",email:"contact@algerie-telecom.com",fournisseur:"129",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                      
    {id:128,nom:"algerie telecom",prenom:"mohamed alberke",telephone:"0569741028",email:"contact@algerie-telecom.com",fournisseur:"129",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                      
    {id:129,nom:"algerie telecom",prenom:"mohamed alberke",telephone:"0569741028",email:"contact@algerie-telecom.com",fournisseur:"129",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"}, 
    {id:130,nom:"algerie telecom",prenom:"mohamed alberke",telephone:"0569741028",email:"contact@algerie-telecom.com",fournisseur:"129",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},
    {id:131,nom:"algerie telecom",prenom:"mohamed alberke",telephone:"0569741028",email:"contact@algerie-telecom.com",fournisseur:"129",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                      
    {id:132,nom:"algerie telecom",prenom:"mohamed alberke",telephone:"0569741028",email:"contact@algerie-telecom.com",fournisseur:"129",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                      
    {id:133,nom:"algerie telecom",prenom:"mohamed alberke",telephone:"0569741028",email:"contact@algerie-telecom.com",fournisseur:"129",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                      
    {id:134,nom:"algerie telecom",prenom:"mohamed alberke",telephone:"0569741028",email:"contact@algerie-telecom.com",fournisseur:"129",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                      
    {id:135,nom:"algerie telecom",prenom:"mohamed alberke",telephone:"0569741028",email:"contact@algerie-telecom.com",fournisseur:"129",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                      
    {id:136,nom:"algerie telecom",prenom:"mohamed alberke",telephone:"0569741028",email:"contact@algerie-telecom.com",fournisseur:"129",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                      
    {id:137,nom:"algerie telecom",prenom:"mohamed alberke",telephone:"0569741028",email:"contact@algerie-telecom.com",fournisseur:"129",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                      
    {id:138,nom:"algerie telecom",prenom:"mohamed alberke",telephone:"0569741028",email:"contact@algerie-telecom.com",fournisseur:"129",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                      
    {id:139,nom:"algerie telecom",prenom:"mohamed alberke",telephone:"0569741028",email:"contact@algerie-telecom.com",fournisseur:"129",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                      
    {id:140,nom:"algerie telecom",prenom:"mohamed alberke",telephone:"0569741028",email:"contact@algerie-telecom.com",fournisseur:"129",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                      
    {id:141,nom:"algerie telecom",prenom:"mohamed alberke",telephone:"0569741028",email:"contact@algerie-telecom.com",fournisseur:"129",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                     
  ])

  const { technicienStore } = useContext(APIStoreContext);

  useEffect(() => {
    technicienStore.loadTechniciens();
  }, []);

  return (  
    <>
    <div className="main">
      <div className="header">       
              <h1>Techniciens</h1>
              <Button onClick={() => setAddTechnicienModalDisplay(true)}>Ajouter un Technicien</Button>

              <AddTechnicien
                addTechnicienModalDisplay={addTechnicienModalDisplay}
                setAddTechnicienModalDisplay={setAddTechnicienModalDisplay} />
              <SearchInput searchParams={["id", "nom", "prenom"]} onChange={(e) => setSearchText(e.target.value)}/>
              </div>
          <div className="tableHeaderTechnicien">
          <p>Id</p>
          <p>Nom</p>
          <p>Prenom</p>
          <p>Telephone</p>
          <p>Fournisseur</p>
          <p>Email</p>
          <p>Adresse</p>
        </div>
        <div className="tableBody">
          <TableRow rowsData={rowsData} setRowsData={setRowsData} page="technicien"/>
        </div>
    </div>
            </>
  );
}

export default observer(Technicien);
