// Obtener usuario de localStorage
const usuario = localStorage.getItem("usuario");

if (!usuario) {
   // Si no hay usuario logueado, volver al login
   window.location.href = "login.html";
} else {
   document.getElementById("nombreUsuario").textContent = "👤 " + usuario;
}

function logout() {
   localStorage.removeItem("usuario");
   window.location.href = `"login.html";`
}