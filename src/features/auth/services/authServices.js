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

export async function register(nombre, apellidos, email, password){
    const res = await fetch("http://localhost:3000/api/auth/register",{
      method: "POST",
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify({nombre, apellidos, email, password})
    })
    const data = await res.json();
    
    // **AQUÍ ESTÁ EL CAMBIO CLAVE:**
    // Verificamos si la respuesta no es "ok" O si los datos contienen un campo de error
    if (!res.ok || data.error) {
        // Lanzamos un error con el mensaje de error del backend
        throw new Error(data.error || data.Error || "Error desconocido en el registro");
    }

    // Si todo va bien, retornamos los datos
    return data;
}