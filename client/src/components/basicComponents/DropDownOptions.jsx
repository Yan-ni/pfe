import React, { useState }  from 'react'
import ModifierFournisseur from '../fournisseur/ModifierFournisseur';
import ModifierTechnicien from '../technicien/ModifierTechnicien';
import ModifierPlateforme from '../plateforme/ModifierPlateforme';
import ModifierEquipement from '../equipement/ModifierEquipement';

export default function OptionButton({ rowsData, updateRowsData, idx, displayClickOption, setModifierFournisseurModalDisplay, page, listeIdFournisseur}) {

  const [ModifierModalDisplay, setModifierModalDisplay] = useState(false);  

  const editRow = () => {
    setModifierModalDisplay(true);
  }
  const deleteRow = () => {
    updateRowsData(rowsData => rowsData.filter((rowsData, index) => index !== idx));
    displayClickOption();
  }

  const displayModifierModal = () => {
    switch (page) {
      case "fournisseur":
        return(
                <ModifierFournisseur
                  ModifierModalDisplay={ModifierModalDisplay}
                  setModifierModalDisplay={setModifierModalDisplay}
                  displayClickOption={displayClickOption}
                  index={idx}
                  rowsData={rowsData} 
                  updateRowsData={updateRowsData} 
                   />
        )
      case "technicien":
        return(
                <ModifierTechnicien
                  ModifierModalDisplay={ModifierModalDisplay}
                  setModifierModalDisplay={setModifierModalDisplay}
                  displayClickOption={displayClickOption}
                  index={idx}
                  rowsData={rowsData} 
                  updateRowsData={updateRowsData} 
                  listeIdFournisseur={listeIdFournisseur}
                   />
      )
      case "plateforme":
        return(
                <ModifierPlateforme
                  ModifierModalDisplay={ModifierModalDisplay}
                  setModifierModalDisplay={setModifierModalDisplay}
                  displayClickOption={displayClickOption}
                  index={idx}
                  rowsData={rowsData} 
                  updateRowsData={updateRowsData} 
                  listeIdFournisseur={listeIdFournisseur}
                   />
      )
      case "equipement":
        return(
                <ModifierEquipement
                  ModifierModalDisplay={ModifierModalDisplay}
                  setModifierModalDisplay={setModifierModalDisplay}
                  displayClickOption={displayClickOption}
                  index={idx}
                  rowsData={rowsData} 
                  updateRowsData={updateRowsData} 
                  listeIdFournisseur={listeIdFournisseur}
                   />
      )
    }
  }
  return (
            <>
                <button className='dropDownOption' onClick={() => editRow()}>Modifier</button>
                <button className='dropDownOption' onClick={() => deleteRow()}>Supprimer</button>
                {displayModifierModal()}
            </>
  )
} 