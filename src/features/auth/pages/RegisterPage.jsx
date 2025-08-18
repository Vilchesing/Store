import React, { useState } from "react"
import Input from "../components/inputFields"
import Buttons from "../../shared/components/button"
import { register } from "../services/authServices"

export function Register(){
  const [formData, setFormData] = useState({nombre: '', apellidos:'', password:'', email:''})

  const handleChange = e =>{
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = async e => {
    e.preventDefault();
    try{
      await register(formData.nombre, formData.apellidos, formData.email, formData.password)
      alert("Usuario registrado con éxito");

    }catch(e){
      alert(e.message);
    }
    
  };

  return(
    <>
      <div className="register-wrapper">
        <div className="register-container">

          <form onSubmit={handleSubmit}>

            <Input
            label={"Nombre"}
            type="Text"
            name={"nombre"}
            value={formData.nombre}
            onChange={handleChange}
            placeholder={"Introduce tu nombre"}
            required></Input>

            <Input
            label={"Aepllidos"}
            type="Text"
            name={"apellidos"}
            value={formData.apellidos}
            onChange={handleChange}
            placeholder={"Introduce tu nombre"}
            required></Input>

            <Input
            label={"Email"}
            type="email"
            name={"email"}
            value={formData.email}
            onChange={handleChange}
            placeholder={"Introduce tu email"}
            required></Input>

            <Input
            label={"Contrasena"}
            type="password"
            name={"password"}
            value={formData.password}
            onChange={handleChange}
            placeholder={"Introduce tu contrasena"}
            required></Input>
            
            <Buttons className={"loggin-button"}>Registrarse</Buttons>
          </form>
        </div>
      </div>
    </>
  )
}