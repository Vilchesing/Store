import React from "react"
import { SocialIcon } from "./SocialIcons";
import PropTypes from "prop-types";

export function DarkBar({isLogged, username}){
  return(
    <>
    <div className="container-top-bar">
      <div className="left-top-bar">
        <ul className="top-bar-list">
          <li>Nosotros</li>
          <li>|</li>
          <li>Blog</li>
          <li>|</li>
          <li>Contacto</li>
        </ul>
      </div>

      <div className="center-top-bar">
        <SocialIcon/>
      </div>
      <div className="right-top-bar">
        <ul className="top-bar-list">
          {isLogged ? (
            <>
              <li>Bienvenido {username}</li>
              <li>|</li>
              <li>Mis pedidos</li>
            </>
          ) : (
            <>
              <li>Iniciar sesión</li>
              <li>|</li>
              <li>Registrarme</li>
            </>
          )}
        </ul>
      </div>
          </div>
          </>
        )
      }
