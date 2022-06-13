import React, { useState }  from 'react'
import ModifierFournisseur from '../fournisseur/ModifierFournisseur';

export default function OptionButton({ rowsData, updateRowsData, idx, displayClickOption, setModifierFournisseurModalDisplay}) {

  const [ModifierModalDisplay, setModifierModalDisplay] = useState(false);  

  const editRow = () => {
    setModifierModalDisplay(true);
  }
  const deleteRow = () => {
    updateRowsData(rowsData => rowsData.filter((rowsData, index) => index !== idx));
    displayClickOption();
  }

  return (
            <>
                <button className='dropDownOption' onClick={() => editRow()}>Modifier</button>
                <button className='dropDownOption' onClick={() => deleteRow()}>Supprimer</button>
                <ModifierFournisseur
                  ModifierModalDisplay={ModifierModalDisplay}
                  setModifierModalDisplay={setModifierModalDisplay}
                  displayClickOption={displayClickOption}
                  index={idx}
                  rowsData={rowsData} 
                  updateRowsData={updateRowsData} 
                   />
            </>
  )
} 