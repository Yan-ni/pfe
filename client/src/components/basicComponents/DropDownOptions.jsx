import React from 'react'

export default function OptionButton({ rowsData, updateRowsData, id, displayClickOption}) {

  const deleteRow = () => {
    updateRowsData(rowsData => rowsData.filter((rowsData, index) => index !== id));
    displayClickOption();
  }

  return (
            <>
                <button className='dropDownOption'>Modifier</button>
                <button className='dropDownOption' onClick={()=>deleteRow()}>Supprimer</button>
            </>
  )
}
