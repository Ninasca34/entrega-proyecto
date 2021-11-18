// Selección de una imágen del carousel 
document.querySelectorAll(".img-carousel").forEach((item) => {
    item.addEventListener("click", (event) => {
      const image = event.target.getAttribute("alt");
      const src = event.target.getAttribute("src")
      console.log("Usted ha seleccionado la imagen: " + image)
      console.log(src)
      const tshirt = document.querySelector(".tshirt-selected");
      setImageToTshirt(tshirt, src);
      
    });
  });

 // Presentación de la imagen seleccionada impresa en la remera


 function setImageToTshirt(element, src){
    element.setAttribute("src", src)
 }

 // Una vez seleccionada la imágen selecciona aceptar y continúa al siguiente paso

 let boton = document.getElementById("btnPrincipal")
 boton.addEventListener("click", respuestaClick)
 function respuestaClick(){
     console.log("Respuesta Evento");
 }


 
 /* var edad = 16;
  if (edad === 18) {
    var esAdulto = true;
  } else {
    esAdulto = false;
  }
  console.log("..Es Adulto: " + esAdulto);*/

/* let resultado = false;

 if (resultado == false) {
    console.log("Por favor vuelva a seleccionar una imágen");
 } else {
   
    console.log("siguiente");
 } */
 
 
 
