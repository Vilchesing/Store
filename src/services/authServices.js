export async function login(email, password) {
    const res = await fetch("http://localhost:3000/api/auth/login", {
    method: "POST",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify({email, password})
  })
  
  const data = await res.json();

  if (!res.ok){
    throw new Error(data.Error ||"Usuario o contrasena incorrectos");
  } 

  localStorage.setItem("token", data.token)
  return data;
  
}

export function logout() {
  // 1. Limpiar el token del localStorage
  localStorage.removeItem("token");

  // Opcional: Redirigir al usuario a la página de inicio de sesión
  window.location.href = "/"; 
}