import React from 'react'
import '../../assets/styles/pages.css'

export default function Input({dataListOptions, id, children, ...props }) {
  const displayOptions = (dataListOptions) => {
    if (typeof dataListOptions !== 'undefined') {
          return(
          <datalist id='datalist' className='dataList'>
            {dataListOptions.map(dataListOptions => {
              return(<option value={dataListOptions} className="dataListOption"/>)
            })}
          </datalist>
        );
    }
  }
  return (
    <div className="input">
      <label htmlFor={id}>{children}</label>
      <input id={id} type="text" {...props}>
      </input>
      {displayOptions(dataListOptions)}
    </div>
  )
}
