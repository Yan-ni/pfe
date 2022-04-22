import React from 'react'

export default function TableRow({rowsData}) {
  return (<>
          {rowsData.map((data)=>{      
          return(
            <div className="tableRows">
          <div><p>{data.id}</p></div>
          <div><p>{data.nom}</p></div>
          <div><p>{data.email}</p></div>
          <div><p>{data.adresse}</p></div>
          </div>
          )
        })}
        </>
        )
}
