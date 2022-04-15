import React, { useState, useContext, useEffect } from "react";
import { Button } from "../components/basicComponents";
import AddTechnicien from "../components/technicien/AddTechnicien";
import "../assets/styles/pages.css";
import { observer } from "mobx-react";
import { APIStoreContext } from "../APIStoreContext";
import SearchInput from "../components/SearchInput";

function Technicien() {
  const [addTechnicienModalDisplay, setAddTechnicienModalDisplay] = useState(false);
  const [searchText, setSearchText] = useState();

  const { technicienStore } = useContext(APIStoreContext);

  useEffect(() => {
    technicienStore.loadTechniciens();
  }, []);

  return (  <>
              <div className="pageHeader">        
              <h1>Technicien</h1>
              <Button onClick={() => setAddTechnicienModalDisplay(true)}>Ajouter un Technicien</Button>

              <AddTechnicien
                addTechnicienModalDisplay={addTechnicienModalDisplay}
                setAddTechnicienModalDisplay={setAddTechnicienModalDisplay} />
              <SearchInput searchParams={["id", "nom", "prenom"]} onChange={(e) => setSearchText(e.target.value)}/>
              </div>
              <div class="verticalLine"></div>
            </>
  );
}

export default observer(Technicien);
