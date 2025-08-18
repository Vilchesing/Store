import React from "react";
import { useState, useEffect } from "react";
import useWindowWidth from '../../../utils/UseWindowWidth.js'
import "../styles/categories.css"

export  default function Categories(){
  const width = useWindowWidth();
  const breakpoint = 989; // Define tu punto de quiebre, por ejemplo, para tablets

  // Puedes derivar un estado basado en la resolución
  const [isCategory, setIsCategory] = useState(width < breakpoint);

  useEffect(() => {
    setIsCategory(width > breakpoint);
  }, [width]); // Actualiza isMobile cada vez que 'width' cambia
  return(
    <>
    <div className="categorys-container">
      <ul className="category-list">
        <li className="category-list-items category-list-items-tittle">
        <img src="src/assets/menu.png" alt=""  className="category-list-img"/>
        <a href="#">Categorias</a></li>
        {isCategory && (
          <> {/* Usamos un Fragment para agrupar los <li> sin añadir un nodo extra */}
            <li className="category-list-items">
            <img src="src/assets/PC.png" alt=""  className="category-list-img"/>
            <a href="#">Computadoras</a></li>
            <li className="category-list-items">
            <img src="src/assets/components.png" alt=""  className="category-list-img"/>
            <a href="#">Componentes</a></li>
            <li className="category-list-items">
            <img src="src/assets/accesories.png" alt=""  className="category-list-img"/>
            <a href="#">Accesorios</a></li>
            <li className="category-list-items">
            <img src="src/assets/monitor.png" alt=""  className="category-list-img"/>
            <a href="#">Monitores</a></li>
            <li className="category-list-items">
            <img src="src/assets/cellphone.png" alt=""  className="category-list-img"/>
            <a href="#">Celulares</a></li>
            <li className="category-list-items">
            <img src="src/assets/HDD.png" alt=""  className="category-list-img"/>
            <a href="#">Almacenamiento</a></li>
          </>
        )}
      </ul>
    </div>
    </>
  )
}
