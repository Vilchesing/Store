import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import Profile from "../../components/auth/profile"
import Input from "../../components/inputFields"
import Buttons from "../../component-style/button"
import {login} from "../../services/authServices.js"

export function LoginPage(){
  const [formData, setFormData] = useState({email: '', password:''})
  const navigate = useNavigate();

  const handleChange = e =>{
    setFormData({...formData, [e.target.name]: e.target.value})
  }

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await login(formData.email, formData.password);
    navigate("/"); // Solo si login no lanza error
  } catch (error) {
    alert(error.message); // Aquí se queda si hay error
  }
};

  return(
    <>
      <div className="login-wrapper">
        <div className="login-container">
          <div className="profile-decoration">
            <Profile url={"https://media.licdn.com/dms/image/v2/D5603AQHWyxmzswImHw/profile-displayphoto-crop_800_800/B56ZhPNKEdG4AI-/0/1753675506393?e=1758153600&v=beta&t=BnH7MTGcBv8gabzRKCa3BHIR7QaVgazUB6dyrdzsPZM"}></Profile>
          </div>

          <form onSubmit={handleSubmit}>
            <Input 
            label={"Usuario"}
            name={"email"}
            value={formData.email}
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
            <Buttons className={"loggin-button" } type="submit">Iniciar sesion</Buttons>
          </form>

          <div className="auth-options"></div>
          <a href="#" className="option-password"><span className="option">Olvidaste tu contrasena?</span></a>
          <span className="option-decoration-password"></span>
          <a href="#" className="option-register"><span className="option">Registrarse</span></a>
          <span className="option-decoration-register"></span>
        </div>
      </div>
    </>
  )
}