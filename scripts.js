window.onload = () => {
   let modoEscuro = document.querySelector("#modoEscuro")
   console.log(modoEscuro)
   const html = document.querySelector("html");

   modoEscuro.addEventListener("click", function () {
      html.classList.toggle("modoEscuro")
   })
}
