const usuario = localStorage.getItem("usuario");

if (!usuario) {
   window.location.href = "login.html";
} else {
   document.getElementById("nombreUsuario").textContent = "👤 " + usuario;
}

function logout() {
   localStorage.removeItem("usuario");
   window.location.href = "login.html";
}