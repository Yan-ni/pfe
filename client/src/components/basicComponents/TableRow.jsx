import React, { useState } from 'react'
import threeDots from '../../assets/images/three-dots.svg'
import DropDownOptions from './DropDownOptions';

export default function TableRow({rowsData, setRowsData, page}) {
  const [dropdown, setDropdown] = useState(null);
  const [classTableRow, setClassTableRow]=useState("tableRow"+page);
  const displayClickOption = (index) => {
    setDropdown((prev) => {
        return prev === index ? null : index;
    });
};

  const displayTableHead = (data,page) => {
    switch (page) {
      case "fournisseur":
        return(<>
            <p>{data.id}</p>
            <p>{data.nom}</p>
            <p>{data.email}</p>
            <p>{data.adresse}</p>
        </>)
      case "technicien":
        return(<>
          <p>{data.id}</p>
          <p>{data.nom}</p>
          <p>{data.prenom}</p>
          <p>{data.telephone}</p>
          <p>{data.fournisseur}</p>
          <p>{data.email}</p>
          <p>{data.adresse}</p>
      </>)
    }
  }
  return (<>
          {rowsData.map((data,index)=>{      
          return(
          <div className={classTableRow} key={data.id}>
            {displayTableHead(data,page)}
            <div className='dropDown'>
            <img className='threeDotsIcon' src={threeDots} alt='' onClick={()=>displayClickOption(index)}/>
              <div className={dropdown === index ? 'dropDownMenu' : 'hidden'} style={{ display: dropdown === index ? 'block' : 'none' }}>
                  <DropDownOptions 
                    rowsData={rowsData} 
                    updateRowsData={setRowsData} 
                    idx={index} 
                    displayClickOption={displayClickOption}
                    page={page}/>
              </div>    
            </div>
          </div>
          )
        })}
        </>
        )
}