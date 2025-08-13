import React, { useState } from "react"
import Input from "../../components/inputFields"
import Buttons from "../../component-style/button"

export function Register(){
  const [formData, setFormData] = useState({username: '', password:'', email:''})

  const handleChange = e =>{
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault();
    // lógica de autenticación
  };

  return(
    <>
      <div className="login-wrapper">
        <div className="login-container">

          <form onSubmit={handleSubmit}>
            <Input 
            label={"Usuario"}
            name={"username"}
            value={formData.username}
            onChange={handleChange}
            placeholder={"Introduce tu nombre de usuario"}
            required></Input>

            <Input
            label={"Contrasena"}
            type="password"
            name={"password"}
            value={formData.password}
            onChange={handleChange}
            placeholder={"Introduce tu contrasena"}
            required></Input>

            <Input
            label={"Email"}
            type="email"
            name={"email"}
            value={formData.email}
            onChange={handleChange}
            placeholder={"Introduce tu email"}
            required></Input>
            
            <Buttons className={"loggin-button"}>Registrarse</Buttons>
          </form>
        </div>
      </div>
    </>
  )
}