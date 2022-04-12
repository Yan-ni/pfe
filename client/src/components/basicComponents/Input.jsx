import React from 'react'

export default function Input({ id, children, ...props }) {
  return (
    <div className="input">
      <label htmlFor={id}>{children}</label>
      <input id={id} type="text" {...props} />
    </div>
  )
}
