import React, { useState, useContext, useEffect } from "react";
import { Button } from "../components/basicComponents";
import AddEquipement from "../components/equipement/AddEquipement"
import { observer } from "mobx-react";
import "../assets/styles/equipement.css";
import { APIStoreContext } from "../APIStoreContext";
import SearchInput from "../components/SearchInput";
import TableRow from "../components/basicComponents/TableRow";

function Equipement() {
  const [addEquipementModalDisplay, setAddEquipementModalDisplay] = useState(false);
  const [searchText, setSearchText] = useState('');

  const [rowsData, setRowsData] = useState([
    {numeroDeSerie:"12345678912348",codeFRU:"1234567891",nomDequipement:"routeur",idSite:"46857",idPlateforme:"91783",severite:"a",date_mise_marche:"2022-10-15",date_fin_service:"2023-12-16"},
    {numeroDeSerie:"12345678912349",codeFRU:"1234567891",nomDequipement:"routeur",idSite:"46857",idPlateforme:"91783",severite:"b",date_mise_marche:"2022-10-15",date_fin_service:"2023-12-16"},  
    {numeroDeSerie:"12345678912346",codeFRU:"1234567891",nomDequipement:"routeur",idSite:"46857",idPlateforme:"91783",severite:"c",date_mise_marche:"2022-10-15",date_fin_service:"2023-12-16"},  
    {numeroDeSerie:"12345678912485",codeFRU:"1234567891",nomDequipement:"routeur",idSite:"46857",idPlateforme:"91783",severite:"d",date_mise_marche:"2022-10-15",date_fin_service:"2023-12-16"},  
    {numeroDeSerie:"12345678912340",codeFRU:"1234567891",nomDequipement:"routeur",idSite:"46857",idPlateforme:"91783",severite:"r",date_mise_marche:"2022-10-15",date_fin_service:"2023-12-16"},  
    {numeroDeSerie:"12345678912355",codeFRU:"1234567891",nomDequipement:"routeur",idSite:"46857",idPlateforme:"91783",severite:"s",date_mise_marche:"2022-10-15",date_fin_service:"2023-12-16"},  
    {numeroDeSerie:"12345678915345",codeFRU:"1234567891",nomDequipement:"routeur",idSite:"46857",idPlateforme:"91783",severite:"q",date_mise_marche:"2022-10-15",date_fin_service:"2023-12-16"},  
    {numeroDeSerie:"12345678952345",codeFRU:"1234567891",nomDequipement:"routeur",idSite:"46857",idPlateforme:"91783",severite:"a",date_mise_marche:"2022-10-15",date_fin_service:"2023-12-16"},  
    {numeroDeSerie:"12345675952345",codeFRU:"1234567891",nomDequipement:"routeur",idSite:"46857",idPlateforme:"91783",severite:"b",date_mise_marche:"2022-10-15",date_fin_service:"2023-12-16"},  
    {numeroDeSerie:"12345578912345",codeFRU:"1234567891",nomDequipement:"routeur",idSite:"46857",idPlateforme:"91783",severite:"y",date_mise_marche:"2022-10-15",date_fin_service:"2023-12-16"},      
  ])

  const [rowsDataPlateforme, setRowsDataPlateforme] = useState([
    {id:"12562",nom:"algerie telecom oran"},                                      
    {id:"12657",nom:"algerie telecom alger"},                                      
    {id:"12772",nom:"algerie telecom telemcen"},                                      
    {id:"12868",nom:"algerie telecom oran"},                      
    {id:"13258",nom:"algerie telecom oran"},                                      
    {id:"13358",nom:"algerie telecom oran"},                                      
    {id:"13458",nom:"algerie telecom oran"},                                      
    {id:"13558",nom:"algerie telecom oran"},                                      
    {id:"13658",nom:"algerie telecom oran"},                                      
    {id:"13758",nom:"algerie telecom oran"},                                      
    {id:"13858",nom:"algerie telecom oran"},                                      
    {id:"13958",nom:"algerie telecom oran"},                                      
    {id:"14076",nom:"algerie telecom oran"},                                      
    {id:"14167",nom:"algerie telecom oran"}, 
  ])

  const [rowsDataDisplayed, setRowsDataDisplayed]=useState(rowsData) ;

  const { equipementStore } = useContext(APIStoreContext);

  useEffect(() => {
    equipementStore.loadEquipements();
    setRowsDataPlateforme(rowsDataPlateforme.map(a => a.id))
  }, []);

  useEffect(() => {
    setRowsDataDisplayed(rowsData);
  }, [rowsData]);

  const onchangeSearchInput = (searchText) => {
    const filtere = rowsData.filter(element => {
      return element.numeroDeSerie.toLowerCase().includes(searchText.toLowerCase())
      ||element.codeFRU.toLowerCase().includes(searchText.toLowerCase())
      ||element.idSite.toLowerCase().includes(searchText.toLowerCase())
      ||element.severite.toLowerCase().includes(searchText.toLowerCase())
      ||element.idPlateforme.toLowerCase().includes(searchText.toLowerCase())
      ||element.date_mise_marche.toLowerCase().includes(searchText.toLowerCase())
      ||element.date_fin_service.toLowerCase().includes(searchText.toLowerCase())
     })
    setSearchText(searchText);
    setRowsDataDisplayed(filtere);
  }

  return (  
    <>
    <div className="main">
      <div className="header">       
              <h1>Equipements</h1>
              <Button onClick={() => setAddEquipementModalDisplay(true)}>Ajouter un Equipement</Button>

              <AddEquipement
                addEquipementModalDisplay={addEquipementModalDisplay}
                setAddEquipementModalDisplay={setAddEquipementModalDisplay}
                rowsData={rowsData}
                setRowsData={setRowsData} 
                listeIdPlateforme={rowsDataPlateforme}/>
              <SearchInput 
              searchParams={["Numero de serie"]} 
              onChange={(e) => onchangeSearchInput(e.target.value)}
              rowsDataDisplayed={rowsDataDisplayed}
              setRowsDataDisplayed={setRowsDataDisplayed}/>
              </div>
          <div className="tableHeaderEquipement">
          <p>Numero de serie</p>
          <p>FRU</p>
          <p>Nom</p>
          <p>Id site</p>
          <p>Id plateforme</p>
          <p>Severite</p>
          <p>Date mise en marche</p>
          <p>Date fin de service</p>
        </div>
        <div className="tableBody">
          <TableRow 
          rowsData={rowsDataDisplayed} 
          setRowsData={setRowsData} 
          page="equipement" 
          listeIdPlateforme={rowsDataPlateforme}/>
        </div>
    </div>
            </>
  );
}

export default observer(Equipement);
