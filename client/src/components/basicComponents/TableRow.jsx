import React, { useState } from 'react'
import threeDots from '../../assets/images/three-dots.svg'
import DropDownOptions from './DropDownOptions';

export default function TableRow({rowsData, setRowsData}) {
  const [dropdown, setDropdown] = useState(null);
  const displayClickOption = (index) => {
    setDropdown((prev) => {
        return prev === index ? null : index;
    });
};
  return (<>
          {rowsData.map((data,index)=>{      
          return(
          <div className="tableRow">
            <p>{data.id}</p>
            <p>{data.nom}</p>
            <p>{data.email}</p>
            <p>{data.adresse}</p>
            <div className='dropDown'>
            <img className='threeDotsIcon' src={threeDots} alt='' onClick={()=>displayClickOption(index)}/>
              <div className={dropdown === index ? 'dropDownMenu' : 'hidden'} style={{ display: dropdown === index ? 'block' : 'none' }}>
                  <DropDownOptions rowsData={rowsData} updateRowsData={setRowsData} id={index} displayClickOption={displayClickOption}/>
              </div>    
            </div>
          </div>
          )
        })}
        </>
        )
}
