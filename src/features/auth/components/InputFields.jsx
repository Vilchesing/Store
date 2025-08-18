import React from "react"

export default function Input({label, type = 'text', name, value, onChange, placeholder}){
  return(
    <div className="input-group">
      {label &&  <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
      />
    </div>
  )
}