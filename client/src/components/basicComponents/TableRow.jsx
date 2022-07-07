import React, { useState } from 'react'
import threeDots from '../../assets/images/three-dots.svg'
import moreArrow from '../../assets/images/arrow-more.svg'
import minimiseArrow from '../../assets/images/arrow-down.svg'
import DropDownOptions from './DropDownOptions';

export default function TableRow({rowsData, setRowsData, page, listeId,moreRowsData}) {
  const [dropDown, setDropdown] = useState(null);
  const [arrowId, setArrowId] = useState(null);
  const [classTableRow, setClassTableRow]=useState("tableRow"+page);

  const displayClickOption = (index) => {
    setDropdown((prev) => {
        return prev === index ? null : index;
    });
  };
  const arrowHandleClick = (index) => {
    setArrowId((prev) => {
        return prev === index ? null : index;
    });
  };
  const displayRow = (data,page) => {
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
          <p>{data.idFournisseur}</p>
          <p>{data.email}</p>
          <p>{data.adresse}</p>
      </>)
      case "plateforme":
        return(<>
          <p>{data.id}</p>
          <p>{data.nom}</p>
      </>)
      case "equipement":
        return(<>
          <p>{data.numeroDeSerie}</p>
          <p>{data.codeFRU}</p>
          <p>{data.nomDequipement}</p>
          <p>{data.idSite}</p>
          <p>{data.idPlateforme}</p>
          <p>{data.severite}</p>
          <p>{data.date_mise_marche}</p>
          <p>{data.date_fin_service}</p>
      </>)
    }
  }
  const arrowMoreDisplay = (page,index) => {
    switch (page) {
      case "technicien":
        return(<>
          <img className='moreArrow' src={moreArrow} alt='' onClick={()=>arrowHandleClick(index)} style={{ display: arrowId === index ? 'none' : 'block'}}/>
          <img className='moreArrow' src={minimiseArrow} alt='' onClick={()=>arrowHandleClick(index)} style={{ display: arrowId === index ? 'block' : 'none' }}/>
      </>)
      case "equipement":
        return(<>
          <img className='moreArrow' src={moreArrow} alt='' onClick={()=>arrowHandleClick(index)} style={{ display: arrowId === index ? 'none' : 'block'}}/>
          <img className='moreArrow' src={minimiseArrow} alt='' onClick={()=>arrowHandleClick(index)} style={{ display: arrowId === index ? 'block' : 'none' }}/>
      </>)
    }
  }

  const displayMoreInfo = (page,data,index) =>{
    let obj={id:"125",nom:"default",email:"default",adresse:"default"};
    obj=moreRowsData.filter(element => element.id===data.idFournisseur)
    console.log(index);
    console.log(obj); 
      switch (page) {
        case "technicien":
          return(<>
            <div className="rowInfoFournisseur" key={data.id} style={{ display: arrowId === index ? 'flex' : 'none' }}> 
              <p>nom du fournisseur  :  {obj.nom}</p>
              <p>email du fournisseur  :  {obj.email}</p>
              <p>adresse du fournisseur  :  {obj.adresse}</p>
            </div></>)
        case "equipement":
          return(<>
            <div className="rowInfoFournisseur" style={{ display: arrowId === index ? 'flex' : 'none' }}> 
              <p>nom de la plateforme  :  {data.nom}</p>
            </div></>)
      }      
  }

  return (<>
          {rowsData.map((data,index)=>{      
          return(<>
          <div className={classTableRow} key={data.id}> 
            {arrowMoreDisplay(page,index)}
            {displayRow(data,page)}
            <div className='dropDown'>
            <img className='threeDotsIcon' src={threeDots} alt='' onClick={()=>displayClickOption(index)}/>
            <div className='dropDownMenu' style={{ display: dropDown === index ? 'block' : 'none' }}>
                  <DropDownOptions 
                    rowsData={rowsData} 
                    updateRowsData={setRowsData} 
                    idx={index} 
                    displayClickOption={displayClickOption}
                    page={page}
                    listeId={listeId}
                    setArrowId={setArrowId}/>
              </div>    
            </div>
          </div>
          {displayMoreInfo(page,data,index)}          
          </>
          )
        })}
        </>
        )
}