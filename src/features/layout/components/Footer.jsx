import React from "react"
import "../styles/Footer.css"

export function Footer(){
  return(
    <>
      <div className="footer-container">
        <div className="footer-img">
          <img src="src\assets\ddtechLogo.png" alt="" />
        </div>
        <div className="footer-info">
          <p>
            ventas@viltech.mx
            Suc. Vilches Sahuro #25 Hermosillo 85900
            Col. 14 De Enero
            CP. 85900
            Hermosillo, Sonora Mx.
            Suc. 14 De Enero
            Calle Sahuaro #25
            Zona Centro
            CP. 85900
            Hermosillo, Sonora, Mexico.
          </p>
        </div>
        <div className="footer-social-icons">
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><img src="src\assets\facebook.png" alt="Imagen Logo de Facebook" /></a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><img src="src\assets\youtube.png" alt="Imagen Logo de Youtube" /></a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><img src="src\assets\x.png" alt="Imagen Logo de Twitter" /></a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><img src="src\assets\instagram.png" alt="Imagen Logo de Instagram" /></a>
        </div>
      </div>
    </>
  )
}