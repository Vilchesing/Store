import React, { useState } from "react";
import { ModalMenu } from "./ModalMenu";
import "../styles/bluebar.css"

export function BlueBar() {
  const [isMenuOpen, setIsMenuOpEN] = useState(false);

  const handleMenuToggle = () => {
    // Actualizamos el estado para abrir/cerrar el menú
    setIsMenuOpEN((prevIsMenuOpen) => !prevIsMenuOpen);
    console.log("El menú ahora está:", !isMenuOpen ? "Abierto" : "Cerrado");
  };

  return (
    <>
        <div className="blue-bar">
      <img
        src="src\assets\ddtechLogo.png"
        alt="Logo de DDTECH"
        className="blue-bar-logo"
      />

      <div className="menu-logo-container">
        <button className="menuOpen" onClick={handleMenuToggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
            strokeWidth={1.8}
            stroke="white"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>

      {/* Renderizamos ModalMenu condicionalmente si isMenuOpen es true */}
    </div>
    {isMenuOpen && <ModalMenu />}
    </>

  );
}