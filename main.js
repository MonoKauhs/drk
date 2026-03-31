

const nomeSalvo = localStorage.getItem("NomeDoUsuario")
console.log(nomeSalvo)
document.getElementById("bagulho").textContent = "Oiiiiiiii, "+nomeSalvo;