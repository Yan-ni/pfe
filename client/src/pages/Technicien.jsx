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
  const [searchText, setSearchText] = useState('');

  const [rowsData, setRowsData] = useState([
    {id:"001",nom:"algerie telecom",prenom:"mohamed anis kheddar",telephone:"0569741028",email:"contact@algerie-telecom.com",idFournisseur:"125",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                      
    {id:"002",nom:"orange france",prenom:"anis bellil",telephone:"0569741028",email:"contact@algerie-telecom.com",idFournisseur:"131",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                      
    {id:"003",nom:"free",prenom:"beghad bounejah",telephone:"0569741028",email:"contact@algerie-telecom.com",idFournisseur:"127",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                      
    {id:"004",nom:"american build",prenom:"wassim bellani",telephone:"0569741028",email:"contact@algerie-telecom.com",idFournisseur:"132",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                      
    {id:"005",nom:"algerie telecom",prenom:"mohamed alberke",telephone:"0569741028",email:"contact@algerie-telecom.com",idFournisseur:"128",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"}, 
    {id:"006",nom:"algerie telecom",prenom:"mohamed alberke",telephone:"0569741028",email:"contact@algerie-telecom.com",idFournisseur:"130",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},
    {id:"007",nom:"algerie telecom",prenom:"mohamed alberke",telephone:"0569741028",email:"contact@algerie-telecom.com",idFournisseur:"141",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                      
    {id:"008",nom:"algerie telecom",prenom:"mohamed alberke",telephone:"0569741028",email:"contact@algerie-telecom.com",idFournisseur:"138",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                      
    {id:"009",nom:"algerie telecom",prenom:"mohamed alberke",telephone:"0569741028",email:"contact@algerie-telecom.com",idFournisseur:"140",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                      
    {id:"010",nom:"algerie telecom",prenom:"mohamed alberke",telephone:"0569741028",email:"contact@algerie-telecom.com",idFournisseur:"126",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                      
    {id:"011",nom:"algerie telecom",prenom:"mohamed alberke",telephone:"0569741028",email:"contact@algerie-telecom.com",idFournisseur:"129",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                      
    {id:"012",nom:"algerie telecom",prenom:"mohamed alberke",telephone:"0569741028",email:"contact@algerie-telecom.com",idFournisseur:"132",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                      
    {id:"013",nom:"algerie telecom",prenom:"mohamed alberke",telephone:"0569741028",email:"contact@algerie-telecom.com",idFournisseur:"133",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                      
    {id:"014",nom:"algerie telecom",prenom:"mohamed alberke",telephone:"0569741028",email:"contact@algerie-telecom.com",idFournisseur:"134",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                      
    {id:"015",nom:"algerie telecom",prenom:"mohamed alberke",telephone:"0569741028",email:"contact@algerie-telecom.com",idFournisseur:"135",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                      
    {id:"016",nom:"algerie telecom",prenom:"mohamed alberke",telephone:"0569741028",email:"contact@algerie-telecom.com",idFournisseur:"136",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                      
    {id:"017",nom:"algerie telecom",prenom:"mohamed alberke",telephone:"0569741028",email:"contact@algerie-telecom.com",idFournisseur:"137",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                     
  ])

  const [rowsDataFournisseur, setRowsDataFournisseur] = useState([
    {id:"125",nom:"algerie telecom",email:"contact@algerie-telecom.com",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                      
    {id:"126",nom:"algerie telecom",email:"contact@algerie-telecom.com",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                      
    {id:"127",nom:"algerie telecom",email:"contact@algerie-telecom.com",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                      
    {id:"128",nom:"algerie telecom",email:"contact@algerie-telecom.com",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                      
    {id:"129",nom:"algerie telecom",email:"contact@algerie-telecom.com",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"}, 
    {id:"130",nom:"algerie telecom",email:"contact@algerie-telecom.com",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},
    {id:"131",nom:"algerie telecom",email:"contact@algerie-telecom.com",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                      
    {id:"132",nom:"algerie telecom",email:"contact@algerie-telecom.com",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                      
    {id:"133",nom:"algerie telecom",email:"contact@algerie-telecom.com",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                      
    {id:"134",nom:"algerie telecom",email:"contact@algerie-telecom.com",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                      
    {id:"135",nom:"algerie telecom",email:"contact@algerie-telecom.com",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                      
    {id:"136",nom:"algerie telecom",email:"contact@algerie-telecom.com",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                      
    {id:"137",nom:"algerie telecom",email:"contact@algerie-telecom.com",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                      
    {id:"138",nom:"algerie telecom",email:"contact@algerie-telecom.com",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                      
    {id:"139",nom:"algerie telecom",email:"contact@algerie-telecom.com",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                      
    {id:"140",nom:"algerie telecom",email:"contact@algerie-telecom.com",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                      
    {id:"141",nom:"algerie telecom",email:"contact@algerie-telecom.com",adresse:"Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger"},                                     
 ])

  const [rowsDataDisplayed, setRowsDataDisplayed]=useState(rowsData) ;

  const { technicienStore } = useContext(APIStoreContext);

  useEffect(() => {
    technicienStore.loadTechniciens();
    setRowsDataFournisseur(rowsDataFournisseur.map(a => a.id))
  }, []);

  useEffect(() => {
    setRowsDataDisplayed(rowsData);
  }, [rowsData]);

  const onchangeSearchInput = (searchText) => {
    const filtere = rowsData.filter(element => {
      return element.id.toLowerCase().includes(searchText.toLowerCase())
      ||element.nom.toLowerCase().includes(searchText.toLowerCase())
      ||element.prenom.toLowerCase().includes(searchText.toLowerCase())
      ||element.telephone.toLowerCase().includes(searchText.toLowerCase())
      ||element.email.toLowerCase().includes(searchText.toLowerCase())
      ||element.idFournisseur.toLowerCase().includes(searchText.toLowerCase())
     })
    setSearchText(searchText);
    setRowsDataDisplayed(filtere);
  }

  return (  
    <>
    <div className="main">
      <div className="header">       
              <h1>Techniciens</h1>
              <Button onClick={() => setAddTechnicienModalDisplay(true)}>Ajouter un Technicien</Button>
              <AddTechnicien
                addTechnicienModalDisplay={addTechnicienModalDisplay}
                setAddTechnicienModalDisplay={setAddTechnicienModalDisplay}
                rowsData={rowsData}
                setRowsData={setRowsData} 
                listeIdFournisseur={rowsDataFournisseur}/>
              <SearchInput 
              searchParams={["id", "nom", "prenom"]} 
              onChange={(e) => onchangeSearchInput(e.target.value)}
              rowsDataDisplayed={rowsDataDisplayed}
              setRowsDataDisplayed={setRowsDataDisplayed}/>
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
          <TableRow 
          rowsData={rowsDataDisplayed} 
          setRowsData={setRowsData} 
          page="technicien" 
          listeIdFournisseur={rowsDataFournisseur}
          moreRowsData={rowsDataFournisseur}/>
        </div>
    </div>
            </>
  );
}

export default observer(Technicien);
