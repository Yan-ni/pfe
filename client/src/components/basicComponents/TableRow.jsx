import React from 'react'
import threeDots from '../../assets/images/three-dots.svg'

export default function TableRow({rowsData}) {
  return (<>
          {rowsData.map((data)=>{      
          return(
          <div className="tableRow">
            <p>{data.id}</p>
            <p>{data.nom}</p>
            <p>{data.email}</p>
            <p>{data.adresse}</p>
            <img className='threeDots' src={threeDots} alt='' />
          </div>
          )
        })}
        </>
        )
}
