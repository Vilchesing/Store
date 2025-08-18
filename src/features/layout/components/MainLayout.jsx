import React from "react"
import { BlueBar } from "../components/Bluebar.jsx"
import { DarkBar } from "../components/Darkbar.jsx"
import { Footer } from "../components/Footer.jsx"
import PropTypes from 'prop-types';
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";


export default function MainLayout({children}){
        const [isLogged, setIsLogged] = useState (false)
        const [username, setUsername] = useState(""); // 👈 nuevo estado

        useEffect(()=>{
          const token = localStorage.getItem('token');

          if(token){
            try{

              const decodeToken =  jwtDecode (token);
              const currentTime =  Date.now()/1000;

              if(decodeToken.exp > currentTime){
                setIsLogged(true);
                setUsername(decodeToken.email || "Usuario");
              }else{
                localStorage.removeItem('token')
                setIsLogged(false)
                setUsername("");
              }

            }catch(e){
            localStorage.removeItem('token');
            setIsLogged(false);
            setUsername("");
          }
          }else{
            setIsLogged(false)
            setUsername("");
          }
        }, [])
    
  return(
    <div className="main-layout">
        <header>
        <DarkBar isLogged={isLogged} username={username} />
        <BlueBar />
      </header>
      <main>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

MainLayout.propTypes ={
  children: PropTypes.node.isRequired
}