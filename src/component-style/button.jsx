import React from "react"

export default function Buttons({children, type = "submit", className = ''}){
  return(
  <button
    type={type}
    className={className}
  >
      {children}
    </button>
  )
}
