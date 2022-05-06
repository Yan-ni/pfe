import React from 'react'

export default function OptionButton({ rowsData, setRowsData, index}) {
  return (
            <>
                <button className='dropDownOption'>Modifier</button>
                <button className='dropDownOption'>Supprimer</button>
            </>
  )
}
