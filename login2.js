
// Lista de usuarios predeterminados
const usuarios = [
   { usuario: "admin", password: "1234" },
   { usuario: "filipa", password: "8888" },
   { usuario: "jefferson", password: "3333" },//café
   //    { usuario: "victor", password: "2222" },//crestores
   { usuario: "julian", password: "1111" },//guaria morada
   { usuario: "andres", password: "6666" },//carreta
   { usuario: "valentina", password: "5555" },//árbol de guanacaste
   { usuario: "santiago", password: "4444" },//bandera
   { usuario: "pablo", password: "9999" },//escudo
   { usuario: "jose", password: "2020" },//venado cola blanca
   { usuario: "lyan", password: "7777" },//marimba
   { usuario: "samuel", password: "1010" },//las esferas precolombinas
   { usuario: "liander", password: "11111" },//el himno
   { usuario: "joshua", password: "1212" },//el manatí
   { usuario: "alexa", password: "1414" },//oso perezoso
   { usuario: "sheila", password: "1515" },//yigüirro
   { usuario: "yadiel", password: "1616" },//tucán
   { usuario: "elioth", password: "1717" },//teatro nacional
   { usuario: "abraham", password: "1818" }//las mascaradas
];

function login() {
   const usuarioInput = document.getElementById("usuario").value;
   const passwordInput = document.getElementById("password").value;
   const mensaje = document.getElementById("mensaje");

   // Buscar en la lista
   const user = usuarios.find(
      u => u.usuario === usuarioInput 
      && u.password === passwordInput
   );

   if (user) {
      // Guardar en localStorage
      localStorage.setItem("usuario", user.usuario);
      window.location.href = "home.html";
   } else {
      mensaje.style.color = "red";
      mensaje.textContent = "Usuario o contraseña incorrectos";
   }
}