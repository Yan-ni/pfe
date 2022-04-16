import React from 'react'

export default function DataList({dataListOptions}) {
            return(
                <datalist id='datalist' className='dataList' key={1}>
                  {dataListOptions.map(dataListOptions => {
                    return(<option value={dataListOptions}/>)
                })}
                </datalist>
              );
          }