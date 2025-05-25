import React from "react"
import "../component-style/modalmenu.css"

export function ModalMenu (){
  return(
    <>
    <div className="modal-menu">
      <ul className="modal-list">
        <li className="modal-list-items"><a href="#">Home</a></li>
        <li className="modal-list-items"><a href="#">Producatos</a></li>
        <li className="modal-list-items"><a href="#">Tiendas</a></li>
        <li className="modal-list-items"><a href="#">Pride</a></li>
        <li className="modal-list-items"><a href="#">Asus</a></li>
        <li className="modal-list-items"><a href="#">Ultimate PC</a></li>
        <li className="modal-list-items"><a href="#">MSI PC</a></li>
      </ul>

      <div className="modal-search"> 
        <input type="text" name="" id="" className="modal-input"/>
        <button className="modal-button">Buscar</button>
      </div>
      
      <ul className="modal-list modal-list-cart">
        <li className="modal-list-items"><a  className="modal-link-car" href="#"><span>0</span></a></li>
        <li className="modal-list-items"><a className="modal-link-buy" href="#">Comprar</a></li>
      </ul>
    </div>
    </>
  )
}