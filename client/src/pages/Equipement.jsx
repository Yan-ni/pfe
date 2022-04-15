import React, { useState, useContext, useEffect } from "react";
import { Button } from "../components/basicComponents";
import AddEquipement from "../components/equipement/AddEquipement";
import "../assets/styles/pages.css";
import { observer } from "mobx-react";
import { APIStoreContext } from "../APIStoreContext";
import SearchInput from "../components/SearchInput";

function Equipement() {
  const [addEquipementModalDisplay, setAddEquipementModalDisplay] = useState(false);
  const [searchText, setSearchText] = useState();

  const { equipementStore } = useContext(APIStoreContext);

  useEffect(() => {
    equipementStore.loadEquipements();
  }, []);

  return ( <>
              <div className="pageHeader">        
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
