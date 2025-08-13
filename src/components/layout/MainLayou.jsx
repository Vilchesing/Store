import React from "react"
import { BlueBar } from "../BlueBar"
import { DarkBar } from "../DarkBar.jsx"
import { Footer } from "../Footer.jsx"
import PropTypes from 'prop-types';
import { useState, useEffect } from "react";
import useWindowWidth from "../../utils/UseWindowWidth.js";
import { Categorys } from '../Categorys.jsx'
import { jwtDecode } from "jwt-decode";


export default function MainLayout({children}){
    const width = useWindowWidth();
        const breakpoint = 989; // Define tu punto de quiebre, por ejemplo, para tablets
      
        // Puedes derivar un estado basado en la resolución
        const [isUpCategory, setIsUpCategory] = useState(width < breakpoint);
      
        useEffect(() => {
          setIsUpCategory(width > breakpoint);
        }, [width]);
        
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
        {!isUpCategory && <Categorys />}
      <main>
        {isUpCategory && <Categorys />}
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