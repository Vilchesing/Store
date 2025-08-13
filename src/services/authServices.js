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