function login() {
   const usuario = document.getElementById("usuario").value;
   const password = document.getElementById("password").value;
   const mensaje = document.getElementById("mensaje");

   if (usuario === "admin" && password === "1234") {
      // Guardar usuario en localStorage
      localStorage.setItem("usuario", usuario);
      window.location.href = "home.html";
   } else {
      mensaje.style.color = "red";
      mensaje.textContent = "Usuario o contraseña incorrectos";
   }
}

