import React from 'react'
import threeDots from '../../assets/images/three-dots.svg'

export default function TableRow({rowsData}) {
  return (<>
          {rowsData.map((data)=>{      
          return(
            <div className="tableRows">
          <div><p>{data.id}</p></div>
          <div><p>{data.nom}</p></div>
          <div><p>{data.email}</p></div>
          <div><p>{data.adresse}</p></div>
          <img className='threeDots' src={threeDots} alt='' />
          </div>
          )
        })}
        </>
        )
}
