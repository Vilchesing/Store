import React from "react";
export default function Profile({url}){
  return(
  <>
    <img 
      src={url}
      alt="Imagen Perfil de Usuario"
      className="profile-picture" />
  </>
  )
}