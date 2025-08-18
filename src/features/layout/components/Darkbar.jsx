import React from "react"
import { SocialIcon } from "./SocialIcons";
import PropTypes from "prop-types";
import { logout } from "../../auth/services/authServices";
import "../styles/darkbar.css"

export function DarkBar({isLogged, username}){
  return(
    <>
    <div className="container-top-bar">
      <div className="left-top-bar">
        <ul className="top-bar-list">
          <a href="#"><li>Nosotros</li></a>
          <li>|</li>
          <a href="#"><li>Blog</li></a>
          <li>|</li>
          <a href="#">Contacto</a>
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
              <a href="#">Mis pedidos</a>
              <li>|</li>
              <li onClick={logout}>Salir</li>
            </>
          ) : (
            <>
              <a href="http://localhost:5173/login"><li>Iniciar sesión</li></a>
              <li>|</li>
              <a href="http://localhost:5173/register"><li>Registrarme</li></a>
            </>
          )}
        </ul>
      </div>
          </div>
          </>
        )
      }
