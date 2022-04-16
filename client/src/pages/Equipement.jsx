import React, { useState, useContext, useEffect } from "react";
import { Button } from "../components/basicComponents";
import AddEquipement from "../components/equipement/AddEquipement";
import { observer } from "mobx-react";
import { APIStoreContext } from "../APIStoreContext";
import SearchInput from "../components/SearchInput";

function Equipement() {
  const [addEquipementModalDisplay, setAddEquipementModalDisplay] = useState(false);
  const [searchText, setSearchText] = useState();

  return ( <>
              <div className="page">        
              <h1>Equipement</h1>
              <Button onClick={() => setAddEquipementModalDisplay(true)}>Ajouter un Equipement</Button>

              <AddEquipement
                addEquipementModalDisplay={addEquipementModalDisplay}
                setAddEquipementModalDisplay={setAddEquipementModalDisplay} />
              <SearchInput searchParams={["nom", "code FRU"]} onChange={(e) => setSearchText(e.target.value)}/>
              </div>
              <div class="verticalLine"></div>
           </>
  );
}

export default observer(Equipement);
