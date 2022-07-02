import React, { useState, useContext, useEffect } from "react";
import { Button } from "../components/basicComponents";
import AddPlateforme from "../components/plateforme/AddPlateforme";
import { observer } from "mobx-react";
import "../assets/styles/plateforme.css";
import { APIStoreContext } from "../APIStoreContext";
import SearchInput from "../components/SearchInput";
import TableRow from "../components/basicComponents/TableRow";

function Plateforme() {
  const [addPlateformeModalDisplay, setAddPlateformeModalDisplay] = useState(false);
  const [searchText, setSearchText] = useState();

  const [rowsData, setRowsData] = useState([
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

  const { plateformeStore } = useContext(APIStoreContext);

  useEffect(() => {
    plateformeStore.loadPlateformes();
  }, []);

  useEffect(() => {
    setRowsDataDisplayed(rowsData);
  }, [rowsData]);

  const onchangeSearchInput = (searchText) => {
    const filtere = rowsData.filter(element => {
      return element.id.toLowerCase().includes(searchText.toLowerCase())
      ||element.nom.toLowerCase().includes(searchText.toLowerCase())
     })
    setSearchText(searchText);
    setRowsDataDisplayed(filtere);
  }

  return (
 <>
    <div className="main">
      <div className="header">
        <h1>Plateforme</h1>
        <Button onClick={() => setAddPlateformeModalDisplay(true)}>Ajouter une plateforme</Button>
        <AddPlateforme
          addPlateformeModalDisplay={addPlateformeModalDisplay}
          setAddPlateformeModalDisplay={setAddPlateformeModalDisplay}
          rowsData={rowsData}
          setRowsData={setRowsData}  />
        <SearchInput 
        searchParams={["nom", "email"]}
        onChange={(e) => onchangeSearchInput(e.target.value)}
        rowsDataDisplayed={rowsDataDisplayed}
        setRowsDataDisplayed={setRowsDataDisplayed}/>
      </div>
      <div className="tableHeaderPlateforme">
          <p>Id</p>
          <p>Nom</p>
        </div>
        <div className="tableBody">
          <TableRow rowsData={rowsDataDisplayed} setRowsData={setRowsData} page="plateforme"/>
        </div>
    </div>
            </>);
}

export default observer(Plateforme);
